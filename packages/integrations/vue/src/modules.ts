import type { ParserModule, PluginModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

// @ts-expect-error missing types
import * as _pluginVue from 'eslint-plugin-vue'
/**
 * @see [eslint-plugin-vue](https://eslint.vuejs.org)
 */
export const pluginVue = interopDefault(_pluginVue as unknown as PluginModule)

import * as _parserVue from 'vue-eslint-parser'
/**
 * @see [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)
 */
export const parserVue = interopDefault(_parserVue as unknown as ParserModule)
