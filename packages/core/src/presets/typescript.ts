import type { Preset } from '../types'
import { GLOB_TS, GLOB_TSX } from '../globs'
import { interopDefault, renameRules } from '../helper'

export function presetTypescript(): Preset {
  return {
    name: 'preset:typescript',
    prepare: async ({ settings }) => {
      settings.typescript.parser = (await interopDefault(import('@typescript-eslint/parser')))
    },
    install: async ({ settings }) => {
      const { extensions, parser: parserTs } = settings.typescript
      const pluginTs = await interopDefault(import('@typescript-eslint/eslint-plugin'))

      return [
        {
          name: 'witheslint:typescript:plugins',
          plugins: { ts: pluginTs as any },
        },
        {
          name: 'witheslint:typescript:configs',
          files: [GLOB_TS, GLOB_TSX, ...extensions.map(ext => `**/*${ext}`)],
          languageOptions: {
            parser: parserTs,
            parserOptions: {
              extraFileExtensions: extensions,
              sourceType: 'module',
            },
          },
          rules: {
            ...renameRules(
              pluginTs.configs['eslint-recommended'].overrides![0].rules!,
              '@typescript-eslint/',
              'ts/',
            ),
            ...renameRules(
              (pluginTs.configs)['strict'].rules!,
              '@typescript-eslint/',
              'ts/',
            ),

            'no-dupe-class-members': 'off',
            'no-redeclare': 'off',
            'no-use-before-define': 'off',
            'no-useless-constructor': 'off',

            'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
            'ts/consistent-type-definitions': ['error', 'interface'],
            'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, fixStyle: 'separate-type-imports', prefer: 'type-imports' }],
            'ts/method-signature-style': ['error', 'property'],
            'ts/no-dupe-class-members': 'error',
            'ts/no-dynamic-delete': 'off',
            'ts/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
            'ts/no-explicit-any': 'off',
            'ts/no-extraneous-class': 'off',
            'ts/no-import-type-side-effects': 'error',
            'ts/no-invalid-void-type': 'off',
            'ts/no-non-null-assertion': 'off',
            'ts/no-redeclare': 'error',
            'ts/no-require-imports': 'error',
            'ts/no-unused-vars': 'off',
            'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
            'ts/no-useless-constructor': 'off',
            'ts/no-wrapper-object-types': 'error',
            'ts/triple-slash-reference': 'off',
            'ts/unified-signatures': 'off',
          },
        },
      ]
    },
  }
}
