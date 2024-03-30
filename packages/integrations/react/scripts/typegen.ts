import { writeFile } from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import { pluginReact, pluginReactHooks } from '../src/modules'

const dts = await pluginsToRulesDTS({
  'react': pluginReact,
  'react-hooks': pluginReactHooks,
})

await writeFile('src/rules.d.ts', dts)
