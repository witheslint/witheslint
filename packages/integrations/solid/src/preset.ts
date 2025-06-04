import type { Preset } from '@witheslint/core'
import { GLOB_JSX, GLOB_TSX, interopDefault } from '@witheslint/core'

export function presetSolid(): Preset {
  return {
    name: 'preset:solid',
    install: async ({ features, settings }) => {
      const { typescript } = features
      const parserTs = settings.typescript.parser
      const pluginSolid = await interopDefault(import('eslint-plugin-solid'))

      return [
        {
          name: 'witheslint:solid:plugins',
          plugins: { solid: pluginSolid as any },
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
