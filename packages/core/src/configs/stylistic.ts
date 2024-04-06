import type { FlatConfigItem, StylisticConfig } from '../types'
import { pluginStylistic } from '../modules'

export const stylistic = (styles: StylisticConfig): FlatConfigItem[] => {
  const config = (pluginStylistic as any).configs.customize({
    flat: true,
    pluginName: 'style',
    ...styles,
  })

  return [
    {
      name: 'witheslint:style:configs',
      plugins: { style: pluginStylistic },
      rules: {
        ...config.rules,

        curly: ['error', 'multi-line', 'consistent'],
      },
    },
  ]
}
