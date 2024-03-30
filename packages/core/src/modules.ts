import type { ParserModule, PluginModule } from './types'
import { interopDefault } from './helper'

import * as _pluginImport from 'eslint-plugin-import-x'
/**
 * @see [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x)
 */
export const pluginImport = interopDefault(_pluginImport as unknown as PluginModule)

// @ts-expect-error missing types
import * as _pluginUnusedImports from 'eslint-plugin-unused-imports'
/**
 * @see [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)
 */
export const pluginUnusedImports = interopDefault(_pluginUnusedImports as unknown as PluginModule)

// @ts-expect-error missing types
import * as _pluginUnicorn from 'eslint-plugin-unicorn'
/**
 * @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
 */
export const pluginUnicorn = interopDefault(_pluginUnicorn as unknown as PluginModule)

// @ts-expect-error missing types
import * as _pluginSorter from 'eslint-plugin-perfectionist'
/**
 * @see [eslint-plugin-perfectionist](https://eslint-plugin-perfectionist.azat.io)
 */
export const pluginSorter = interopDefault(_pluginSorter as unknown as PluginModule)

import * as _pluginJsdoc from 'eslint-plugin-jsdoc'
/**
 * @see [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
 */
export const pluginJsdoc = interopDefault(_pluginJsdoc as unknown as PluginModule)

import * as _pluginStylistic from '@stylistic/eslint-plugin'
/**
 * @see [@stylistic/eslint-plugin](https://eslint.style)
 */
export const pluginStylistic = interopDefault(_pluginStylistic as unknown as PluginModule)

import * as _pluginTs from '@typescript-eslint/eslint-plugin'
/**
 * @see [@typescript-eslint/eslint-plugin](https://typescript-eslint.io)
 */
export const pluginTs = interopDefault(_pluginTs as unknown as PluginModule)

import * as _parserTs from '@typescript-eslint/parser'
/**
 * @see [@typescript-eslint/parser](https://typescript-eslint.io/packages/parser/)
 */
export const parserTs = interopDefault(_parserTs as unknown as ParserModule)
