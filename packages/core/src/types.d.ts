import type { RuleOptions as ImportRules } from '../dts/import'
import type { RuleOptions as JavaScriptRules } from '../dts/js'
import type { RuleOptions as JsdocRules } from '../dts/jsdoc'
import type { RuleOptions as SorterRules } from '../dts/sorter'
import type { RuleOptions as StylisticRules } from '../dts/style'
import type { RuleOptions as TypeScriptRules } from '../dts/ts'
import type { RuleOptions as UnicornRules } from '../dts/unicorn'
import type { RuleOptions as UnusedImportsRules } from '../dts/unused-imports'
import type { ESLint, Linter } from 'eslint'

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

type WrapRuleConfig<
  T extends { [key: string]: any },
> = { [K in keyof T]: T[K] extends Linter.RuleEntry ? T[K] : Linter.RuleEntry<T[K]> }

type ConvertAllFields<
  T, Target,
> = { [K in keyof T]: Target }

type ParserOptions = Omit<Linter.ParserOptions, 'parser'> & { parser?: ParserModule }

type LanguageOptions = Exclude<Linter.FlatConfig['languageOptions'], 'parser' | 'parserOptions'> & {
  parser?: ParserModule
  parserOptions?: Linter.ParserOptions & ParserOptions
}

type RenamedRules = WrapRuleConfig<
  MergeIntersection<
    JavaScriptRules &
    JsdocRules &
    ImportRules &
    UnicornRules &
    UnusedImportsRules &
    TypeScriptRules &
    SorterRules &
    StylisticRules
  >
>

export type ParserModule =
  & ESLint.ObjectMetaProperties
  & (
    | { parse(text: string, options?: any): any }
    | { parseForESLint(text: string, options?: any): any }
)

export type Arrayable<T> = Array<T> | T

export type Awaitable<T> = Promise<T> | T

export type FlatConfigItem = Omit<Linter.FlatConfig, 'languageOptions' | 'plugins' | 'rules'> & {
  /**
   * An object containing settings related to how JavaScript is configured for
   * linting.
   */
  // Relax parser type limitation, as most of the parser did not have correct type info yet.
  languageOptions?: LanguageOptions
  /**
   * An object containing a name-value mapping of plugin names to plugin objects.
   * When files is specified, these plugins are only available to the matching files.
   */
  // Relax plugins type limitation, as most of the plugins did not have correct type info yet.
  plugins?: Record<string, any>
  /**
   * An object containing the configured rules. When files or ignores are specified,
   * these rule configurations are only available to the matching files.
   */
  // Renamed some plugin to make the overall scope more consistent and easier to write.
  rules?: Linter.RulesRecord | Partial<Rules>
}

export interface Rules extends RenamedRules {}

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

export interface Context {
  styles: StylisticConfig
  features: ConvertAllFields<FeaturesConfig, boolean>
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
   * Function to setup the preset.
   */
  setup: (options: Context) => Arrayable<FlatConfigItem>
}
