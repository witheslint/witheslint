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
  public features: ContextFeatures
  public settings: ContextSettings

  constructor(options: ContextOptions) {
    this.features = this.initializeFeatures(options.features)
    this.settings = this.initializeSettings(options)
  }

  get isInEditor(): boolean {
    return isInEditorEnv()
  }

  private initializeFeatures(features: Partial<Features> = {}): ContextFeatures {
    const { stylistic = true, typescript = true, sorting = true } = features
    const isPrettierMode = stylistic === 'prettier'
    const hasTypescript = isPackageExists('typescript')

    return {
      prettier: isPrettierMode,
      sorting: isBoolean(sorting) ? sorting : false,
      stylistic: !isPrettierMode && (isBoolean(stylistic) || isObject(stylistic)) ? Boolean(stylistic) : false,
      typescript: hasTypescript && isBoolean(typescript) ? typescript : false,
    }
  }

  private initializeSettings({ features = {}, ignores = [] }: ContextOptions): ContextSettings {
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
