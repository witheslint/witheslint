import type { Context } from '../context'
import type { ConfigModule } from '../types'
import { pluginAntfu, pluginStylistic } from '../modules'

export function stylistic(context: Context): ConfigModule[] {
  const { optionsStylistic, features } = context
  const { stylistic } = features

  return [
    {
      name: 'witheslint:stylistic:configs',
      plugins: {
        antfu: pluginAntfu,
        ...stylistic ? { style: pluginStylistic } : {},
      },
      rules: {
        'antfu/consistent-chaining': 'error',
        'antfu/top-level-function': 'error',

        ...stylistic
          ? {
              ...(pluginStylistic as any).configs.customize({
                flat: true,
                pluginName: 'style',
                ...optionsStylistic,
              }).rules,

              curly: ['error', 'multi-line', 'consistent'],
            }
          : {
              'curly': 'off',
              'no-unexpected-multiline': 'off',
            },
      },
    },
  ]
}
