import type { Context } from '../context'
import type { ConfigModule } from '../types'
import { pluginSorting } from '../modules'

export function sorting(context: Context): ConfigModule[] {
  const { features } = context
  const { sorting } = features

  return sorting
    ? [
        {
          name: 'witheslint:sorting:configs',
          plugins: { sorting: pluginSorting },
          rules: {
            'sorting/sort-exports': ['error', { type: 'natural', groupKind: 'types-first' }],
            'sorting/sort-imports': [
              'error',
              {
                type: 'natural',
                internalPattern: ['~/**', '@/**'],
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
                customGroups: { type: {}, value: {} },
                environment: 'node',
              },
            ],
            'sorting/sort-named-exports': ['error', { type: 'natural', groupKind: 'types-first' }],
            'sorting/sort-named-imports': ['error', { type: 'natural', groupKind: 'types-first' }],
          },
        },
      ]
    : []
}
