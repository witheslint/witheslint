import type { ESLint, Linter } from 'eslint'

export type Arrayable<T> = Array<T> | T

export type Awaitable<T> = Promise<T> | T

export type ConvertAllFields<T, Target> = { [K in keyof T]: Target }

export type FlatConfigItem = Linter.FlatConfig

export type ParserModule = Linter.FlatConfigParserModule

export type PluginModule = ESLint.Plugin

export interface StylisticConfig {
  /**
   * Indentation level
   * Similar to the `tabWidth` and `useTabs` options in Prettier
   *
   * @default 2
   */
  indent?: 'tab' | number
  /**
   * Quote style
   * Similar to `singleQuote` option in Prettier
   *
   * @default 'single'
   */
  quotes?: 'double' | 'single'
  /**
   * Whether to enable semicolons
   * Similar to `semi` option in Prettier
   *
   * @default false
   */
  semi?: boolean
  /**
   * Enable JSX support
   * @default true
   */
  jsx?: boolean
  /**
   * When to enable arrow parenthesis
   * Similar to `arrowParens` option in Prettier
   *
   * @default false
   */
  arrowParens?: boolean
  /**
   * Which brace style to use
   * @default '1tbs'
   */
  braceStyle?: '1tbs' | 'allman' | 'stroustrup'
  /**
   * Whether to require spaces around braces
   * Similar to `bracketSpacing` option in Prettier
   *
   * @default true
   */
  blockSpacing?: boolean
  /**
   * When to enable prop quoting
   * Similar to `quoteProps` option in Prettier
   *
   * @default 'consistent-as-needed'
   */
  quoteProps?: 'always' | 'as-needed' | 'consistent-as-needed' | 'consistent'
  /**
   * When to enable comma dangles
   * Similar to `trailingComma` option in Prettier
   *
   * @default 'always-multiline'
   */
  commaDangle?: 'always-multiline' | 'always' | 'never' | 'only-multiline'
}

export interface FeaturesConfig {
  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic: boolean | StylisticConfig
  /**
   * Enable TypeScript support.
   *
   * @default true
   */
  typescript: boolean
}

export interface Preset {
  /**
   * Custom name of each preset item.
   */
  name: string
  /**
   * Optional extensions for the preset to borrow rules from typescript.
   */
  extensions?: string[]
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should not apply to.
   */
  ignores?: string[]
  /**
   * Function to setup the preset.
   */
  setup: (options: Context) => Arrayable<FlatConfigItem>
}
