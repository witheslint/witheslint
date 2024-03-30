import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { pluginSvelte } from '../src/modules'

const dts = await pluginsToRulesDTS({
  svelte: pluginSvelte,
})

await writeFile('src/rules.d.ts', dts)
