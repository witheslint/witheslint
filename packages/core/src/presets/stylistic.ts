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
            'antfu/consistent-chaining': 'error',
            'antfu/top-level-function': 'error',

            ...features.prettier
              ? {
                  'arrow-body-style': 'off',
                  'curly': 'off',
                  'no-unexpected-multiline': 'off',
                  'prefer-arrow-callback': 'off',
                  'prettier/prettier': 'error',
                }
              : {},

            ...features.stylistic
              ? {
                  ...(pluginStylistic as any).configs.customize({
                    flat: true,
                    pluginName: 'style',
                    ...settings.stylistic,
                  }).rules,

                  curly: ['error', 'multi-line', 'consistent'],
                }
              : {
                  'curly': 'off',
                  'no-unexpected-multiline': 'off',
                },
          },
        },
      ]
    },
  }
}
