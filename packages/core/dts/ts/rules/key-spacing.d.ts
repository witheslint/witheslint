type Schema0 = ({
  afterColon?: boolean
  align?: (('colon' | 'value') | {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('strict' | 'minimum')
    on?: ('colon' | 'value')
  })
  beforeColon?: boolean
  mode?: ('strict' | 'minimum')
} | {
  multiLine?: {
    afterColon?: boolean
    align?: (('colon' | 'value') | {
      afterColon?: boolean
      beforeColon?: boolean
      mode?: ('strict' | 'minimum')
      on?: ('colon' | 'value')
    })
    beforeColon?: boolean
    mode?: ('strict' | 'minimum')
  }
  singleLine?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('strict' | 'minimum')
  }
} | {
  align?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('strict' | 'minimum')
    on?: ('colon' | 'value')
  }
  multiLine?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('strict' | 'minimum')
  }
  singleLine?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('strict' | 'minimum')
  }
})

export type KeySpacingRuleOptions = [Schema0]
