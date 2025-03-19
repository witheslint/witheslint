import type { Preset } from '../types'
import { pluginAntfu, pluginPrettier, pluginStylistic } from '../modules'

export function presetStylistic(): Preset {
  return {
    name: 'preset:stylistic',
    install: ({ settings, features }) => {
      return [
        {
          name: 'witheslint:stylistic:configs',
          plugins: {
            antfu: pluginAntfu,
            ...features.prettier ? { prettier: pluginPrettier } : {},
            ...features.stylistic ? { style: pluginStylistic } : {},
          },
          rules: {
            'antfu/curly': 'error',
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
                  ...(pluginStylistic as any).configs.customize({
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
