import { writeFile } from 'node:fs/promises'
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
  'unicorn': pluginUnicorn,
  'ts': pluginTs,
  'jsdoc': pluginJsdoc,
  'sorter': pluginSorter,
  'style': pluginStylistic,
  'import': pluginImport,
  'unused-imports': pluginUnusedImports,
})

await writeFile('src/rules.d.ts', dts)
