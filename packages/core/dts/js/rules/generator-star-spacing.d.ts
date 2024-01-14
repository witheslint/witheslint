type Schema0 = (('after' | 'before' | 'both' | 'neither') | {
  after?: boolean
  anonymous?: (('after' | 'before' | 'both' | 'neither') | {
    after?: boolean
    before?: boolean
  })
  before?: boolean
  method?: (('after' | 'before' | 'both' | 'neither') | {
    after?: boolean
    before?: boolean
  })
  named?: (('after' | 'before' | 'both' | 'neither') | {
    after?: boolean
    before?: boolean
  })
})

export type GeneratorStarSpacingRuleOptions = [Schema0]
