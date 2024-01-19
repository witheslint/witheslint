type Schema0 = ([] | [('always' | 'methods' | 'properties' | 'never' | 'consistent' | 'consistent-as-needed')] | [] | [('always' | 'methods' | 'properties')] | [('always' | 'methods' | 'properties'), {
  avoidQuotes?: boolean
}] | [] | [('always' | 'methods')] | [('always' | 'methods'), {
  avoidExplicitReturnArrows?: boolean
  avoidQuotes?: boolean
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
}])

export type ObjectShorthandRuleOptions = Schema0
