import type { Context } from '../context'
import type { ConfigModule } from '../types'
import { GLOB_EXCLUDE } from '../globs'

export function ignores(context: Context): ConfigModule[] {
  const { ignores } = context

  return [
    {
      name: 'witheslint:ignores',
      ignores: [...ignores, ...GLOB_EXCLUDE].filter(Boolean).flat(),
    },
  ]
}
