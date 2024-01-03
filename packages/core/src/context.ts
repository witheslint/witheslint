import type { Context } from './types'

export function useContext(): Context {
  return {
    styles: {
      indent: 2,
      jsx: true,
      quotes: 'single',
      semi: false,
      arrowParens: false,
      braceStyle: '1tbs',
      blockSpacing: true,
      quoteProps: 'consistent-as-needed',
      commaDangle: 'always-multiline',
    },
    features: {
      stylistic: true,
      typescript: true,
    },
  }
}
