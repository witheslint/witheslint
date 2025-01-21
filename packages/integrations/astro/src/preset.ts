import type { Preset } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { parserAstro, pluginAstro } from './modules'

export const GLOB_ASTRO = '**/*.astro' as const
export const GLOB_ASTRO_EXT = '.astro' as const
export const GLOB_ASTRO_EXCLUDES = ['**/.astro'] as const

export function presetAstro(): Preset {
  return {
    name: 'preset:astro',
    prepare: ({ settings }) => {
      settings.ignores.push(...GLOB_ASTRO_EXCLUDES)
      settings.typescript.extensions.push(GLOB_ASTRO_EXT)
    },
    install: ({ features }) => {
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
            globals: (pluginAstro as any).environments.astro.globals,
            parser: parserAstro,
            parserOptions: {
              extraFileExtensions: ['.astro'],
              parser: typescript ? parserTs : undefined,
              sourceType: 'module',
            },
          },
          processor: pluginAstro.processors!['.astro'],
          rules: {
            'astro/missing-client-only-directive-value': 'error',
            'astro/no-conflict-set-directives': 'error',
            'astro/no-deprecated-astro-canonicalurl': 'error',
            'astro/no-deprecated-astro-fetchcontent': 'error',
            'astro/no-deprecated-astro-resolve': 'error',
            'astro/no-deprecated-getentrybyslug': 'error',
            'astro/no-set-html-directive': 'off',
            'astro/no-set-text-directive': 'error',
            'astro/no-unused-define-vars-in-style': 'error',
            'astro/prefer-class-list-directive': 'error',
            'astro/prefer-object-class-list': 'error',
            'astro/prefer-split-class-list': 'error',
            'astro/semi': 'off',
            'astro/sort-attributes': 'error',
            'astro/valid-compile': 'error',
          },
        },
      ]
    },
  }
}
