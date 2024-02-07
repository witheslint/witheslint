interface Schema0 {
/**
 * which Solid components should be self-closing when possible
 */
  component?: ('all' | 'none')
  /**
   * which native elements should be self-closing when possible
   */
  html?: ('all' | 'void' | 'none')
}

export type SelfClosingCompRuleOptions = [Schema0]
