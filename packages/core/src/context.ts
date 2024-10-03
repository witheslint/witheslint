import type { ConvertAllFields, Features, StylisticConfig, TypescriptConfig } from './types'
import { isPackageExists } from 'local-pkg'
import { isBoolean, isInEditorEnv, isObject } from './helper'

interface ContextOptions {
  ignores?: string[]
  features?: Partial<Features>
}

interface ContextSettings {
  ignores: string[]
  stylistic: Required<StylisticConfig>
  typescript: Required<TypescriptConfig>
  [key: string]: any
}

type ContextFeatures = ConvertAllFields<Features, boolean>

const DEFAULT_SETTINGS: Omit<ContextSettings, 'ignores'> = Object.freeze({
  stylistic: {
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: false,
    arrowParens: false,
    braceStyle: '1tbs',
    blockSpacing: true,
    quoteProps: 'consistent-as-needed',
    commaDangle: 'always-multiline',
  },
  typescript: {
    extensions: [],
  },
})

export class Context {
  features: ContextFeatures
  settings: ContextSettings

  constructor(options: ContextOptions) {
    this.features = this.initializeFeatures(options.features)
    this.settings = this.initializeSettings(options)
  }

  get isInEditor(): boolean {
    return isInEditorEnv()
  }

  private initializeFeatures(features: Partial<Features> = {}): ContextFeatures {
    return {
      stylistic: isBoolean(features.stylistic) ? features.stylistic : true,
      sorting: isBoolean(features.sorting) ? features.sorting : true,
      typescript: isBoolean(features.typescript) ? features.typescript : isPackageExists('typescript'),
    }
  }

  private initializeSettings(options: ContextOptions): ContextSettings {
    const { features = {}, ignores = [] } = options
    const finalStylistic = isObject(features.stylistic)
      ? { ...DEFAULT_SETTINGS.stylistic, ...features.stylistic }
      : { ...DEFAULT_SETTINGS.stylistic }

    return {
      ignores,
      stylistic: finalStylistic,
      typescript: { ...DEFAULT_SETTINGS.typescript },
    }
  }
}
