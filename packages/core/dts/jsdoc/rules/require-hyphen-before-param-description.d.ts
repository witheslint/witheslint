type Schema0 = ('always' | 'never')

interface Schema1 {
  tags?: ({
    /**
     */
    [k: string]: ('always' | 'never')
  } | 'any')
}

export type RequireHyphenBeforeParamDescriptionRuleOptions = [Schema0, Schema1]
