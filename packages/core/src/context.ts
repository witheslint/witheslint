import type { ConvertAllFields, FeaturesConfig, StylisticConfig, TypescriptConfig } from './types'
import { isPackageExists } from 'local-pkg'
import { isBoolean, isInEditorEnv, isObject } from './helper'

export class Context {
  features: ConvertAllFields<FeaturesConfig, boolean>
  ignores: string[]
  optionsStylistic: StylisticConfig
  optionsTypescript: TypescriptConfig
  isInEditor: boolean

  constructor(options: Partial<FeaturesConfig> = {}, ignores: string[] = []) {
    const hasTs = isPackageExists('typescript')

    this.features = {
      stylistic: true,
      sorting: true,
      typescript: hasTs,
    }
    this.ignores = ignores
    this.optionsStylistic = {
      indent: 2,
      jsx: true,
      quotes: 'single',
      semi: false,
      arrowParens: false,
      braceStyle: '1tbs',
      blockSpacing: true,
      quoteProps: 'consistent-as-needed',
      commaDangle: 'always-multiline',
    }
    this.optionsTypescript = {
      extensions: [],
    }
    this.isInEditor = isInEditorEnv()
    this.applyFeatures(options)
  }

  private applyFeatures(features: Partial<FeaturesConfig> = {}) {
    const { stylistic, sorting, typescript } = features

    if (isBoolean(sorting)) {
      this.features.sorting = sorting
    }
    if (isBoolean(typescript)) {
      this.features.typescript = typescript
    }
    if (isBoolean(stylistic)) {
      this.features.stylistic = stylistic
    } else if (isObject(stylistic)) {
      this.optionsStylistic = {
        ...this.optionsStylistic,
        ...stylistic,
      }
    }
  }
}
