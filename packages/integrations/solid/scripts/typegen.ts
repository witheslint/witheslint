import { writeFile } from 'node:fs/promises'
import { interopDefault } from '@witheslint/core'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const pluginSolid = await interopDefault(import('eslint-plugin-solid'))

const dts = await pluginsToRulesDTS({
  solid: pluginSolid as any,
}, { exportTypeName: 'RuleSetsSolid' })

await writeFile('src/rules.d.ts', dts)
