import type { Preset } from '../factory'
import { interopDefault } from '../helper'

export function presetStylistic(): Preset {
  return {
    name: 'preset:stylistic',
    install: async ({ settings, features }) => {
      const isPrettierEnabled = settings.stylistic.mode === 'prettier'
      const isStylisticEnabled = features.stylistic

      const [pluginAntfu, pluginPrettier, pluginStyle] = await Promise.all([
        interopDefault(import('eslint-plugin-antfu')),
        isPrettierEnabled ? interopDefault(import('eslint-plugin-prettier')) : undefined,
        isStylisticEnabled ? interopDefault(import('@stylistic/eslint-plugin')) : undefined,
      ] as const)

      return [
        {
          name: 'witheslint:stylistic:configs',
          plugins: {
            antfu: pluginAntfu,
            ...(isPrettierEnabled ? { prettier: pluginPrettier } : {}),
            ...(isStylisticEnabled ? { style: pluginStyle } : {}),
          },
          rules: {
            'antfu/consistent-chaining': 'error',
            'antfu/consistent-list-newline': 'error',
            'antfu/top-level-function': 'error',

            ...isPrettierEnabled
              ? {
                  'prettier/prettier': 'error',
                }
              : {},

            ...isStylisticEnabled
              ? {
                  'antfu/curly': 'error',

                  ...pluginStyle!.configs.customize({
                    pluginName: 'style',
                    ...settings.stylistic.config,
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
