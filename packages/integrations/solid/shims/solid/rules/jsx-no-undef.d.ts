interface Schema0 {
/**
 * When true, the rule will consider the global scope when checking for defined components.
 */
  allowGlobals?: boolean
  /**
   * Automatically import certain components from `"solid-js"` if they are undefined.
   */
  autoImport?: boolean
  /**
   * Adjusts behavior not to conflict with TypeScript's type checking.
   */
  typescriptEnabled?: boolean
}

export type JsxNoUndefRuleOptions = [Schema0]
