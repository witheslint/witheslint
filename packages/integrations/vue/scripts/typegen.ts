import { writeFile } from 'node:fs/promises'
import { interopDefault } from '@witheslint/core'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const pluginVue = await interopDefault(import('eslint-plugin-vue'))

const dts = await pluginsToRulesDTS({
  vue: pluginVue,
}, { exportTypeName: 'RuleSetsVue' })

await writeFile('src/rules.d.ts', dts)
