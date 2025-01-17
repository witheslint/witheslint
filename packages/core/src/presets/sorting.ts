import type { Preset } from '../types'
import { definePreset } from '../factory'
import { pluginSorting } from '../modules'

export function presetSorting(): Preset {
  return definePreset({
    name: 'preset:sorting',
    setup: ({ features }) => {
      if (!features.sorting) return []

      return [
        {
          name: 'witheslint:sorting:configs',
          plugins: { sorting: pluginSorting },
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
  })
}
