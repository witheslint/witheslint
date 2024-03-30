import type { ParserModule, PluginModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

import * as _pluginSvelte from 'eslint-plugin-svelte'
/**
 * @see [eslint-plugin-svelte](https://sveltejs.github.io/eslint-plugin-svelte)
 */
export const pluginSvelte = interopDefault(_pluginSvelte as unknown as PluginModule)

import * as _parserSvelte from 'svelte-eslint-parser'
/**
 * @see [svelte-eslint-parser](https://sveltejs.github.io/svelte-eslint-parser)
 */
export const parserSvelte = interopDefault(_parserSvelte as unknown as ParserModule)
