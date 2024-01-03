import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

type Prefix<
  T extends Record<string, any>,
  Pre extends string,
> = { [K in keyof T as `${Pre}${K & string}`]: T[K] }

type UnPrefix<
  T extends Record<string, any>,
  Pre extends string,
> = { [K in keyof T as K extends `${Pre}${infer U}` ? U : never]: T[K] }

type RenamePrefix<
  T extends Record<string, any>,
  Old extends string,
  New extends string,
> = Prefix<UnPrefix<T, Old>, New>

type MergeIntersection<
  T extends Record<any, any>,
> = { [K in keyof T]: T[K] }

export type Arrayable<T> = Array<T> | T

export type Awaitable<T> = Promise<T> | T

export type RenamedRules = MergeIntersection<
  Rules &
  RenamePrefix<Rules, '@typescript-eslint/', 'ts/'> &
  RenamePrefix<Rules, '@stylistic/', 'style/'>
>

export type ConfigItem = Omit<FlatESLintConfigItem, 'plugins' | 'rules'> & {
  plugins?: Record<string, any>
  rules?: Record<string, any> | RenamedRules
}

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
  stylistic: boolean | StylisticConfig
  typescript: boolean
}

export interface Context {
  styles: StylisticConfig
  features: FeaturesConfig
}

export interface Preset {
  name: string
  setup: (options: Context) => Arrayable<ConfigItem>
}
