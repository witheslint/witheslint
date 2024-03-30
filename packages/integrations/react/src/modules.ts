import type { PluginModule } from '@witheslint/core'
import { interopDefault } from '@witheslint/core'

// @ts-expect-error missing types
import * as _pluginReact from 'eslint-plugin-react'
/**
 * @see [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
 */
export const pluginReact = interopDefault(_pluginReact as unknown as PluginModule)

// @ts-expect-error missing types
import * as _pluginReactHooks from 'eslint-plugin-react-hooks'
/**
 * @see [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
 */
export const pluginReactHooks = interopDefault(_pluginReactHooks as unknown as PluginModule)
