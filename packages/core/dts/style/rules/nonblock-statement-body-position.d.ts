type Schema0 = ('beside' | 'below' | 'any')

interface Schema1 {
  overrides?: {
    do?: ('beside' | 'below' | 'any')
    else?: ('beside' | 'below' | 'any')
    for?: ('beside' | 'below' | 'any')
    if?: ('beside' | 'below' | 'any')
    while?: ('beside' | 'below' | 'any')
  }
}

export type NonblockStatementBodyPositionRuleOptions = [Schema0, Schema1]
