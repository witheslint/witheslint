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

export interface StylisticConfig {
  indent?: 'tab' | number
  jsx?: boolean
  quotes?: 'double' | 'single'
  semi?: boolean
}

export interface FeaturesConfig {
  stylistic: boolean | StylisticConfig
  typescript: boolean
}

export interface Context {
  styles: StylisticConfig
  features: FeaturesConfig
}

export type ConfigItem = Omit<FlatESLintConfigItem, 'plugins' | 'rules'> & {
  plugins?: Record<string, any>
  rules?: Record<string, any> | RenamedRules
}

export interface Preset {
  name: string
  setup: (options: Context) => Awaitable<Arrayable<ConfigItem>>
}
