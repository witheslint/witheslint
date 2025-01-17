import type { Preset } from '../types'
import { definePreset } from '../factory'
import { GLOB_EXCLUDE } from '../globs'

export function presetIgnores(): Preset {
  return definePreset({
    name: 'preset:ignores',
    setup: ({ settings }) => {
      return [
        {
          name: 'witheslint:ignores',
          ignores: [...new Set([...settings.ignores, ...GLOB_EXCLUDE].filter(Boolean))],
        },
      ]
    },
  })
}
