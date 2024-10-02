import type { Context } from '../context'
import type { ConfigModule } from '../types'
import { GLOB_EXCLUDE } from '../globs'

export function ignores(context: Context): ConfigModule[] {
  const { settings } = context

  return [
    {
      name: 'witheslint:ignores',
      ignores: [...new Set([...settings.ignores, ...GLOB_EXCLUDE].filter(Boolean))],
    },
  ]
}
