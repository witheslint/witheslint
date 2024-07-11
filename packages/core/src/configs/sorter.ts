import type { FlatConfigItem } from '../types'
import { pluginSorter } from '../modules'

export const sorter = (): FlatConfigItem[] => {
  return [
    {
      name: 'witheslint:sorter:configs',
      plugins: { sorter: pluginSorter },
      rules: {
        'sorter/sort-exports': ['error', { type: 'natural' }],
        'sorter/sort-imports': ['error', {
          'type': 'natural',
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
