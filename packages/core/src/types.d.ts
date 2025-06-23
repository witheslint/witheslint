import type { ESLint, Linter } from 'eslint'

export type Arrayable<T> = Array<T> | T

export type Awaitable<T> = Promise<T> | T

export type DeepReadonly<T> = keyof T extends never ? T : { readonly [k in keyof T]: DeepReadonly<T[k]> }

export type Unified<T, Target> = { [K in keyof T]: Target }

export type ConfigModule = Linter.Config

export type ParserModule = Linter.Parser

export type PluginModule = ESLint.Plugin
