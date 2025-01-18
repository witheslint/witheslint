import type { Arrayable, ConfigModule, Features, Preset } from './types'
import { Context } from './context'
import { arrayify, isFunction, pick, uniqueBy } from './helper'
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

const builtinPresets: Preset[] = [
  presetIgnores(),
  presetDisables(),
  presetJavascript(),
  presetJsdoc(),
  presetUnicorn(),
  presetImports(),
  presetSorting(),
  presetStylistic(),
  presetTypescript(),
]

export async function defineConfig(options: Options = {}): Promise<ConfigModule[]> {
  const context = new Context(pick(options, ['features', 'ignores']))

  const presets = [...builtinPresets, ...options.presets || []].filter(Boolean)
  const results = await normalizePresets(presets, context)
  const customize = options.extends ? normalizeExtends(arrayify(options.extends)) : []

  return [...results, ...customize].filter(Boolean)
}

export function definePreset<T extends Preset = Preset>(preset: T): T {
  return preset
}

async function normalizePresets(presets: Preset[] = [], context: Context): Promise<ConfigModule[]> {
  if (presets.length === 0) return []

  const dedupe = uniqueBy(presets, (pre, current) => pre.name === current.name)
  const needPrepare = dedupe.filter(preset => isFunction(preset.prepare))
  const needInstall = dedupe.filter(preset => isFunction(preset.install))

  await Promise.all(needPrepare.map(preset => preset.prepare!(context)))
  const configs = await Promise.all(needInstall.map(preset => preset.install(Object.freeze(context))))

  return configs.flat().filter(Boolean)
}

function normalizeExtends<T extends ConfigModule>(options: T[]): T[] {
  return options.map(({ name = 'witheslint:customize', ...rest }) => ({
    ...rest,
    name,
  })) as T[]
}
