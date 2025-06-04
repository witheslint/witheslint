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
  /**
   * A unique identifier for the preset.
   *
   * @description This name is used for debugging, logging, and identifying the preset
   * in configuration chains. It should follow the format 'preset:category'
   * for consistency (e.g., 'preset:typescript', 'preset:vue').
   */
  name: string

  /**
   * Optional preparation hook that runs before the preset installation.
   *
   * @description This function is called during the configuration setup phase and allows
   * the preset to perform any necessary initialization tasks, such as:
   * - Setting up default configurations
   * - Preparing shared resources
   *
   * The context is mutable during this phase, allowing modifications
   * to settings, features, or other configuration aspects.
   */
  prepare?: (context: Context) => Awaitable<void>

  /**
   * Main installation function that generates ESLint configuration modules.
   *
   * @description This is the core function of the preset, responsible for:
   * - Loading and configuring ESLint plugins
   * - Defining rules based on the current context
   * - Creating configuration objects for different file patterns
   * - Applying conditional logic based on detected features
   *
   * The context is read-only during this phase to ensure configuration
   * consistency across all presets in the chain.
   */
  install: (context: DeepReadonly<Context>) => Awaitable<Arrayable<ConfigModule>>
}
