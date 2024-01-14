interface Schema0 {
  contexts?: ({
    comment?: string
    context?: string
  } | string)[]
  exemptedBy?: string[]
  forceRequireNext?: boolean
  forceRequireYields?: boolean
  next?: boolean
  nextWithGeneratorTag?: boolean
  withGeneratorTag?: boolean
}

export type RequireYieldsRuleOptions = [Schema0]
