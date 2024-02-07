import type { FlatConfigItem } from '../types'
import { pluginSorter } from '../modules'

export const sorter = (): FlatConfigItem[] => {
  return [
    {
      plugins: { sorter: pluginSorter },
      rules: {
        'sorter/sort-exports': 'error',
        'sorter/sort-imports': ['error', {
          'type': 'natural',
          'order': 'asc',
          'internal-pattern': ['~/**', '@/**'],
          'newlines-between': 'never',
          'groups': [
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
        }],
        'sorter/sort-named-exports': 'error',
        'sorter/sort-named-imports': 'error',
      },
    },
  ]
}
