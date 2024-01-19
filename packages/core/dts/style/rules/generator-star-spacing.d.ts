type Schema0 = (('before' | 'after' | 'both' | 'neither') | {
  after?: boolean
  anonymous?: (('before' | 'after' | 'both' | 'neither') | {
    after?: boolean
    before?: boolean
  })
  before?: boolean
  method?: (('before' | 'after' | 'both' | 'neither') | {
    after?: boolean
    before?: boolean
  })
  named?: (('before' | 'after' | 'both' | 'neither') | {
    after?: boolean
    before?: boolean
  })
})

export type GeneratorStarSpacingRuleOptions = [Schema0]
