import type { Arrayable, FeaturesConfig, FileSpec, FlatConfigItem, Preset } from './types'
import { imports, javascript, jsdoc, sorter, stylistic, typescript, unicorn } from './configs'
import { useContext } from './context'
import { GLOB_EXCLUDE } from './globs'
import { arrayify, isFunction, uniqueBy } from './helper'

interface Options {
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should not apply to. If not specified, the configuration object
   * applies to all files matched by files
   */
  ignores?: FileSpec[]
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

  const ignores = [...GLOB_EXCLUDE, ...options.ignores || []]
  const configs = [javascript(), imports(), unicorn(), jsdoc()]

  if (features.stylistic) {
    configs.push(stylistic(styles), sorter())
  }

  if (options.presets?.length) {
    const presets = uniqueBy(
      options.presets,
      (pre, current) => pre.name === current.name,
    )

    if (features.typescript) {
      const extraExtensions = presets
        .flatMap(preset => preset.extensions)
        .filter(Boolean) as string[]

      configs.push(typescript({ extraExtensions }))
    }

    for (const preset of presets) {
      if (!isFunction(preset.setup)) continue
      const rawPreset = preset.setup(context)
      if (!rawPreset) continue
      ignores.push(...(preset?.ignores || []))
      configs.push(arrayify(rawPreset))
    }
  } else if (features.typescript) {
    configs.push(typescript())
  }

  if (options.extends) {
    configs.push(arrayify(options.extends))
  }

  configs.unshift([{ ignores: ignores.filter(Boolean) }])

  return configs.flat()
}

export function definePreset<T extends Preset>(preset: T): T {
  return preset
}
