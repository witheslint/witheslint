import type { PluginModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

import * as _pluginPrettier from 'eslint-plugin-prettier'
/**
 * @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
 */
export const pluginPrettier = interopDefault(_pluginPrettier as unknown as PluginModule)
