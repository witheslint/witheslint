import type { Arrayable, Awaitable, ConfigModule, DeepReadonly, ParserModule, Unified } from './types'
import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import { assign, castArray, isFunction, isObject, omit, unique } from 'radashi'
import { isPackageExists } from './helper'
import {
  presetDisables,
  presetIgnores,
  presetImports,
  presetJavascript,
  presetJsdoc,
  presetSorting,
  presetStylistic,
  presetTypescript,
  presetUnicorn,
} from './presets'

// ================== Core =================

interface Options {
  /**
   * An array of glob patterns indicating the files that the configuration
   * object should not apply to.
   *
   * @description Specify file patterns to exclude from linting. These patterns
   * follow the glob syntax and will be added to the configuration's ignore list.
   */
  ignores?: string[]

  /**
   * Configuration for linting feature modules
   *
   * @description Controls which feature modules are enabled in the ESLint configuration
   * These features directly affect the loading of built-in presets
   */
  features?: Features

  /**
   * Predefined configurations for common use cases.
   *
   * @description An array of preset configurations that provide
   * ready-to-use rule sets for specific scenarios or frameworks.
   * These presets are applied in addition to the built-in presets.
   */
  presets?: Preset[]

  /**
   * Additional configurations to extend or customize the final configuration.
   *
   * @description Allows extending the generated configuration with custom
   * rules, settings, or overrides. Can be a single configuration object
   * or an array of configurations. These are applied after all presets
   * and can override any previously defined rules.
   */
  extends?: Arrayable<ConfigModule>
}

export async function defineConfig(
  options: Options = {},
): Promise<ConfigModule[]> {
  const configs = await processPresets(omit(options, ['extends']))
  const customize = processExtends(castArray(options.extends || []))

  return [...configs, ...customize].filter(Boolean)
}

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

export function definePreset<T extends Preset = Preset>(
  preset: T,
): T {
  return preset
}

// ================== Utilities =================

export function createContext({
  features = {},
  ignores = [],
}: Pick<Options, 'features' | 'ignores'> = {}): Context {
  const { stylistic, typescript, sorting } = assign(
    {
      stylistic: true,
      sorting: true,
      typescript: isPackageExists('typescript'),
    },
    features,
  )
  const enablePrettier = stylistic === 'prettier'

  return {
    features: {
      sorting: !!sorting,
      stylistic: !enablePrettier && (stylistic === true || isObject(stylistic)),
      typescript: !!typescript,
    },
    settings: {
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/.output',
        '**/.cache',
        ...ignores,
      ],
      stylistic: {
        config: assign(
          {
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
          isObject(stylistic) ? stylistic : {},
        ),
        mode: enablePrettier ? 'prettier' : 'raw',
      } as Required<StylisticSetting>,
      typescript: {
        extensions: [],
        parser: undefined as unknown as ParserModule,
      } as Required<TypescriptSetting>,
    },
  }
}

async function processPresets({
  presets = [],
  ignores,
  features,
}: Omit<Options, 'extends'>): Promise<ConfigModule[]> {
  const context = createContext({ features, ignores })
  const { sorting, typescript } = context.features

  const allPresets = [
    presetIgnores(),
    presetJavascript(),
    presetJsdoc(),
    presetUnicorn(),
    presetImports(),
    presetStylistic(),
    sorting && presetSorting(),
    typescript && presetTypescript(),
    presetDisables(),
    ...presets,
  ].filter(Boolean) as Preset[]

  const deduped = unique(allPresets, i => i.name)
  const { prepareable, installable } = deduped.reduce(
    (acc, preset) => {
      if (isFunction(preset.prepare)) acc.prepareable.push(preset)
      if (isFunction(preset.install)) acc.installable.push(preset)
      return acc
    },
    { prepareable: [] as Preset[], installable: [] as Preset[] },
  )

  await Promise.all(prepareable.map(preset => preset.prepare!(context)))
  const configs = await Promise.all(
    installable.map(preset => preset.install!(Object.freeze(context))),
  )

  return configs.flat().filter(Boolean)
}

function processExtends<T extends ConfigModule = ConfigModule>(
  options: T[] = [],
): T[] {
  return options.map(({ name = 'witheslint:customize', ...rest }) => ({
    ...rest,
    name,
  })) as T[]
}

// ================== Types =================

interface Context {
  /**
   * Resolved features configuration
   */
  features: Unified<Features, boolean>

  /**
   * Resolved settings configurations
   */
  settings: Settings
}

interface Features {
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
  stylistic?: boolean | StylisticSetting['config'] | 'prettier'

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
   * @default auto-detected
   */
  typescript?: boolean
}

interface Settings {
  /**
   * Final list of ignore patterns
   */
  ignores: string[]

  /**
   * Complete stylistic configuration with all required properties
   */
  stylistic: Required<StylisticSetting>

  /**
   * Complete TypeScript configuration with all required properties
   */
  typescript: Required<TypescriptSetting>
}

interface StylisticSetting {
  /**
   * The mode in which stylistic rules should be applied
   *
   * - `'raw'`: Use raw stylistic rules
   * - `'prettier'`: Use Prettier-compatible rules
   *
   * @default 'raw'
   */
  mode?: 'raw' | 'prettier'

  /**
   * The configuration object for stylistic rules
   *
   * @description This object contains all stylistic rule settings.
   * It is used to customize the behavior of stylistic rules.
   */
  config?: Omit<StylisticCustomizeOptions, 'pluginName' | 'severity'> & {
    quotes?: 'single' | 'double'
  }
}

interface TypescriptSetting {
  /**
   * Additional file extensions to be treated as TypeScript files
   * @example ['.vue', '.svelte']
   */
  extensions?: string[]

  /**
   * Specify the parser to be used for TypeScript files
   */
  parser?: ParserModule
}
