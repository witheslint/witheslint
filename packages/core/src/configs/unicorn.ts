import type { FlatConfigItem } from '../types'
import { pluginUnicorn } from '../modules'

export const unicorn = (): FlatConfigItem[] => {
  return [
    {
      name: 'witheslint:unicorn:configs',
      plugins: { unicorn: pluginUnicorn },
      rules: {
        ...(pluginUnicorn as any).configs['flat/recommended'].rules,

        'unicorn/consistent-function-scoping': 'warn',
        'unicorn/filename-case': [
          'error',
          {
            cases: { kebabCase: true, pascalCase: true, camelCase: true },
            ignore: [/^[A-Z]+\..*$/],
          },
        ],
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ]
}
