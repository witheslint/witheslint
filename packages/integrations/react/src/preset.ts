import type { Preset } from '@witheslint/core'
import { GLOB_JSX, GLOB_TSX, renameRules } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { pluginReact, pluginReactHooks } from './modules'

export const GLOB_REACT_EXCLUDES = ['**/.next'] as const

export function presetReact(): Preset {
  return {
    name: 'preset:react',
    prepare: ({ settings }) => {
      settings.ignores.push(...GLOB_REACT_EXCLUDES)
    },
    install: ({ features }) => {
      const { typescript } = features

      return [
        {
          name: 'witheslint:react:plugins',
          plugins: {
            'react': pluginReact,
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
              ? renameRules((pluginReact as any).configs['recommended-type-checked'].rules, '@eslint-react/', 'react/')
              : renameRules((pluginReact as any).configs['recommended'].rules, '@eslint-react/', 'react/'),

            // recommended rules react-hooks
            'react-hooks/exhaustive-deps': 'warn',
            'react-hooks/rules-of-hooks': 'error',
          },
        },
      ]
    },
  }
}
