/* eslint-disable perfectionist/sort-imports */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
import type { ParserModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

import * as astroPlugin from 'eslint-plugin-astro'
export const pluginAstro = interopDefault(astroPlugin)

import * as astroParser from 'astro-eslint-parser'
export const parserAstro = interopDefault<ParserModule>(astroParser)
