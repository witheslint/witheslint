import type { Preset } from '@witheslint/core'
import { definePreset } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { parserAstro, pluginAstro } from './modules'

export const GLOB_ASTRO = '**/*.astro'
export const GLOB_ASTRO_EXCLUDES = ['**/.astro'] as const

export const presetAstro = (): Preset => definePreset({
  name: 'preset:astro',
  extensions: ['astro'],
  ignores: [...GLOB_ASTRO_EXCLUDES],
  setup: ({ features }) => {
    const { typescript } = features
    return [
      {
        name: 'witheslint:astro:plugins',
        plugins: { astro: pluginAstro },
      },
      {
        name: 'witheslint:astro:configs',
        files: [GLOB_ASTRO],
        languageOptions: {
          parser: parserAstro,
          parserOptions: {
            extraFileExtensions: ['.astro'],
            parser: typescript ? parserTs : undefined,
            sourceType: 'module',
          },
        },
        processor: pluginAstro.processors!['.astro'],
        rules: {
          'astro/no-conflict-set-directives': 'error',
          'astro/no-deprecated-astro-canonicalurl': 'error',
          'astro/no-deprecated-astro-fetchcontent': 'error',
          'astro/no-deprecated-astro-resolve': 'error',
          'astro/no-deprecated-getentrybyslug': 'error',
          'astro/no-set-text-directive': 'error',
          'astro/no-unused-define-vars-in-style': 'error',
          'astro/prefer-class-list-directive': 'error',
          'astro/prefer-object-class-list': 'error',
          'astro/prefer-split-class-list': 'error',
          'astro/valid-compile': 'error',
        },
      },
    ]
  },
})
