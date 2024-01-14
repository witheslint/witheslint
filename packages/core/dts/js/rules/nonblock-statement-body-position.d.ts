type Schema0 = ('any' | 'below' | 'beside')

interface Schema1 {
  overrides?: {
    do?: ('any' | 'below' | 'beside')
    else?: ('any' | 'below' | 'beside')
    for?: ('any' | 'below' | 'beside')
    if?: ('any' | 'below' | 'beside')
    while?: ('any' | 'below' | 'beside')
  }
}

export type NonblockStatementBodyPositionRuleOptions = [Schema0, Schema1]
