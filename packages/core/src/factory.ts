import type { Arrayable, ConfigModule, Features, Preset } from './types'
import { disables, ignores, imports, javascript, jsdoc, sorting, stylistic, typescript, unicorn } from './configs'
import { Context } from './context'
import { arrayify, isFunction, pick, uniqueBy } from './helper'

interface Options {
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should not apply to.
   */
  ignores?: string[]
  /**
   * Configuration for various features.
   */
  features?: Features
  /**
   * Predefined configurations for common use cases.
   */
  presets?: Preset[]
  /**
   * Additional configurations to extend.
   */
  extends?: Arrayable<ConfigModule>
}

export async function defineConfig(options: Options = {}): Promise<ConfigModule[]> {
  const context = new Context(pick(options, ['features', 'ignores']))
  const presets = await processPresets(options.presets, context)
  const configs = [
    ignores(context),
    javascript(),
    jsdoc(),
    unicorn(context),
    imports(context),
    sorting(context),
    stylistic(context),
    typescript(context),
    disables(context),
    presets,
  ]

  if (options.extends) {
    configs.push(arrayify(options.extends).map(({ name = 'witheslint:customize', ...i }) => ({ ...i, name })))
  }

  return configs.flat().filter(Boolean)
}

export function definePreset<T extends Preset = Preset>(preset: T): T {
  return preset
}

async function processPresets(presets: Preset[] = [], context: Context): Promise<ConfigModule[]> {
  const validPresets = uniqueBy(presets, (pre, current) => pre.name === current.name)
    .filter(preset => isFunction(preset.setup))
  const configs = await Promise.all(validPresets.map(preset => preset.setup(context)))

  return configs.flat().filter(Boolean)
}
