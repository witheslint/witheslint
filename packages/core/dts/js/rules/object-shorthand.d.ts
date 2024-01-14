type Schema0 = ([('always' | 'consistent-as-needed' | 'consistent' | 'methods' | 'never' | 'properties')] | [('always' | 'methods' | 'properties'), {
  avoidQuotes?: boolean
}] | [('always' | 'methods' | 'properties')] | [('always' | 'methods'), {
  avoidExplicitReturnArrows?: boolean
  avoidQuotes?: boolean
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
}] | [('always' | 'methods')] | [] | [] | [])

export type ObjectShorthandRuleOptions = Schema0
