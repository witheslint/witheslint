import type { Preset } from '../types'
import { definePreset } from '../factory'
import { GLOB_TS, GLOB_TSX } from '../globs'
import { renameRules } from '../helper'
import { parserTs, pluginTs } from '../modules'

export function presetTypescript(): Preset {
  return definePreset({
    name: 'preset:typescript',
    setup: ({ settings, features }) => {
      const { extensions } = settings.typescript

      return features.typescript
        ? [
            {
              name: 'witheslint:typescript:plugins',
              plugins: { ts: pluginTs },
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
                'no-redeclare': 'off',
                'no-use-before-define': 'off',
                'no-useless-constructor': 'off',

                'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
                'ts/consistent-type-definitions': ['error', 'interface'],
                'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
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
        : []
    },
  })
}
