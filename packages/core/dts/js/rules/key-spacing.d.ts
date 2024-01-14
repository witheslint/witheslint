type Schema0 = ({
  afterColon?: boolean
  align?: (('colon' | 'value') | {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('minimum' | 'strict')
    on?: ('colon' | 'value')
  })
  beforeColon?: boolean
  mode?: ('minimum' | 'strict')
} | {
  align?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('minimum' | 'strict')
    on?: ('colon' | 'value')
  }
  multiLine?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('minimum' | 'strict')
  }
  singleLine?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('minimum' | 'strict')
  }
} | {
  multiLine?: {
    afterColon?: boolean
    align?: (('colon' | 'value') | {
      afterColon?: boolean
      beforeColon?: boolean
      mode?: ('minimum' | 'strict')
      on?: ('colon' | 'value')
    })
    beforeColon?: boolean
    mode?: ('minimum' | 'strict')
  }
  singleLine?: {
    afterColon?: boolean
    beforeColon?: boolean
    mode?: ('minimum' | 'strict')
  }
})

export type KeySpacingRuleOptions = [Schema0]
