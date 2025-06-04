import type { Preset } from '@witheslint/core'
import { GLOB_JSX, GLOB_TSX, interopDefault, renameRules } from '@witheslint/core'

export const GLOB_REACT_EXCLUDES = ['**/.next'] as const

export function presetReact(): Preset {
  return {
    name: 'preset:react',
    prepare: ({ settings }) => {
      settings.ignores.push(...GLOB_REACT_EXCLUDES)
    },
    install: async ({ features, settings }) => {
      const { typescript } = features
      const parserTs = settings.typescript.parser
      const [pluginReact, pluginReactHooks] = await Promise.all([
        interopDefault(import('@eslint-react/eslint-plugin')),
        interopDefault(import('eslint-plugin-react-hooks')),
      ] as const)

      return [
        {
          name: 'witheslint:react:plugins',
          plugins: {
            'react': pluginReact as any,
            'react-hooks': pluginReactHooks,
          },
        },
        {
          name: 'witheslint:react:configs',
          files: typescript ? [GLOB_JSX, GLOB_TSX] : [GLOB_JSX],
          languageOptions: {
            parser: typescript ? parserTs : undefined,
            parserOptions: {
              ecmaFeatures: {
                jsx: true,
              },
            },
          },
          rules: {
            // recommended rules react
            ...typescript
              ? renameRules(pluginReact.configs['recommended-type-checked'].rules, '@eslint-react/', 'react/')
              : renameRules(pluginReact.configs['recommended'].rules, '@eslint-react/', 'react/'),

            // recommended rules react-hooks
            'react-hooks/exhaustive-deps': 'warn',
            'react-hooks/rules-of-hooks': 'error',
          },
        },
      ]
    },
  }
}
