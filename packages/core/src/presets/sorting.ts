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
            'sorting/sort-exports': ['error', { type: 'natural', groupKind: 'types-first' }],
            'sorting/sort-imports': [
              'error',
              {
                type: 'natural',
                internalPattern: ['^~/.*', '^@/.*'],
                newlinesBetween: 'never',
                groups: [
                  ['type', 'internal-type', 'parent-type', 'sibling-type', 'index-type'],
                  'builtin',
                  'external',
                  'internal',
                  'parent',
                  'sibling',
                  'index',
                  'side-effect',
                  'style',
                  'object',
                  'unknown',
                ],
              },
            ],
            'sorting/sort-named-exports': ['error', { type: 'natural', groupKind: 'types-first' }],
            'sorting/sort-named-imports': ['error', { type: 'natural', groupKind: 'types-first' }],
          },
        },
      ]
    },
  }
}
