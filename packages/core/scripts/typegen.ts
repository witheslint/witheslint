import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import { interopDefault } from '../src/helper'

const [
  pluginAntfu,
  pluginImport,
  pluginJsdoc,
  pluginPrettier,
  pluginSorting,
  pluginStylistic,
  pluginTs,
  pluginUnicorn,
] = await Promise.all([
  interopDefault(import('eslint-plugin-antfu')),
  interopDefault(import('eslint-plugin-import-x')),
  interopDefault(import('eslint-plugin-jsdoc')),
  interopDefault(import('eslint-plugin-prettier')),
  interopDefault(import('eslint-plugin-perfectionist')),
  interopDefault(import('@stylistic/eslint-plugin')),
  interopDefault(import('@typescript-eslint/eslint-plugin')),
  interopDefault(import('eslint-plugin-unicorn')),
] as const)

const dts = await pluginsToRulesDTS({
  '': { rules: Object.fromEntries(builtinRules.entries()) },
  'unicorn': pluginUnicorn,
  'ts': pluginTs as any,
  'jsdoc': pluginJsdoc,
  'sorting': pluginSorting,
  'antfu': pluginAntfu,
  'style': pluginStylistic,
  'prettier': pluginPrettier,
  'import': pluginImport as any,
}, { exportTypeName: 'RuleSetsCore' })

await writeFile('src/rules.d.ts', dts)
