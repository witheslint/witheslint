/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
import { interopDefault } from '@witheslint/core'

// @ts-expect-error missing types
import * as reactPlugin from 'eslint-plugin-react'
export const pluginReact = interopDefault(reactPlugin)

// @ts-expect-error missing types
import * as reactHooksPlugin from 'eslint-plugin-react-hooks'
export const pluginReactHooks = interopDefault(reactHooksPlugin)
