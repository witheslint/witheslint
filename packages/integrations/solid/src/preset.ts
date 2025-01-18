import type { Preset } from '@witheslint/core'
import { GLOB_JSX, GLOB_TSX } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { pluginSolid } from './modules'

export function presetSolid(): Preset {
  return {
    name: 'preset:solid',
    install: ({ features }) => {
      const { typescript } = features

      return [
        {
          name: 'witheslint:solid:plugins',
          plugins: { solid: pluginSolid },
        },
        {
          name: 'witheslint:solid:configs',
          files: typescript ? [GLOB_JSX, GLOB_TSX] : [GLOB_JSX],
          languageOptions: {
            parser: typescript ? parserTs : undefined,
            parserOptions: {
              ecmaFeatures: {
                jsx: true,
              },
            },
          },
          rules: {
            'solid/components-return-once': 'warn',
            'solid/event-handlers': 'warn',
            'solid/imports': 'warn',
            'solid/jsx-no-duplicate-props': 'error',
            'solid/jsx-no-script-url': 'error',
            'solid/jsx-no-undef': 'error',
            'solid/jsx-uses-vars': 'error',
            'solid/no-array-handlers': 'off',
            'solid/no-unknown-namespaces': 'error',
            'solid/no-destructure': 'error',
            'solid/no-innerhtml': 'error',
            'solid/no-proxy-apis': 'off',
            'solid/no-react-deps': 'warn',
            'solid/no-react-specific-props': 'error',
            'solid/prefer-for': 'error',
            'solid/prefer-show': 'error',
            'solid/reactivity': 'error',
            'solid/style-prop': 'warn',

            ...typescript
              ? {
                  'solid/jsx-no-undef': ['error', { typescriptEnabled: true }],
                  'solid/no-unknown-namespaces': 'off',
                }
              : {},
          },
        },
      ]
    },
  }
}
