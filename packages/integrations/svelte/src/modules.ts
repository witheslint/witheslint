import type { ParserModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

import * as sveltePlugin from 'eslint-plugin-svelte'
export const pluginSvelte = interopDefault(sveltePlugin)

import * as svelteParser from 'svelte-eslint-parser'
export const parserSvelte = interopDefault<ParserModule>(svelteParser)
