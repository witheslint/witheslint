import { interopDefault } from '@witheslint/core'

// @ts-expect-error missing types
import * as reactPlugin from 'eslint-plugin-react'
/**
 * @see [documentation](https://github.com/jsx-eslint/eslint-plugin-react)
 */
export const pluginReact = interopDefault(reactPlugin)

// @ts-expect-error missing types
import * as reactHooksPlugin from 'eslint-plugin-react-hooks'
/**
 * @see [documentation](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
 */
export const pluginReactHooks = interopDefault(reactHooksPlugin)
