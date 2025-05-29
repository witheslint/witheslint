import type { Unified } from './types'
import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import { isBoolean, isObject } from 'radashi'
import { isInEditorEnv, isPackageExists } from './helper'

interface StylisticConfig extends Omit<StylisticCustomizeOptions, 'pluginName'> {
  quotes?: 'single' | 'double'
}

interface TypescriptConfig {
  /**
   * Additional file extensions to be treated as TypeScript files
   * @example ['.vue', '.svelte']
   * @default []
   */
  extensions?: string[]
}

export interface Features {
  /**
   * Enable stylistic rules configuration
   *
   * - `true`: Enable with default settings
   * - `false`: Disable stylistic rules
   * - `'prettier'`: Use Prettier-compatible mode
   * - `StylisticConfig`: Custom configuration object
   *
   * @default true
   */
  stylistic?: boolean | StylisticConfig | 'prettier'
  /**
   * Enable sorting rules
   *
   * @default true
   */
  sorting?: boolean
  /**
   * Enable TypeScript support and rules
   * Automatically detected based on TypeScript package presence
   *
   * @default Auto-detected
   */
  typescript?: boolean
}

type FeaturesFlag = Unified<Features, boolean>

interface ContextOptions {
  /**
   * Glob patterns for files/directories to ignore
   * @example ['**\/*.test.ts', 'dist/**']
   */
  ignores?: string[]
  /**
   * Partial feature configuration overrides
   */
  features?: Partial<Features>
}

interface ContextFeatures extends Required<FeaturesFlag> {
  /** Whether Prettier integration is active */
  prettier: boolean
  /** Index signature for extensibility */
  [key: string]: boolean
}

interface ContextSettings {
  /** Final list of ignore patterns */
  ignores: string[]
  /** Complete stylistic configuration with all required properties */
  stylistic: Required<StylisticConfig>
  /** Complete TypeScript configuration with all required properties */
  typescript: Required<TypescriptConfig>
  /** Index signature for extensibility */
  [key: string]: any
}

const defaultSettings = Object.freeze({
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
}) satisfies ContextSettings

const hasPrettier = isPackageExists('prettier')
const hasTypescript = isPackageExists('typescript')
const isInEditor = isInEditorEnv()

export class Context {
  public features: ContextFeatures
  public settings: ContextSettings

  constructor(options: ContextOptions) {
    this.features = this.initializeFeatures(options.features)
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
