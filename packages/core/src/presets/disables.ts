import type { Preset } from '../types'
import { definePreset } from '../factory'
import { GLOB_CJS, GLOB_DTS, GLOB_JS, GLOB_TS } from '../globs'

export function presetDisables(): Preset {
  return definePreset({
    name: 'preset:disables',
    setup: ({ features }) => {
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
          name: 'witheslint:disables:scripts',
          files: [`**/scripts/${GLOB_JS}`, `**/scripts/${GLOB_TS}`],
          rules: {
            'no-console': 'off',
          },
        },
      ]
    },
  })
}
