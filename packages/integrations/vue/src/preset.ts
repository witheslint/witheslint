import type { Preset } from '@witheslint/core'
import { combineRules, definePreset } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { parserVue, pluginVue } from './modules'

export const GLOB_VUE = '**/*.vue' as const
export const GLOB_VUE_EXT = '.vue' as const
export const GLOB_VUE_EXCLUDES = ['**/.nuxt'] as const

export function presetVue(): Preset {
  return definePreset({
    name: 'preset:vue',
    extensions: ['vue'],
    ignores: [...GLOB_VUE_EXCLUDES],
    setup: ({ features, ignores, optionsStylistic, optionsTypescript }) => {
      const { typescript, stylistic } = features
      const { indent, blockSpacing, braceStyle, commaDangle, quoteProps } = optionsStylistic

      ignores.push(GLOB_VUE_EXCLUDES)
      optionsTypescript.extensions.push(GLOB_VUE_EXT)

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
            ...combineRules((pluginVue as any).configs['flat/recommended']),

            'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/component-options-name-casing': ['error', 'PascalCase'],
            'vue/component-tags-order': 'off', // This rule was deprecated and replaced by vue/block-order rule
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
            'vue/padding-line-between-blocks': ['error', 'always'],
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
                  'vue/quote-props': ['error', quoteProps],
                  'vue/space-in-parens': ['error', 'never'],
                  'vue/template-curly-spacing': 'error',
                }
              : {
                  'vue/array-bracket-newline': 'off',
                  'vue/array-bracket-spacing': 'off',
                  'vue/array-element-newline': 'off',
                  'vue/arrow-spacing': 'off',
                  'vue/block-spacing': 'off',
                  'vue/block-tag-newline': 'off',
                  'vue/brace-style': 'off',
                  'vue/comma-dangle': 'off',
                  'vue/comma-spacing': 'off',
                  'vue/comma-style': 'off',
                  'vue/dot-location': 'off',
                  'vue/func-call-spacing': 'off',
                  'vue/max-len': 'off',
                  'vue/html-closing-bracket-newline': 'off',
                  'vue/html-closing-bracket-spacing': 'off',
                  'vue/html-end-tags': 'off',
                  'vue/html-indent': 'off',
                  'vue/html-quotes': 'off',
                  'vue/html-self-closing': 'off',
                  'vue/key-spacing': 'off',
                  'vue/keyword-spacing': 'off',
                  'vue/max-attributes-per-line': 'off',
                  'vue/multiline-html-element-content-newline': 'off',
                  'vue/multiline-ternary': 'off',
                  'vue/mustache-interpolation-spacing': 'off',
                  'vue/no-extra-parens': 'off',
                  'vue/no-multi-spaces': 'off',
                  'vue/no-spaces-around-equal-signs-in-attribute': 'off',
                  'vue/object-curly-newline': 'off',
                  'vue/object-curly-spacing': 'off',
                  'vue/object-property-newline': 'off',
                  'vue/operator-linebreak': 'off',
                  'vue/quote-props': 'off',
                  'vue/script-indent': 'off',
                  'vue/singleline-html-element-content-newline': 'off',
                  'vue/space-in-parens': 'off',
                  'vue/space-infix-ops': 'off',
                  'vue/space-unary-ops': 'off',
                  'vue/template-curly-spacing': 'off',
                },
          },
        },
      ]
    },
  })
}
