import type { ParserModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

// @ts-expect-error missing types
import * as vuePlugin from 'eslint-plugin-vue'
export const pluginVue = interopDefault(vuePlugin)

import * as vueParser from 'vue-eslint-parser'
export const parserVue = interopDefault<ParserModule>(vueParser)
