import type { Preset } from '../types'
import { interopDefault } from '../helper'

export function presetStylistic(): Preset {
  return {
    name: 'preset:stylistic',
    install: async ({ settings, features }) => {
      const plugins: Record<string, any> = {
        antfu: await interopDefault(import('eslint-plugin-antfu')),
      }

      if (features.prettier) {
        plugins.prettier = await interopDefault(import('eslint-plugin-prettier'))
      }
      if (features.stylistic) {
        plugins.style = await interopDefault(import('@stylistic/eslint-plugin'))
      }

      return [
        {
          name: 'witheslint:stylistic:configs',
          plugins,
          rules: {
            'antfu/consistent-chaining': 'error',
            'antfu/consistent-list-newline': 'error',
            'antfu/top-level-function': 'error',

            ...features.prettier
              ? {
                  'prettier/prettier': 'error',
                }
              : {},

            ...features.stylistic
              ? {
                  'antfu/curly': 'error',

                  ...plugins.style.configs.customize({
                    pluginName: 'style',
                    ...settings.stylistic,
                  }).rules,
                }
              : {
                  'antfu/curly': 'off',

                  'arrow-body-style': 'off',
                  'curly': 'off',
                  'no-unexpected-multiline': 'off',
                  'prefer-arrow-callback': 'off',
                },
          },
        },
      ]
    },
  }
}
