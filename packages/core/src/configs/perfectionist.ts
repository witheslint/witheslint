import type { FlatConfigItem } from '../types'
import { pluginPerfectionist } from '../modules'

export const perfectionist = (): FlatConfigItem[] => {
  return [
    {
      plugins: { perfectionist: pluginPerfectionist },
      rules: {
        'perfectionist/sort-classes': 'error',
        'perfectionist/sort-enums': 'error',
        'perfectionist/sort-exports': 'error',
        'perfectionist/sort-imports': ['error', {
          'type': 'natural',
          'order': 'asc',
          'groups': [
            ['type', 'internal-type', 'parent-type', 'sibling-type', 'index-type'],
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          'newlines-between': 'never',
        }],
        'perfectionist/sort-named-exports': 'error',
        'perfectionist/sort-named-imports': 'error',
        'perfectionist/sort-object-types': 'error',
        'perfectionist/sort-union-types': 'error',
      },
    },
  ]
}
