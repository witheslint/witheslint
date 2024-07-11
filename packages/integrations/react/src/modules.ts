import type { PluginModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

import * as _pluginReact from '@eslint-react/eslint-plugin'
/**
 * @see [@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react)
 */
export const pluginReact = interopDefault(_pluginReact as unknown as PluginModule)

// @ts-expect-error missing types
import * as _pluginReactHooks from 'eslint-plugin-react-hooks'
/**
 * @see [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
 */
export const pluginReactHooks = interopDefault(_pluginReactHooks as unknown as PluginModule)
