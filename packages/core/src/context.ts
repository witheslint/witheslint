import type { Context, FeaturesConfig } from './types'
import { isBoolean, isObject } from './helper'

const context: Context = {
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

export function useContext(options: Partial<FeaturesConfig> = {}): Context {
  if (Object.keys(options).length === 0) return context
  if (isBoolean(options.typescript)) {
    context.features.typescript = options.typescript
  }
  if (isBoolean(options.stylistic)) {
    context.features.stylistic = options.stylistic
  } else if (isObject(options.stylistic)) {
    context.styles = {
      ...context.styles,
      ...options.stylistic,
    }
  }
  return context
}
