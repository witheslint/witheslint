import type { Context } from './types'

export function useContext(): Context {
  return {
    styles: {
      indent: 2,
      jsx: true,
      quotes: 'single',
      semi: false,
    },
    features: {
      stylistic: true,
      typescript: true,
    },
  }
}
