import type { Preset } from '../factory'
import { interopDefault } from '../helper'

export function presetSorting(): Preset {
  return {
    name: 'preset:sorting',
    install: async () => {
      return [
        {
          name: 'witheslint:sorting:configs',
          plugins: { sorting: await interopDefault(import('eslint-plugin-perfectionist')) },
          rules: {
            'sorting/sort-exports': ['error', { type: 'natural', groups: ['type-export', 'value-export'] }],
            'sorting/sort-imports': [
              'error',
              {
                type: 'natural',
                internalPattern: ['^~/.*', '^@/.*'],
                newlinesBetween: 0,
                groups: [
                  'type',
                  'builtin',
                  'external',
                  'internal',
                  'parent',
                  'sibling',
                  'index',
                  'side-effect',
                  'style',
                  'unknown',
                ],
              },
            ],
            'sorting/sort-named-exports': ['error', { type: 'natural', groups: ['type-export', 'value-export'] }],
            'sorting/sort-named-imports': ['error', { type: 'natural', groups: ['type-import', 'value-import'] }],
          },
        },
      ]
    },
  }
}
