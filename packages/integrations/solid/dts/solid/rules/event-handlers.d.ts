interface Schema0 {
/**
 * if true, don't warn on ambiguously named event handlers like `onclick` or `onchange`
 */
  ignoreCase?: boolean
  /**
   * if true, warn when spreading event handlers onto JSX. Enable for Solid < v1.6.
   */
  warnOnSpread?: boolean
}

export type EventHandlersRuleOptions = [Schema0]
