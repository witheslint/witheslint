type Schema0 = ('always' | 'never')

interface Schema1 {
  autofix?: boolean
  ignore?: string[]
}

export type VOnEventHyphenationRuleOptions = [Schema0, Schema1]
