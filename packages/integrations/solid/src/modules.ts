import type { PluginModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

import * as _pluginSolid from 'eslint-plugin-solid'
/**
 * @see [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid)
 */
export const pluginSolid = interopDefault(_pluginSolid as unknown as PluginModule)
