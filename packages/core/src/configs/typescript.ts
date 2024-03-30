import type { FlatConfigItem } from '../types'
import { GLOB_CJS, GLOB_DTS, GLOB_TS, GLOB_TSX } from '../globs'
import { renameRules } from '../helper'
import { parserTs, pluginTs } from '../modules'

interface Options {
  extraExtensions?: string[]
}

export const typescript = (options: Options = {}): FlatConfigItem[] => {
  const { extraExtensions = [] } = options
  return [
    { plugins: { ts: pluginTs } },
    {
      files: [GLOB_TS, GLOB_TSX, ...extraExtensions.map(ext => `**/*.${ext}`)],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: extraExtensions.map(ext => `.${ext}`),
          sourceType: 'module',
        },
      },
      rules: {
        ...renameRules(
          (pluginTs as any).configs['eslint-recommended'].overrides[0].rules,
          '@typescript-eslint/',
          'ts/',
        ),
        ...renameRules(
          (pluginTs as any).configs['strict'].rules,
          '@typescript-eslint/',
          'ts/',
        ),

        'no-dupe-class-members': 'off',
        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',

        'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        'ts/ban-types': ['error', { types: { Function: false } }],
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
        'ts/no-dupe-class-members': 'error',
        'ts/no-dynamic-delete': 'off',
        'ts/no-explicit-any': 'off',
        'ts/no-extraneous-class': 'off',
        'ts/no-import-type-side-effects': 'error',
        'ts/no-invalid-void-type': 'off',
        'ts/no-loss-of-precision': 'error',
        'ts/no-non-null-assertion': 'off',
        'ts/no-redeclare': 'error',
        'ts/no-require-imports': 'error',
        'ts/no-unused-vars': 'off',
        'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'ts/no-useless-constructor': 'off',
        'ts/prefer-ts-expect-error': 'error',
        'ts/triple-slash-reference': 'off',
        'ts/unified-signatures': 'off',
      },
    },
    {
      files: [GLOB_DTS],
      rules: {
        'no-restricted-syntax': 'off',
      },
    },
    {
      files: [GLOB_CJS],
      rules: {
        'ts/no-require-imports': 'off',
        'ts/no-var-requires': 'off',
      },
    },
  ]
}
