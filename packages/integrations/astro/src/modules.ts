import type { ParserModule, PluginModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

import * as _pluginAstro from 'eslint-plugin-astro'
/**
 * @see [eslint-plugin-astro](https://ota-meshi.github.io/eslint-plugin-astro)
 */
export const pluginAstro = interopDefault(_pluginAstro as unknown as PluginModule)

import * as _parserAstro from 'astro-eslint-parser'
/**
 * @see [astro-eslint-parser](https://ota-meshi.github.io/astro-eslint-parser)
 */
export const parserAstro = interopDefault(_parserAstro as unknown as ParserModule)
