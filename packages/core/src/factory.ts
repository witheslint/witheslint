import type { Arrayable, ConfigItem, FeaturesConfig, Preset } from './types'
import { imports, javascript, perfectionist, stylistic, typescript, unicorn } from './configs'
import { useContext } from './context'
import { GLOB_EXCLUDE } from './globs'
import { arrayify, uniqueBy } from './helper'

interface Options {
  ignores?: string[]
  features?: FeaturesConfig
  presets?: Preset[]
  extends?: Arrayable<ConfigItem>
}

export function defineConfig(options: Options = {}): ConfigItem[] {
  const context = useContext()
  context.features = {
    ...context.features,
    stylistic: typeof options.features?.stylistic === 'boolean'
      ? options.features?.stylistic
      : context.features.stylistic,
  }
  context.styles = {
    ...context.styles,
    ...typeof options.features?.stylistic === 'boolean'
      ? {}
      : options.features?.stylistic,
  }
  const { features, styles } = context

  const config = [javascript(), imports(), unicorn()]

  if (options.ignores) {
    config.unshift([{ ignores: options.ignores }])
  } else {
    config.unshift([{ ignores: GLOB_EXCLUDE }])
  }

  if (features.typescript) {
    config.push(typescript())
  }

  if (features.stylistic) {
    config.push(stylistic(styles), perfectionist())
  }

  if (options.presets?.length) {
    const rawPresets = uniqueBy(options.presets, (pre, cur) => pre.name === cur.name)
    for (const preset of rawPresets) {
      if (!preset.setup) continue
      const rawPreset = preset.setup(context)
      if (!rawPreset) continue
      config.push(arrayify(rawPreset))
    }
  }

  if (options.extends) {
    config.push(arrayify(options.extends))
  }

  return config.flat()
}

export function definePreset(preset: Preset): Preset {
  return preset
}
