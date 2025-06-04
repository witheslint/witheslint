import { writeFile } from 'node:fs/promises'
import { interopDefault } from '@witheslint/core'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const pluginSvelte = await interopDefault(import('eslint-plugin-svelte'))

const dts = await pluginsToRulesDTS({
  svelte: pluginSvelte,
}, { exportTypeName: 'RuleSetsSvelte' })

await writeFile('src/rules.d.ts', dts)
