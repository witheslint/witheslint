/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'
declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Disallow early returns in components. Solid components only run once, and so conditionals should be inside JSX.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/components-return-once.md
   */
  'solid/components-return-once'?: Linter.RuleEntry<[]>
  /**
   * Enforce naming DOM element event handlers consistently and prevent Solid's analysis from misunderstanding whether a prop should be an event handler.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/event-handlers.md
   */
  'solid/event-handlers'?: Linter.RuleEntry<SolidEventHandlers>
  /**
   * Enforce consistent imports from "solid-js", "solid-js/web", and "solid-js/store".
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/imports.md
   */
  'solid/imports'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing the same prop twice in JSX.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-duplicate-props.md
   */
  'solid/jsx-no-duplicate-props'?: Linter.RuleEntry<SolidJsxNoDuplicateProps>
  /**
   * Disallow javascript: URLs.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-script-url.md
   */
  'solid/jsx-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow references to undefined variables in JSX. Handles custom directives.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-undef.md
   */
  'solid/jsx-no-undef'?: Linter.RuleEntry<SolidJsxNoUndef>
  /**
   * Prevent variables used in JSX from being marked as unused.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md
   */
  'solid/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of type-unsafe event handlers.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-array-handlers.md
   */
  'solid/no-array-handlers'?: Linter.RuleEntry<[]>
  /**
   * Disallow destructuring props. In Solid, props must be used with property accesses (`props.foo`) to preserve reactivity. This rule only tracks destructuring in the parameter list.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-destructure.md
   */
  'solid/no-destructure'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of the innerHTML attribute, which can often lead to security vulnerabilities.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-innerhtml.md
   */
  'solid/no-innerhtml'?: Linter.RuleEntry<SolidNoInnerhtml>
  /**
   * Disallow usage of APIs that use ES6 Proxies, only to target environments that don't support them.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-proxy-apis.md
   */
  'solid/no-proxy-apis'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of dependency arrays in `createEffect` and `createMemo`.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-deps.md
   */
  'solid/no-react-deps'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of React-specific `className`/`htmlFor` props, which were deprecated in v1.4.0.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-specific-props.md
   */
  'solid/no-react-specific-props'?: Linter.RuleEntry<[]>
  /**
   * Enforce using only Solid-specific namespaced attribute names (i.e. `'on:'` in `<div on:click={...} />`).
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-unknown-namespaces.md
   */
  'solid/no-unknown-namespaces'?: Linter.RuleEntry<SolidNoUnknownNamespaces>
  /**
   * Enforce using the classlist prop over importing a classnames helper. The classlist prop accepts an object `{ [class: string]: boolean }` just like classnames.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-classlist.md
   * @deprecated
   */
  'solid/prefer-classlist'?: Linter.RuleEntry<SolidPreferClasslist>
  /**
   * Enforce using Solid's `<For />` component for mapping an array to JSX elements.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-for.md
   */
  'solid/prefer-for'?: Linter.RuleEntry<[]>
  /**
   * Enforce using Solid's `<Show />` component for conditionally showing content. Solid's compiler covers this case, so it's a stylistic rule only.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-show.md
   */
  'solid/prefer-show'?: Linter.RuleEntry<[]>
  /**
   * Enforce that reactivity (props, signals, memos, etc.) is properly used, so changes in those values will be tracked and update the view as expected.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/reactivity.md
   */
  'solid/reactivity'?: Linter.RuleEntry<SolidReactivity>
  /**
   * Disallow extra closing tags for components without children.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/self-closing-comp.md
   */
  'solid/self-closing-comp'?: Linter.RuleEntry<SolidSelfClosingComp>
  /**
   * Require CSS properties in the `style` prop to be valid and kebab-cased (ex. 'font-size'), not camel-cased (ex. 'fontSize') like in React, and that property values with dimensions are strings, not numbers with implicit 'px' units.
   * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/style-prop.md
   */
  'solid/style-prop'?: Linter.RuleEntry<SolidStyleProp>
}

/* ======= Declarations ======= */
// ----- solid/event-handlers -----
type SolidEventHandlers = []|[{
  
  ignoreCase?: boolean
  
  warnOnSpread?: boolean
}]
// ----- solid/jsx-no-duplicate-props -----
type SolidJsxNoDuplicateProps = []|[{
  
  ignoreCase?: boolean
  [k: string]: unknown | undefined
}]
// ----- solid/jsx-no-undef -----
type SolidJsxNoUndef = []|[{
  
  allowGlobals?: boolean
  
  autoImport?: boolean
  
  typescriptEnabled?: boolean
}]
// ----- solid/no-innerhtml -----
type SolidNoInnerhtml = []|[{
  
  allowStatic?: boolean
}]
// ----- solid/no-unknown-namespaces -----
type SolidNoUnknownNamespaces = []|[{
  
  allowedNamespaces?: [string, ...(string)[]]
}]
// ----- solid/prefer-classlist -----
type SolidPreferClasslist = []|[{
  
  classnames?: [string, ...(string)[]]
}]
// ----- solid/reactivity -----
type SolidReactivity = []|[{
  
  customReactiveFunctions?: string[]
}]
// ----- solid/self-closing-comp -----
type SolidSelfClosingComp = []|[{
  
  component?: ("all" | "none")
  
  html?: ("all" | "void" | "none")
}]
// ----- solid/style-prop -----
type SolidStyleProp = []|[{
  
  styleProps?: [string, ...(string)[]]
  
  allowString?: boolean
}]