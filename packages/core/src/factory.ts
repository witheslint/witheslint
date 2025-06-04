import type { Features } from './context'
import type { Arrayable, ConfigModule, Preset } from './types'
import { castArray, isFunction, pick, unique } from 'radashi'
import { Context } from './context'
import {
  presetDisables,
  presetIgnores,
  presetImports,
  presetJavascript,
  presetJsdoc,
  presetSorting,
  presetStylistic,
  presetTypescript,
  presetUnicorn,
} from './presets'

interface Options {
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should not apply to.
   *
   * @description Specify file patterns to exclude from linting. These patterns
   * follow the glob syntax and will be added to the configuration's ignore list.
   */
  ignores?: string[]

  /**
   * Configuration for linting feature modules
   *
   * @description Controls which feature modules are enabled in the ESLint configuration
   * These features directly affect the loading of built-in presets
   */
  features?: Features

  /**
   * Predefined configurations for common use cases.
   *
   * @description An array of preset configurations that provide
   * ready-to-use rule sets for specific scenarios or frameworks.
   * These presets are applied in addition to the built-in presets.
   */
  presets?: Preset[]

  /**
   * Additional configurations to extend or customize the final configuration.
   *
   * @description Allows extending the generated configuration with custom
   * rules, settings, or overrides. Can be a single configuration object
   * or an array of configurations. These are applied after all presets
   * and can override any previously defined rules.
   */
  extends?: Arrayable<ConfigModule>
}

export async function defineConfig(options: Options = {}): Promise<ConfigModule[]> {
  const context = new Context(pick(options, ['features', 'ignores']))
  const builtinPresets = [
    presetIgnores(),
    presetJavascript(),
    presetJsdoc(),
    presetUnicorn(),
    presetImports(),
    context.features.sorting && presetSorting(),
    (context.features.stylistic || context.features.prettier) && presetStylistic(),
    context.features.typescript && presetTypescript(),
    presetDisables(),
  ].filter(Boolean)

  const presets = [...builtinPresets, ...(options.presets || [])].filter(Boolean) as Preset[]
  const configs = await normalizePresets(presets, context)
  const customize = options.extends ? normalizeExtends(castArray(options.extends)) : []

  return [...configs, ...customize].filter(Boolean)
}

export function definePreset<T extends Preset = Preset>(preset: T): T {
  return preset
}

async function normalizePresets(presets: Preset[] = [], context: Context): Promise<ConfigModule[]> {
  if (presets.length === 0) return []

  const deduped = unique(presets, i => i.name)
  const shouldPrepare = deduped.filter(preset => isFunction(preset.prepare))
  const shouldInstall = deduped.filter(preset => isFunction(preset.install))

  await Promise.all(shouldPrepare.map(preset => preset.prepare!(context)))
  const configs = await Promise.all(shouldInstall.map(preset => preset.install!(Object.freeze(context))))

  return configs.flat().filter(Boolean)
}

function normalizeExtends<T extends ConfigModule>(options: T[]): T[] {
  return options.map(({ name = 'witheslint:customize', ...rest }) => ({
    ...rest,
    name,
  })) as T[]
}
