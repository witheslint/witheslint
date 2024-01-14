type Schema0 = ({
  assertionStyle: 'never'
} | {
  assertionStyle: ('angle-bracket' | 'as')
  objectLiteralTypeAssertions?: ('allow-as-parameter' | 'allow' | 'never')
})

export type ConsistentTypeAssertionsRuleOptions = [Schema0]
