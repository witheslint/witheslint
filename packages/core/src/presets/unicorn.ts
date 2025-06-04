import type { Preset } from '../types'
import { interopDefault } from '../helper'

export function presetUnicorn(): Preset {
  return {
    name: 'preset:unicorn',
    install: async ({ features }) => {
      const pluginUnicorn = await interopDefault(import('eslint-plugin-unicorn'))

      return [
        {
          name: 'witheslint:unicorn:configs',
          plugins: { unicorn: pluginUnicorn },
          rules: {
            ...pluginUnicorn.configs['recommended'].rules,

            'unicorn/consistent-function-scoping': 'off',
            'unicorn/filename-case': [
              'error',
              {
                cases: { kebabCase: true, pascalCase: true, camelCase: true },
                ignore: [/^[A-Z]+\..*$/],
              },
            ],
            'unicorn/import-style': 'off',
            'unicorn/no-abusive-eslint-disable': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/prefer-top-level-await': 'off', // top level await is not supported in all environments
            'unicorn/prevent-abbreviations': 'off',

            ...features.stylistic
              ? {}
              : {
                  'unicorn/template-indent': 'off',
                  'unicorn/empty-brace-spaces': 'off',
                  'unicorn/no-nested-ternary': 'off',
                  'unicorn/number-literal-case': 'off',
                },
          },
        },
      ]
    },
  }
}
