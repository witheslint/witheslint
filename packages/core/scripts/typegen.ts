import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import {
  pluginAntfu,
  pluginImport,
  pluginJsdoc,
  pluginPrettier,
  pluginSorting,
  pluginStylistic,
  pluginTs,
  pluginUnicorn,
  pluginUnusedImports,
} from '../src/modules'

const dts = await pluginsToRulesDTS({
  '': { rules: Object.fromEntries(builtinRules.entries()) },
  'unicorn': pluginUnicorn,
  'ts': pluginTs,
  'jsdoc': pluginJsdoc,
  'sorting': pluginSorting,
  'antfu': pluginAntfu,
  'style': pluginStylistic,
  'prettier': pluginPrettier,
  'import': pluginImport,
  'unused-imports': pluginUnusedImports,
}, { exportTypeName: 'RuleSetsCore' })

await writeFile('src/rules.d.ts', dts)
