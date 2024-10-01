import type { Preset } from '@witheslint/core'
import { definePreset } from '@witheslint/core'
import { pluginPrettier } from './modules'

export function presetPrettier(): Preset {
  return definePreset({
    name: 'preset:prettier',
    setup: ({ features }) => {
      features.stylistic = false

      return [
        {
          name: 'witheslint:prettier:plugins',
          plugins: { prettier: pluginPrettier },
        },
        {
          name: 'witheslint:prettier:configs',
          rules: {
            'arrow-body-style': 'off',
            'curly': 'off',
            'no-unexpected-multiline': 'off',
            'prefer-arrow-callback': 'off',
            'prettier/prettier': 'error',
          },
        },
      ]
    },
  })
}
