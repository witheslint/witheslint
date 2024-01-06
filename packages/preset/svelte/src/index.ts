import { definePreset } from '@witheslint/core'
import { parserTs } from '@witheslint/core/modules'
import { parserSvelte, pluginSvelte } from './modules'

export const GLOB_SVELTE = '**/*.svelte'

export const presetSvelte = () => definePreset({
  name: 'preset:svelte',
  extensions: ['svelte'],
  setup: ({ features }) => {
    const { typescript } = features
    return [
      { plugins: { svelte: pluginSvelte } },
      {
        files: [GLOB_SVELTE],
        languageOptions: {
          parser: parserSvelte,
          parserOptions: {
            extraFileExtensions: ['.svelte'],
            parser: typescript ? parserTs : undefined,
            sourceType: 'module',
          },
        },
        processor: pluginSvelte.processors!['.svelte'],
        rules: {
          ...pluginSvelte.configs['recommended'].rules,
        },
      },
    ]
  },
})
