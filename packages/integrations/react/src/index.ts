import { definePreset, GLOB_JSX, GLOB_TSX } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { pluginReact, pluginReactHooks } from './modules'

export const presetReact = () => definePreset({
  name: 'preset:react',
  setup: ({ features }) => {
    const { typescript } = features
    return [
      {
        plugins: {
          'react': pluginReact,
          'react-hooks': pluginReactHooks,
        },
        settings: {
          react: {
            version: 'detect',
          },
        },
      },
      {
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
          'react/display-name': 'error',
          'react/jsx-key': 'error',
          'react/jsx-no-comment-textnodes': 'error',
          'react/jsx-no-duplicate-props': 'error',
          'react/jsx-no-target-blank': 'error',
          'react/jsx-no-undef': 'error',
          'react/jsx-uses-react': 'error',
          'react/jsx-uses-vars': 'error',
          'react/no-children-prop': 'error',
          'react/no-danger-with-children': 'error',
          'react/no-deprecated': 'error',
          'react/no-direct-mutation-state': 'error',
          'react/no-find-dom-node': 'error',
          'react/no-is-mounted': 'error',
          'react/no-render-return-value': 'error',
          'react/no-string-refs': 'error',
          'react/no-unescaped-entities': 'error',
          'react/no-unknown-property': 'error',
          'react/no-unsafe': 'off',
          'react/prop-types': 'error',
          'react/react-in-jsx-scope': 'off',
          'react/require-render-return': 'error',

          ...typescript
            ? {
                'react/jsx-no-undef': 'off',
                'react/prop-type': 'off',
              }
            : {},

          'react-hooks/exhaustive-deps': 'warn',
          'react-hooks/rules-of-hooks': 'error',
        },
      },
    ]
  },
})
