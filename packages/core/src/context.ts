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

const defaultSettings: ContextSettings = Object.freeze({
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
  ignores: [],
})

const hasPrettier = isPackageExists('prettier')
const hasTypescript = isPackageExists('typescript')
const isInEditor = isInEditorEnv()

export class Context {
  public features: ContextFeatures
  public settings: ContextSettings

  constructor(options: ContextOptions) {
    this.features = Object.freeze(this.initializeFeatures(options.features))
    this.settings = this.initializeSettings(options)
  }

  get isInEditor(): boolean {
    return isInEditor
  }

  private initializeFeatures(features: Partial<Features> = {}): ContextFeatures {
    const { stylistic = true, typescript = true, sorting = true } = features
    const isPrettierMode = stylistic === 'prettier'

    return {
      prettier: hasPrettier && isPrettierMode,
      sorting: isBoolean(sorting) ? sorting : false,
      stylistic: !isPrettierMode && (isBoolean(stylistic) || isObject(stylistic)) ? Boolean(stylistic) : false,
      typescript: hasTypescript && isBoolean(typescript) ? typescript : false,
    }
  }

  private initializeSettings({ features = {}, ignores = [] }: ContextOptions): ContextSettings {
    const finalStylistic = isObject(features.stylistic)
      ? { ...defaultSettings.stylistic, ...features.stylistic }
      : { ...defaultSettings.stylistic }
    const finalIgnores = [...new Set([...ignores, ...defaultSettings.ignores])]
    const finalTypescript = { ...defaultSettings.typescript }

    return {
      ignores: finalIgnores,
      stylistic: finalStylistic,
      typescript: finalTypescript,
    }
  }
}
