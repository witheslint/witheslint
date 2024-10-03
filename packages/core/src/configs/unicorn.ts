import type { Context } from '../context'
import type { ConfigModule } from '../types'
import { pluginUnicorn } from '../modules'

export function unicorn(context: Context): ConfigModule[] {
  const { features } = context
  const { stylistic } = features
  return [
    {
      name: 'witheslint:unicorn:configs',
      plugins: { unicorn: pluginUnicorn },
      rules: {
        ...(pluginUnicorn as any).configs['flat/recommended'].rules,

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

        ...stylistic
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
}
