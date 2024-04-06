import type { Preset } from '@witheslint/core'
import { definePreset } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { parserSvelte, pluginSvelte } from './modules'

export const GLOB_SVELTE = '**/*.svelte'
export const GLOB_SVELTE_EXCLUDES = ['**/.svelte-kit']

export const presetSvelte = (): Preset => definePreset({
  name: 'preset:svelte',
  extensions: ['svelte'],
  ignores: GLOB_SVELTE_EXCLUDES,
  setup: ({ features, styles }) => {
    const { typescript, stylistic } = features
    const { indent, quotes } = styles
    return [
      {
        name: 'witheslint:svelte:plugins',
        plugins: { svelte: pluginSvelte },
      },
      {
        name: 'witheslint:svelte:configs',
        files: [GLOB_SVELTE],
        languageOptions: {
          parser: parserSvelte,
          parserOptions: {
            extraFileExtensions: ['.svelte'],
            parser: typescript ? parserTs : undefined,
            sourceType: 'module',
          },
        },
        processor: pluginSvelte.processors!['.svelte'],
        rules: {
          'svelte/comment-directive': 'error',
          'svelte/no-at-debug-tags': 'warn',
          'svelte/no-at-html-tags': 'error',
          'svelte/no-dupe-else-if-blocks': 'error',
          'svelte/no-dupe-style-properties': 'error',
          'svelte/no-dupe-use-directives': 'error',
          'svelte/no-dynamic-slot-name': 'error',
          'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
          'svelte/no-inner-declarations': 'error',
          'svelte/no-not-function-handler': 'error',
          'svelte/no-object-in-text-mustaches': 'error',
          'svelte/no-reactive-functions': 'error',
          'svelte/no-reactive-literals': 'error',
          'svelte/no-shorthand-style-property-overrides': 'error',
          'svelte/no-unknown-style-directive-property': 'error',
          'svelte/no-unused-svelte-ignore': 'error',
          'svelte/no-useless-mustaches': 'error',
          'svelte/require-store-callbacks-use-set-param': 'error',
          'svelte/system': 'error',
          'svelte/valid-compile': 'error',
          'svelte/valid-each-key': 'error',

          ...stylistic
            ? {
                'style/no-trailing-spaces': 'off', // superseded by svelte/no-trailing-spaces
                'svelte/derived-has-same-inputs-outputs': 'error',
                'svelte/html-closing-bracket-spacing': 'error',
                'svelte/html-quotes': ['error', { prefer: quotes }],
                'svelte/indent': ['error', { alignAttributesVertically: true, indent }],
                'svelte/mustache-spacing': 'error',
                'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
                'svelte/no-trailing-spaces': 'error',
                'svelte/spaced-html-comment': 'error',
              }
            : {},
        },
      },
    ]
  },
})
