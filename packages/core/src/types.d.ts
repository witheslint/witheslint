import type { Context } from './context'
import type { ESLint, Linter } from 'eslint'

export type Arrayable<T> = Array<T> | T

export type Awaitable<T> = Promise<T> | T

export type DeepReadonly<T> = keyof T extends never ? T : { readonly [k in keyof T]: DeepReadonly<T[k]> }

export type Unified<T, Target> = { [K in keyof T]: Target }

export type ConfigModule = Linter.Config

export type ParserModule = Linter.Parser

export type PluginModule = ESLint.Plugin

export interface Preset {
  /** Custom name of each preset item. */
  name: string
  /** Function to prepare the context. */
  prepare?: (context: Context) => Awaitable<void>
  /** Function to install the preset. */
  install: (context: DeepReadonly<Context>) => Awaitable<Arrayable<ConfigModule>>
}
