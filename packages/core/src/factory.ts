import type { Arrayable, ConfigItem, FeaturesConfig, Preset } from './types'
import { imports, javascript, perfectionist, stylistic, typescript, unicorn } from './configs'
import { createContext } from './context'
import { GLOB_EXCLUDE } from './globs'
import { arrayify } from './helper'

interface Options {
  ignores?: string[]
  features?: FeaturesConfig
  presets?: Preset[]
  extends?: Arrayable<ConfigItem>
}

export function definePreset(preset: Preset): Preset {
  return preset
}

export function defineConfig(options: Options = {}): ConfigItem[] {
  const context = createContext()
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

  if (options.presets) {
    options.presets.forEach((item) => {
      const preset = item.setup(context)
      config.push(arrayify(preset))
    })
  }

  if (options.extends) {
    config.push(arrayify(options.extends))
  }

  return config.flat()
}
