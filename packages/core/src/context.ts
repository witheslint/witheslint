import type { ConvertAllFields, Features, StylisticConfig, TypescriptConfig } from './types'
import { isPackageExists } from 'local-pkg'
import { isBoolean, isInEditorEnv, isObject } from './helper'

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

  constructor(options: Partial<Features> = {}, ignores: string[] = []) {
    this.features = this.initializeFeatures(options)
    this.settings = this.initializeSettings(options, ignores)
  }

  get isInEditor(): boolean {
    return isInEditorEnv()
  }

  private initializeFeatures(options: Partial<Features>): ContextFeatures {
    return {
      stylistic: isBoolean(options.stylistic) ? options.stylistic : true,
      sorting: isBoolean(options.sorting) ? options.sorting : true,
      typescript: isBoolean(options.typescript) ? options.typescript : isPackageExists('typescript'),
    }
  }

  private initializeSettings(options: Partial<Features>, ignores: string[]): ContextSettings {
    const finalStylistic = isObject(options.stylistic)
      ? { ...DEFAULT_SETTINGS.stylistic, ...options.stylistic }
      : { ...DEFAULT_SETTINGS.stylistic }

    return {
      ignores,
      stylistic: finalStylistic,
      typescript: { ...DEFAULT_SETTINGS.typescript },
    }
  }
}
