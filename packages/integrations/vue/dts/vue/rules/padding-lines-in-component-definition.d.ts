type Schema0 = (('always' | 'never') | {
  betweenOptions?: ('never' | 'always' | 'ignore')
  withinOption?: (('never' | 'always' | 'ignore') | {
    /**
     */
    [k: string]: (('never' | 'always' | 'ignore') | {
      betweenItems?: ('never' | 'always' | 'ignore')
      withinEach?: ('never' | 'always' | 'ignore')
    })
  })
  groupSingleLineProperties?: boolean
})

export type PaddingLinesInComponentDefinitionRuleOptions = [Schema0]
