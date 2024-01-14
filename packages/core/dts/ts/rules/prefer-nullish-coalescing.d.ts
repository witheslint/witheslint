interface Schema0 {
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  ignoreConditionalTests?: boolean
  ignoreMixedLogicalExpressions?: boolean
  ignorePrimitives?: ({
    [k: string]: any
    bigint?: boolean
    boolean?: boolean
    number?: boolean
    string?: boolean
  } | true)
  ignoreTernaryTests?: boolean
}

export type PreferNullishCoalescingRuleOptions = [Schema0]
