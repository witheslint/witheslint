/* eslint-disable no-console */
import type { ESLintDtsOptions, PluginDtsOptions } from './types'
import type { ESLint, Rule } from 'eslint'
import type { JSONSchema4 } from 'json-schema'
import type { IPackageJson } from 'package-json-type'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pascalCase } from 'change-case'
import eslint from 'eslint'
import { compile } from 'json-schema-to-typescript'
import outdent from 'outdent'
import { isFileExists } from './helper'

export async function generatePluginDts(options: PluginDtsOptions) {
  const { entries, outDir = 'types' } = options
  const root = process.cwd()

  const packageJsonPath = join(root, 'package.json')
  const packageJson: false | IPackageJson = await import(packageJsonPath)
    .catch(() => false)

  if (!packageJson) {
    console.warn(`No package.json found.`)
    return false
  }

  const pkgName = packageJson.name
  const deps = Object.keys(packageJson.dependencies ?? {})
  if (!deps) {
    console.warn(`No dependency found for ${pkgName}.`)
    return false
  }

  for (const entry of entries) {
    const pluginName = entry.plugin
    if (!deps.includes(pluginName)) {
      console.warn(`Not found ${pluginName}.`)
      continue
    }

    const pluginDirectory = join(root, 'node_modules', pluginName)
    const pluginPackageJsonPath = join(pluginDirectory, 'package.json')
    const pluginPackageJson: IPackageJson = await import(pluginPackageJsonPath)
    const pluginEntry: string = pluginPackageJson.main
      ?? pluginPackageJson.exports?.['.']?.default
      ?? 'index.js'

    const importedPluginModule:
      | { __esModule: undefined, default: ESLint.Plugin }
      | (ESLint.Plugin & { __esModule: true })
      | false = await import(join(pluginDirectory, pluginEntry)).catch(() => false)
    if (!importedPluginModule) {
      console.warn(`No entry found for ${pluginName}`)
      continue
    }

    const pluginModule = importedPluginModule.__esModule
      ? importedPluginModule
      : importedPluginModule.default

    const pluginRules = pluginModule.rules

    const ruleOptionImports: string[] = []
    const ruleDeclarations: string[] = []

    const workspace = join(root, outDir, entry.name)
    await isFileExists(join(workspace, 'rules'), {
      onError: () => mkdir(join(workspace, 'rules'), { recursive: true }),
    })

    for (const [ruleName, ruleDefinition] of Object.entries(pluginRules ?? {})) {
      const meta = (ruleDefinition as Rule.RuleModule).meta!
      const documentation: Rule.RuleMetaData['docs'] = meta.docs ?? {}
      let schemas = (meta.schema as JSONSchema4[]) ?? []
      if (!Array.isArray(schemas)) schemas = [schemas]

      const options = await Promise.all(
        schemas.map(async (schema, index) => {
          return await compile(JSON.parse(
            JSON.stringify(schema).replaceAll('#/items/0/$defs/', '#/$defs/'),
          ), `Schema${index}`, {
            bannerComment: '',
          })
        }),
      )

      const optionTypes = options.map((_, index) => `Schema${index}?`)

      const ruleOptionTypeValue = Array.isArray(meta.schema)
        ? `[${optionTypes.join(', ')}]`
        : (meta.schema ? 'Schema0' : '[]')

      await writeFile(
        join(workspace, 'rules', `${ruleName}.d.ts`),
        outdent`
          ${options.join('\n')}
          export type ${pascalCase(ruleName)}RuleOptions = ${ruleOptionTypeValue};
        `,
        { encoding: 'utf8', flag: 'w' },
      )

      ruleOptionImports.push(`import type { ${pascalCase(ruleName)}RuleOptions } from "./rules/${ruleName}"`)

      ruleDeclarations.push(
`  /**
   * ${documentation.description}
   *
   * @see [${ruleName}](${documentation.url})
   */
  "${entry.name}/${ruleName}": ${pascalCase(ruleName)}RuleOptions;
`)
    }

    const hasPluginParsers = await isFileExists(join(workspace, 'parsers.d.ts'))
    const hasPluginParserOptions = await isFileExists(join(workspace, 'parser-options.d.ts'))
    const hasPluginSettings = await isFileExists(join(workspace, 'settings.d.ts'))

    await writeFile(
      join(workspace, 'index.d.ts'),
      outdent`
        ${ruleOptionImports.join('\n')}
        ${hasPluginParsers ? `export type { Parsers } from "./parsers";` : ''}
        ${hasPluginParserOptions
        ? `export type { ParserOptions } from "./parser-options";`
        : ''}
        ${hasPluginSettings ? `export type { Settings } from "./settings";` : ''}

        export interface RuleOptions {
        ${ruleDeclarations.join('\n')}
        }
      `,
      { encoding: 'utf8', flag: 'w' },
    )
  }
}

export async function generateESLintDts(options: ESLintDtsOptions = {}) {
  const { outDir = 'types' } = options
  const root = process.cwd()

  const workspace = join(root, outDir, 'eslint')
  await isFileExists(join(workspace, 'rules'), {
    onError: () => mkdir(join(workspace, 'rules'), { recursive: true }),
  })

  const rules = Object.fromEntries(new eslint.Linter().getRules().entries())

  const ruleOptionImports: string[] = []
  const ruleDeclarations: string[] = []

  for (const [ruleName, ruleDefinition] of Object.entries(rules ?? {})) {
    const meta = ruleDefinition.meta ?? {}
    const documentation: Rule.RuleMetaData['docs'] = meta.docs ?? {}
    let schemas = (meta.schema as JSONSchema4[]) ?? []
    if (!Array.isArray(schemas)) schemas = [schemas]

    const options = await Promise.all(
      schemas.map(async (schema, index) => {
        return await compile(JSON.parse(
          JSON.stringify(schema).replaceAll('#/items/0/$defs/', '#/$defs/'),
        ), `Schema${index}`, {
          bannerComment: '',
        })
      }),
    )

    const optionTypes = options.map((_, index) => `Schema${index}?`)

    const ruleOptionTypeValue = Array.isArray(meta.schema)
      ? `[${optionTypes.join(', ')}]`
      : (meta.schema ? 'Schema0' : '[]')

    await writeFile(
      join(workspace, 'rules', `${ruleName}.d.ts`),
      outdent`
        ${options.join('\n')}
        export type ${pascalCase(ruleName)}RuleOptions = ${
          ruleName === 'no-constructor-return' ? '[Schema0?]' : ruleOptionTypeValue
        };
      `,
      { encoding: 'utf8', flag: 'w' },
    )

    ruleOptionImports.push(
    `import type { ${pascalCase(ruleName)}RuleOptions } from "./${ruleName}"`,
    )

    ruleDeclarations.push(
`  /**
    * ${documentation.description?.replace(/\*\/`/g, '*\\/`')}
    *
    * @see [${ruleName}](${documentation.url})
    */
   "${ruleName}": RuleConfig<${pascalCase(ruleName)}RuleOptions>;
`)
  }

  await writeFile(
    join(workspace, 'index.d.ts'),
    outdent`
      ${ruleOptionImports.join('\n')}

      export interface RuleOptions {
          ${ruleDeclarations.join('\n')}
      }
    `,
    { encoding: 'utf8', flag: 'w' },
  )
}
