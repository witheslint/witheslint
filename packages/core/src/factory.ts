import type { Arrayable, ConfigItem, FeaturesConfig, Preset } from './types'
import { imports, javascript, perfectionist, stylistic, typescript, unicorn } from './configs'
import { useContext } from './context'
import { GLOB_EXCLUDE } from './globs'
import { arrayify, isBoolean, isFunction, uniqueBy } from './helper'

interface Options {
  ignores?: string[]
  features?: FeaturesConfig
  presets?: Preset[]
  extends?: Arrayable<ConfigItem>
}

export function defineConfig(options: Options = {}): ConfigItem[] {
  const context = useContext()
  context.features = {
    typescript: isBoolean(options.features?.typescript)
      ? options.features?.typescript
      : context.features.typescript,
    stylistic: isBoolean(options.features?.stylistic)
      ? options.features?.stylistic
      : context.features.stylistic,
  }
  context.styles = {
    ...context.styles,
    ...isBoolean(options.features?.stylistic)
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

  if (features.stylistic) {
    config.push(stylistic(styles), perfectionist())
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
