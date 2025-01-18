import type { Preset } from '../types'
import { GLOB_EXCLUDE, GLOB_PACKAGE_LOCK } from '../globs'

export function presetIgnores(): Preset {
  return {
    name: 'preset:ignores',
    install: ({ settings }) => {
      return [
        {
          name: 'witheslint:ignores',
          ignores: [
            ...new Set([...settings.ignores, ...GLOB_EXCLUDE, ...GLOB_PACKAGE_LOCK]),
          ].filter(Boolean),
        },
      ]
    },
  }
}
