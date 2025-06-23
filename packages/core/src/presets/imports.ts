import type { Preset } from '../factory'
import { interopDefault } from '../helper'

export function presetImports(): Preset {
  return {
    name: 'preset:imports',
    install: async () => {
      return [
        {
          name: 'witheslint:import:configs',
          plugins: {
            import: await interopDefault(import('eslint-plugin-import-x')) as any,
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
          },
        },
      ]
    },
  }
}
