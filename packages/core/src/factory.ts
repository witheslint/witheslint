import type { Arrayable, ConfigModule, FeaturesConfig, Preset } from './types'
import { disables, ignores, imports, javascript, jsdoc, sorting, stylistic, typescript, unicorn } from './configs'
import { Context } from './context'
import { arrayify, isFunction, uniqueBy } from './helper'

interface Options {
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should not apply to.
   */
  ignores?: string[]
  /**
   * Configuration for various features.
   */
  features?: FeaturesConfig
  /**
   * Predefined configurations for common use cases.
   */
  presets?: Preset[]
  /**
   * Additional configurations to extend.
   */
  extends?: Arrayable<ConfigModule>
}

export function defineConfig(options: Options = {}): ConfigModule[] {
  const context = new Context(options.features, options.ignores)

  const configs = []
  const presets = uniqueBy(options.presets || [], (pre, current) => pre.name === current.name)

  for (const preset of presets) {
    if (isFunction(preset.setup)) {
      const rawPreset = preset.setup(context)
      if (!rawPreset) continue
      configs.push(arrayify(rawPreset))
    }
  }

  if (options.extends) {
    const customize = arrayify(options.extends)
      .map(({ name = 'witheslint:customize', ...i }) => ({ ...i, name }))
    configs.push(customize)
  }

  configs.unshift(
    ignores(context),
    javascript(),
    jsdoc(),
    unicorn(context),
    imports(context),
    sorting(context),
    stylistic(context),
    typescript(context),
    disables(context),
  )

  return configs.flat().filter(Boolean)
}

export function definePreset<T extends Preset = Preset>(preset: T): T {
  return preset
}
