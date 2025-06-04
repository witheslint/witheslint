import { writeFile } from 'node:fs/promises'
import { interopDefault } from '@witheslint/core'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const [pluginReact, pluginReactHooks] = await Promise.all([
  interopDefault(import('@eslint-react/eslint-plugin')),
  interopDefault(import('eslint-plugin-react-hooks')),
])

const dts = await pluginsToRulesDTS({
  'react': pluginReact as any,
  'react-hooks': pluginReactHooks,
}, { exportTypeName: 'RuleSetsReact' })

await writeFile('src/rules.d.ts', dts)
