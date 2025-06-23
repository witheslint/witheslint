import type { Preset } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

export const GLOB_SVELTE = '**/*.svelte' as const
export const GLOB_SVELTE_EXT = '.svelte' as const

export function presetSvelte(): Preset {
  return {
    name: 'preset:svelte',
    prepare: ({ settings }) => {
      const GLOB_SVELTE_EXCLUDES = ['**/.svelte-kit']
      settings.ignores.push(...GLOB_SVELTE_EXCLUDES)
      settings.typescript.extensions.push(GLOB_SVELTE_EXT)
    },
    install: async ({ features, settings }) => {
      const { typescript, stylistic } = features
      const { indent, quotes } = settings.stylistic.config
      const parserTs = settings.typescript.parser
      const [parserSvelte, pluginSvelte] = await Promise.all([
        interopDefault(import('svelte-eslint-parser')),
        interopDefault(import('eslint-plugin-svelte')),
      ] as const)

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
            'svelte/no-dom-manipulating': 'error',
            'svelte/no-dupe-else-if-blocks': 'error',
            'svelte/no-dupe-on-directives': 'error',
            'svelte/no-dupe-style-properties': 'error',
            'svelte/no-dupe-use-directives': 'error',
            'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
            'svelte/no-inner-declarations': 'error',
            'svelte/no-not-function-handler': 'error',
            'svelte/no-object-in-text-mustaches': 'error',
            'svelte/no-raw-special-elements': 'error',
            'svelte/no-reactive-functions': 'error',
            'svelte/no-reactive-literals': 'error',
            'svelte/no-reactive-reassign': 'error',
            'svelte/no-shorthand-style-property-overrides': 'error',
            'svelte/no-unknown-style-directive-property': 'error',
            'svelte/no-unnecessary-state-wrap': 'error',
            'svelte/no-unused-svelte-ignore': 'error',
            'svelte/no-unused-props': 'error',
            'svelte/no-useless-children-snippet': 'error',
            'svelte/no-useless-mustaches': 'error',
            'svelte/require-each-key': 'error',
            'svelte/require-event-dispatcher-types': 'error',
            'svelte/require-store-reactive-access': 'error',
            'svelte/system': 'error',
            'svelte/valid-each-key': 'error',
            'svelte/valid-prop-names-in-kit-pages': 'error',

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
  }
}
