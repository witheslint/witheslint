type Schema0 = ('shorthand' | 'longform')

interface Schema1 {
  sameNameShorthand?: ('always' | 'never' | 'ignore')
}

export type VBindStyleRuleOptions = [Schema0, Schema1]
