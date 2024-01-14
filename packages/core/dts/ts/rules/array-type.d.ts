interface Schema0 {
/**
 * The array type expected for mutable cases.
 */
  default?: ('array-simple' | 'array' | 'generic')
  /**
   * The array type expected for readonly cases. If omitted, the value for `default` will be used.
   */
  readonly?: ('array-simple' | 'array' | 'generic')
}

export type ArrayTypeRuleOptions = [Schema0]
