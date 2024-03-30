import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { pluginVue } from '../src/modules'

const dts = await pluginsToRulesDTS({
  vue: pluginVue,
})

await writeFile('src/rules.d.ts', dts)
