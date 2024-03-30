import { writeFile } from 'node:fs/promises'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import {
  pluginImport,
  pluginJsdoc,
  pluginSorter,
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
  'sorter': pluginSorter,
  'style': pluginStylistic,
  'import': pluginImport,
  'unused-imports': pluginUnusedImports,
}, { exportTypeName: 'RuleSetsCore' })

await writeFile('src/rules.d.ts', dts)
