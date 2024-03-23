import type { ComponentsReturnOnceRuleOptions } from './rules/components-return-once'
import type { EventHandlersRuleOptions } from './rules/event-handlers'
import type { ImportsRuleOptions } from './rules/imports'
import type { JsxNoDuplicatePropsRuleOptions } from './rules/jsx-no-duplicate-props'
import type { JsxNoScriptUrlRuleOptions } from './rules/jsx-no-script-url'
import type { JsxNoUndefRuleOptions } from './rules/jsx-no-undef'
import type { JsxUsesVarsRuleOptions } from './rules/jsx-uses-vars'
import type { NoArrayHandlersRuleOptions } from './rules/no-array-handlers'
import type { NoDestructureRuleOptions } from './rules/no-destructure'
import type { NoInnerhtmlRuleOptions } from './rules/no-innerhtml'
import type { NoProxyApisRuleOptions } from './rules/no-proxy-apis'
import type { NoReactDepsRuleOptions } from './rules/no-react-deps'
import type { NoReactSpecificPropsRuleOptions } from './rules/no-react-specific-props'
import type { NoUnknownNamespacesRuleOptions } from './rules/no-unknown-namespaces'
import type { PreferClasslistRuleOptions } from './rules/prefer-classlist'
import type { PreferForRuleOptions } from './rules/prefer-for'
import type { PreferShowRuleOptions } from './rules/prefer-show'
import type { ReactivityRuleOptions } from './rules/reactivity'
import type { SelfClosingCompRuleOptions } from './rules/self-closing-comp'
import type { StylePropRuleOptions } from './rules/style-prop'

export interface RuleOptions {
  /**
   * Disallow early returns in components. Solid components only run once, and so conditionals should be inside JSX.
   *
   * @see [components-return-once](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/components-return-once.md)
   */
  'solid/components-return-once': ComponentsReturnOnceRuleOptions

  /**
   * Enforce naming DOM element event handlers consistently and prevent Solid's analysis from misunderstanding whether a prop should be an event handler.
   *
   * @see [event-handlers](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/event-handlers.md)
   */
  'solid/event-handlers': EventHandlersRuleOptions

  /**
   * Enforce consistent imports from "solid-js", "solid-js/web", and "solid-js/store".
   *
   * @see [imports](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/imports.md)
   */
  'solid/imports': ImportsRuleOptions

  /**
   * Disallow passing the same prop twice in JSX.
   *
   * @see [jsx-no-duplicate-props](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-duplicate-props.md)
   */
  'solid/jsx-no-duplicate-props': JsxNoDuplicatePropsRuleOptions

  /**
   * Disallow references to undefined variables in JSX. Handles custom directives.
   *
   * @see [jsx-no-undef](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-undef.md)
   */
  'solid/jsx-no-undef': JsxNoUndefRuleOptions

  /**
   * Disallow javascript: URLs.
   *
   * @see [jsx-no-script-url](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-script-url.md)
   */
  'solid/jsx-no-script-url': JsxNoScriptUrlRuleOptions

  /**
   * Prevent variables used in JSX from being marked as unused.
   *
   * @see [jsx-uses-vars](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md)
   */
  'solid/jsx-uses-vars': JsxUsesVarsRuleOptions

  /**
   * Disallow destructuring props. In Solid, props must be used with property accesses (`props.foo`) to preserve reactivity. This rule only tracks destructuring in the parameter list.
   *
   * @see [no-destructure](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-destructure.md)
   */
  'solid/no-destructure': NoDestructureRuleOptions

  /**
   * Disallow usage of the innerHTML attribute, which can often lead to security vulnerabilities.
   *
   * @see [no-innerhtml](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-innerhtml.md)
   */
  'solid/no-innerhtml': NoInnerhtmlRuleOptions

  /**
   * Disallow usage of APIs that use ES6 Proxies, only to target environments that don't support them.
   *
   * @see [no-proxy-apis](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-proxy-apis.md)
   */
  'solid/no-proxy-apis': NoProxyApisRuleOptions

  /**
   * Disallow usage of dependency arrays in `createEffect` and `createMemo`.
   *
   * @see [no-react-deps](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-deps.md)
   */
  'solid/no-react-deps': NoReactDepsRuleOptions

  /**
   * Disallow usage of React-specific `className`/`htmlFor` props, which were deprecated in v1.4.0.
   *
   * @see [no-react-specific-props](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-specific-props.md)
   */
  'solid/no-react-specific-props': NoReactSpecificPropsRuleOptions

  /**
   * Enforce using only Solid-specific namespaced attribute names (i.e. `'on:'` in `<div on:click={...} />`).
   *
   * @see [no-unknown-namespaces](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-unknown-namespaces.md)
   */
  'solid/no-unknown-namespaces': NoUnknownNamespacesRuleOptions

  /**
   * @deprecated
   *
   * Enforce using the classlist prop over importing a classnames helper. The classlist prop accepts an object `{ [class: string]: boolean }` just like classnames.
   *
   * @see [prefer-classlist](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-classlist.md)
   */
  'solid/prefer-classlist': PreferClasslistRuleOptions

  /**
   * Enforce using Solid's `<For />` component for mapping an array to JSX elements.
   *
   * @see [prefer-for](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-for.md)
   */
  'solid/prefer-for': PreferForRuleOptions

  /**
   * Enforce using Solid's `<Show />` component for conditionally showing content. Solid's compiler covers this case, so it's a stylistic rule only.
   *
   * @see [prefer-show](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-show.md)
   */
  'solid/prefer-show': PreferShowRuleOptions

  /**
   * Enforce that reactivity (props, signals, memos, etc.) is properly used, so changes in those values will be tracked and update the view as expected.
   *
   * @see [reactivity](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/reactivity.md)
   */
  'solid/reactivity': ReactivityRuleOptions

  /**
   * Disallow extra closing tags for components without children.
   *
   * @see [self-closing-comp](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/self-closing-comp.md)
   */
  'solid/self-closing-comp': SelfClosingCompRuleOptions

  /**
   * Require CSS properties in the `style` prop to be valid and kebab-cased (ex. 'font-size'), not camel-cased (ex. 'fontSize') like in React, and that property values with dimensions are strings, not numbers with implicit 'px' units.
   *
   * @see [style-prop](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/style-prop.md)
   */
  'solid/style-prop': StylePropRuleOptions

  /**
   * Disallow usage of type-unsafe event handlers.
   *
   * @see [no-array-handlers](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-array-handlers.md)
   */
  'solid/no-array-handlers': NoArrayHandlersRuleOptions

}
