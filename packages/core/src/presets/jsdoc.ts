import type { Preset } from '../factory'
import { interopDefault } from '../helper'

export function presetJsdoc(): Preset {
  return {
    name: 'preset:jsdoc',
    install: async ({ features }) => {
      return [
        {
          name: 'witheslint:jsdoc:configs',
          plugins: { jsdoc: await interopDefault(import('eslint-plugin-jsdoc')) },
          settings: {
            jsdoc: {
              mode: features.typescript ? 'typescript' : 'jsdoc',
            },
          },
          rules: {
            'jsdoc/check-access': 'warn',
            'jsdoc/check-alignment': 'warn',
            'jsdoc/check-param-names': 'warn',
            'jsdoc/check-property-names': 'warn',
            'jsdoc/check-types': 'warn',
            'jsdoc/empty-tags': 'warn',
            'jsdoc/implements-on-classes': 'warn',
            'jsdoc/multiline-blocks': 'warn',
            'jsdoc/no-defaults': 'warn',
            'jsdoc/no-multi-asterisks': 'warn',
            'jsdoc/require-param-name': 'warn',
            'jsdoc/require-property': 'warn',
            'jsdoc/require-property-description': 'warn',
            'jsdoc/require-property-name': 'warn',
            'jsdoc/require-returns-check': 'warn',
            'jsdoc/require-returns-description': 'warn',
            'jsdoc/require-yields-check': 'warn',
          },
        },
      ]
    },
  }
}
