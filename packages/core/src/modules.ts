import type { ParserModule } from './types'
import { interopDefault } from './helper'

import * as importPlugin from 'eslint-plugin-import-x'
/**
 * @see [documentation](https://github.com/un-es/eslint-plugin-import-x)
 */
export const pluginImport: typeof importPlugin = interopDefault(importPlugin)

// @ts-expect-error missing types
import * as unusedImportsPlugin from 'eslint-plugin-unused-imports'
/**
 * @see [documentation](https://github.com/sweepline/eslint-plugin-unused-imports)
 */
export const pluginUnusedImports = interopDefault(unusedImportsPlugin)

// @ts-expect-error missing types
import * as unicornPlugin from 'eslint-plugin-unicorn'
/**
 * @see [documentation](https://github.com/sindresorhus/eslint-plugin-unicorn)
 */
export const pluginUnicorn = interopDefault(unicornPlugin)

// @ts-expect-error missing types
import * as sorterPlugin from 'eslint-plugin-perfectionist'
/**
 * @see [documentation](https://eslint-plugin-perfectionist.azat.io)
 */
export const pluginSorter = interopDefault(sorterPlugin)

import * as jsdocPlugin from 'eslint-plugin-jsdoc'
/**
 * @see [documentation](https://github.com/gajus/eslint-plugin-jsdoc)
 */
export const pluginJsdoc = interopDefault(jsdocPlugin)

import * as stylisticPlugin from '@stylistic/eslint-plugin'
/**
 * @see [documentation](https://eslint.style)
 */
export const pluginStylistic = interopDefault(stylisticPlugin)

import * as tsPlugin from '@typescript-eslint/eslint-plugin'
/**
 * @see [documentation](https://typescript-eslint.io)
 */
export const pluginTs: typeof tsPlugin = interopDefault(tsPlugin)

import * as tsParser from '@typescript-eslint/parser'
export const parserTs = interopDefault<ParserModule>(tsParser)
