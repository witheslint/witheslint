import type { Plugin } from './types'
import { join } from 'node:path'
import { createPluginDirectory, generateRuleIndexFile, generateRulesFiles, loadPlugin } from './builder'

interface Options {
  outDir?: string
  plugins: Plugin[]
}

export async function generateRulesDts(options: Options) {
  const { plugins = [], outDir = 'types' } = options
  const root = process.cwd()

  for (const plugin of plugins) {
    const loadedPlugin: Plugin = await loadPlugin(plugin)
    const workspace = await createPluginDirectory(plugin.name, join(root, outDir))

    await generateRulesFiles(loadedPlugin, workspace)
    await generateRuleIndexFile(loadedPlugin, workspace)
  }
}
