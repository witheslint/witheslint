import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { pluginPrettier } from '../src/modules'

const dts = await pluginsToRulesDTS({
  prettier: pluginPrettier,
}, { exportTypeName: 'RuleSetsPrettier' })

await writeFile('src/rules.d.ts', dts)
