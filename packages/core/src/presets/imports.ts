import type { Preset } from '../types'
import { pluginImport, pluginUnusedImports } from '../modules'

export function presetImports(): Preset {
  return {
    name: 'preset:imports',
    install: ({ isInEditor }) => {
      return [
        {
          name: 'witheslint:import:configs',
          plugins: {
            'import': pluginImport,
            'unused-imports': pluginUnusedImports,
          },
          rules: {
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            'import/export': 'error',
            'import/first': 'error',
            'import/newline-after-import': ['error', { count: 1 }],
            'import/no-duplicates': 'error',
            'import/no-mutable-exports': 'error',
            'import/no-named-default': 'error',
            'import/no-self-import': 'error',
            'import/no-useless-path-segments': 'error',
            'import/no-webpack-loader-syntax': 'error',

            'unused-imports/no-unused-imports': isInEditor ? 'off' : 'warn',
            'unused-imports/no-unused-vars': [
              'warn',
              {
                args: 'after-used',
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                vars: 'all',
                varsIgnorePattern: '^_',
              }],
          },
        },
      ]
    },
  }
}
