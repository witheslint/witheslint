interface Schema0 {
/**
 * an array of prop names to treat as a CSS style object
 *
 * @minItems 1
 */
  styleProps?: [string, ...string[]]
  /**
   * if allowString is set to true, this rule will not convert a style string literal into a style object (not recommended for performance)
   */
  allowString?: boolean
}

export type StylePropRuleOptions = [Schema0]
