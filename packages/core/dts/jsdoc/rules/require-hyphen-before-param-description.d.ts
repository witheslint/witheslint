type Schema0 = ('always' | 'never')

interface Schema1 {
  tags?: ('any' | {
    /**
     */
    [k: string]: ('always' | 'never')
  })
}

export type RequireHyphenBeforeParamDescriptionRuleOptions = [Schema0, Schema1]
