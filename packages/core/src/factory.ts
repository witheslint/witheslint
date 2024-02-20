import type { Arrayable, FeaturesConfig, FlatConfigItem, Preset } from './types'
import { imports, javascript, jsdoc, sorter, stylistic, typescript, unicorn } from './configs'
import { useContext } from './context'
import { GLOB_EXCLUDE } from './globs'
import { arrayify, isFunction, uniqueBy } from './helper'

interface Options {
  /**
   * `.eslintignore` is no longer supported in Flat config, use `ignores` instead.
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
  extends?: Arrayable<FlatConfigItem>
}

export function defineConfig(options: Options = {}): FlatConfigItem[] {
  const context = useContext(options.features)
  const { features, styles } = context

  const config = [javascript(), imports(), unicorn(), jsdoc()]

  if (options.ignores) {
    config.unshift([{ ignores: options.ignores }])
  } else {
    config.unshift([{ ignores: [...GLOB_EXCLUDE] }])
  }

  if (features.stylistic) {
    config.push(stylistic(styles), sorter())
  }

  if (options.presets?.length) {
    const rawPresets = uniqueBy(
      options.presets,
      (pre, current) => pre.name === current.name,
    )

    if (features.typescript) {
      const extraExtensions = rawPresets
        .flatMap(preset => preset.extensions)
        .filter(Boolean) as string[]

      config.push(typescript({ extraExtensions }))
    }

    for (const preset of rawPresets) {
      if (!isFunction(preset.setup)) continue
      const rawPreset = preset.setup(context)
      if (!rawPreset) continue
      config.push(arrayify(rawPreset))
    }
  } else if (features.typescript) {
    config.push(typescript())
  }

  if (options.extends) {
    config.push(arrayify(options.extends))
  }

  return config.flat()
}

export function definePreset(preset: Preset): Preset {
  return preset
}
