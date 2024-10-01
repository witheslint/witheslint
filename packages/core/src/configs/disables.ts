import type { Context } from '../context'
import type { ConfigModule } from '../types'
import { GLOB_CJS, GLOB_DTS, GLOB_JS, GLOB_TS } from '../globs'

export function disables(context: Context): ConfigModule[] {
  const { features } = context
  return [
    {
      name: 'witheslint:disables:dts',
      files: [GLOB_DTS],
      rules: {
        'no-restricted-syntax': 'off',
        'import/no-duplicates': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      name: 'witheslint:disables:cjs',
      files: [GLOB_CJS],
      rules: {
        ...features.typescript
          ? {
              'ts/no-require-imports': 'off',
            }
          : {},
      },
    },
    {
      files: [`**/scripts/${GLOB_JS}`, `**/scripts/${GLOB_TS}`],
      name: 'witheslint:disables:scripts',
      rules: {
        'no-console': 'off',
      },
    },
  ]
}
