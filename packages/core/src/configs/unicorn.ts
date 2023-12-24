import type { ConfigItem } from '../types'
import { pluginUnicorn } from '../modules'

export const unicorn = (): ConfigItem[] => {
  return [
    {
      plugins: { unicorn: pluginUnicorn },
      rules: {
        ...pluginUnicorn.configs.recommended.rules,

        'unicorn/filename-case': [
          'error',
          {
            cases: { kebabCase: true, pascalCase: true, camelCase: true },
            ignore: [/^[A-Z]+\..*$/],
          },
        ],
        'unicorn/consistent-function-scoping': 'warn',
        'unicorn/no-array-for-each': 'off',
        'unicorn/prefer-top-level-await': 'warn',
        'unicorn/prevent-abbreviations': 'warn',
      },
    },
  ]
}
