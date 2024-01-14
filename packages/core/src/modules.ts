import type { ParserModule } from './types'
import { interopDefault } from './helper'

// @ts-expect-error missing types
import * as importPlugin from 'eslint-plugin-i'
export const pluginImport = interopDefault(importPlugin)

// @ts-expect-error missing types
import * as unusedImportsPlugin from 'eslint-plugin-unused-imports'
export const pluginUnusedImports = interopDefault(unusedImportsPlugin)

// @ts-expect-error missing types
import * as unicornPlugin from 'eslint-plugin-unicorn'
export const pluginUnicorn = interopDefault(unicornPlugin)

// @ts-expect-error missing types
import * as perfectionistPlugin from 'eslint-plugin-perfectionist'
export const pluginPerfectionist = interopDefault(perfectionistPlugin)

import * as jsdocPlugin from 'eslint-plugin-jsdoc'
export const pluginJsdoc = interopDefault(jsdocPlugin)

import * as stylisticPlugin from '@stylistic/eslint-plugin'
export const pluginStylistic = interopDefault(stylisticPlugin)

import * as tsPlugin from '@typescript-eslint/eslint-plugin'
export const pluginTs: typeof tsPlugin = interopDefault(tsPlugin)

import * as tsParser from '@typescript-eslint/parser'
export const parserTs = interopDefault<ParserModule>(tsParser)
