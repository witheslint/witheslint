import type { Preset } from '@witheslint/core'
import { definePreset } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { parserVue, pluginVue } from './modules'

export const GLOB_VUE = '**/*.vue'
export const GLOB_VUE_EXCLUDES = ['**/.nuxt']

export const presetVue = (): Preset => definePreset({
  name: 'preset:vue',
  extensions: ['vue'],
  ignores: GLOB_VUE_EXCLUDES,
  setup: ({ features, styles }) => {
    const { typescript, stylistic } = features
    const { indent, blockSpacing, braceStyle, commaDangle, quoteProps } = styles
    return [
      {
        name: 'witheslint:vue:plugins',
        plugins: { vue: pluginVue },
      },
      {
        name: 'witheslint:vue:configs',
        files: [GLOB_VUE],
        languageOptions: {
          parser: parserVue,
          parserOptions: {
            ecmaFeatures: {
              jsx: true,
            },
            extraFileExtensions: ['.vue'],
            parser: typescript ? parserTs : undefined,
            sourceType: 'module',
          },
        },
        processor: pluginVue.processors!['.vue'],
        rules: {
          ...(pluginVue as any).configs['base'].rules,
          ...(pluginVue as any).configs['vue3-essential'].rules,
          ...(pluginVue as any).configs['vue3-strongly-recommended'].rules,
          ...(pluginVue as any).configs['vue3-recommended'].rules,

          'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
          'vue/component-name-in-template-casing': ['error', 'PascalCase'],
          'vue/component-options-name-casing': ['error', 'PascalCase'],
          'vue/custom-event-name-casing': ['error', 'camelCase'],
          'vue/define-macros-order': ['error', { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineModel', 'defineSlots'], defineExposeLast: true }],
          'vue/dot-location': ['error', 'property'],
          'vue/dot-notation': ['error', { allowKeywords: true }],
          'vue/eqeqeq': ['error', 'smart'],
          'vue/html-indent': ['error', indent],
          'vue/html-quotes': ['error', 'double'],
          'vue/max-attributes-per-line': 'off',
          'vue/multi-word-component-names': 'off',
          'vue/no-dupe-keys': 'off',
          'vue/no-empty-pattern': 'error',
          'vue/no-extra-parens': ['error', 'functions'],
          'vue/no-irregular-whitespace': 'error',
          'vue/no-loss-of-precision': 'error',
          'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
          'vue/no-restricted-v-bind': ['error', '/^v-/'],
          'vue/no-setup-props-reactivity-loss': 'off',
          'vue/no-sparse-arrays': 'error',
          'vue/no-unused-refs': 'error',
          'vue/no-useless-v-bind': 'error',
          'vue/no-v-html': 'off',
          'vue/object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }],
          'vue/prefer-separate-static-class': 'error',
          'vue/prefer-template': 'error',
          'vue/prop-name-casing': ['error', 'camelCase'],
          'vue/require-default-prop': 'off',
          'vue/require-prop-types': 'off',
          'vue/space-infix-ops': 'error',
          'vue/space-unary-ops': ['error', { nonwords: false, words: true }],

          ...stylistic
            ? {
                'vue/array-bracket-spacing': ['error', 'never'],
                'vue/arrow-spacing': ['error', { after: true, before: true }],
                'vue/block-spacing': ['error', blockSpacing ? 'always' : 'never'],
                'vue/block-tag-newline': ['error', { multiline: 'always', singleline: 'always' }],
                'vue/brace-style': ['error', braceStyle, { allowSingleLine: true }],
                'vue/comma-dangle': ['error', commaDangle],
                'vue/comma-spacing': ['error', { after: true, before: false }],
                'vue/comma-style': ['error', 'last'],
                'vue/html-comment-content-spacing': ['error', 'always', { exceptions: ['-'] }],
                'vue/key-spacing': ['error', { afterColon: true, beforeColon: false }],
                'vue/keyword-spacing': ['error', { after: true, before: true }],
                'vue/object-curly-newline': 'off',
                'vue/object-curly-spacing': ['error', 'always'],
                'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
                'vue/operator-linebreak': ['error', 'before'],
                'vue/padding-line-between-blocks': ['error', 'always'],
                'vue/quote-props': ['error', quoteProps],
                'vue/space-in-parens': ['error', 'never'],
                'vue/template-curly-spacing': 'error',
              }
            : {},
        },
      },
    ]
  },
})
