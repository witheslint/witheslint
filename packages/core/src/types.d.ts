import type { Context } from './context'
import type { ESLint, Linter } from 'eslint'

export type Arrayable<T> = Array<T> | T

export type Awaitable<T> = Promise<T> | T

export type DeepReadonly<T> = keyof T extends never ? T : { readonly [k in keyof T]: DeepReadonly<T[k]> }

export type Unified<T, Target> = { [K in keyof T]: Target }

export type ConfigModule = Linter.Config

export type ParserModule = Linter.Parser

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

export interface TypescriptConfig {
  /**
   * extra file extensions for typescript project
   */
  extensions?: string[]
}

export interface Features {
  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic?: boolean | StylisticConfig | 'prettier'
  /**
   * Enable sorting rules.
   *
   * @default true
   */
  sorting?: boolean
  /**
   * Enable TypeScript support.
   */
  typescript?: boolean
}

export interface Preset {
  /** Custom name of each preset item. */
  name: string
  /** Function to prepare the context. */
  prepare?: (context: Context) => Awaitable<void>
  /** Function to install the preset. */
  install: (context: DeepReadonly<Context>) => Awaitable<Arrayable<ConfigModule>>
}
