import type { FlatConfigItem } from '../types'
import { GLOB_DTS } from '../globs'
import { pluginImport, pluginUnusedImports } from '../modules'

export const imports = (): FlatConfigItem[] => {
  return [
    {
      plugins: {
        'import': pluginImport,
        'unused-imports': pluginUnusedImports,
      },
      rules: {
        'import/export': 'error',
        'import/first': 'error',
        'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
        'import/no-default-export': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-webpack-loader-syntax': 'error',

        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': ['warn', { args: 'after-used', ignoreRestSiblings: true }],
      },
    },
    {
      files: [GLOB_DTS],
      rules: {
        'import/no-default-export': 'off',
        'import/no-duplicates': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/{*config,index}.?([cm])[jt]s'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ]
}
