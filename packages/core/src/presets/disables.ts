import type { Preset } from '../factory'
import { GLOB_CJS, GLOB_DTS, GLOB_JS, GLOB_TS } from '../globs'

export function presetDisables(): Preset {
  return {
    name: 'preset:disables',
    install: ({ features }) => {
      return [
        {
          name: 'witheslint:disables:dts',
          files: [GLOB_DTS],
          rules: {
            'no-restricted-syntax': 'off',
            'import/no-duplicates': 'off',
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
          name: 'witheslint:disables:scripts',
          files: [`**/scripts/${GLOB_JS}`, `**/scripts/${GLOB_TS}`],
          rules: {
            'no-console': 'off',
          },
        },
      ]
    },
  }
}
