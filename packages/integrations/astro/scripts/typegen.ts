import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { pluginAstro } from '../src/modules'

const dts = await pluginsToRulesDTS({
  astro: pluginAstro,
}, { exportTypeName: 'RuleSetsAstro' })

await writeFile('src/rules.d.ts', dts)
