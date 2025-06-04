import type { ParserModule, Unified } from './types'
import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import { isBoolean, isObject } from 'radashi'
import { isPackageExists } from './helper'

interface StylisticConfig extends Omit<StylisticCustomizeOptions, 'pluginName' | 'severity'> {
  quotes?: 'single' | 'double'
}

interface TypescriptConfig {
  /**
   * Additional file extensions to be treated as TypeScript files
   * @example ['.vue', '.svelte']
   * @default []
   */
  extensions?: string[]
  /**
   * Specify the parser to be used for TypeScript files
   */
  parser?: ParserModule
}

export interface Features {
  /**
   * Enable stylistic support
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
   * Enable sorting support
   *
   * @default true
   */
  sorting?: boolean
  /**
   * Enable TypeScript support
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
    parser: undefined as any,
  },
  ignores: [],
}) satisfies ContextSettings

const hasPrettier = isPackageExists('prettier')
const hasTypescript = isPackageExists('typescript')

export class Context {
  public features: ContextFeatures
  public settings: ContextSettings

  constructor(options: ContextOptions) {
    this.features = this.initializeFeatures(options.features)
    this.settings = this.initializeSettings(options)
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
    const isPrettierMode = features.stylistic === 'prettier'
    const stylistic = !isPrettierMode && isObject(features.stylistic)
      ? { ...defaultSettings.stylistic, ...features.stylistic }
      : { ...defaultSettings.stylistic }

    return {
      ignores: [...new Set([...ignores, ...defaultSettings.ignores])],
      stylistic,
      typescript: { ...defaultSettings.typescript },
    }
  }
}
