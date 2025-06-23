import type { Preset } from '../factory'

export function presetIgnores(): Preset {
  return {
    name: 'preset:ignores',
    install: ({ settings }) => {
      return [
        {
          name: 'witheslint:ignores',
          ignores: [
            ...new Set(settings.ignores),
          ].filter(Boolean),
        },
      ]
    },
  }
}
