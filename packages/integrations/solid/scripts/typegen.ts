import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { pluginSolid } from '../src/modules'

const dts = await pluginsToRulesDTS({
  solid: pluginSolid,
})

await writeFile('src/rules.d.ts', dts)
