import { writeFile } from 'node:fs/promises'
import { interopDefault } from '@witheslint/core'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const pluginAstro = await interopDefault(import('eslint-plugin-astro'))

const dts = await pluginsToRulesDTS({
  astro: pluginAstro,
}, { exportTypeName: 'RuleSetsAstro' })

await writeFile('src/rules.d.ts', dts)
