interface Schema0 {
  checkGeneratorsOnly?: boolean
  contexts?: ({
    comment?: string
    context?: string
  } | string)[]
  exemptedBy?: string[]
  next?: boolean
}

export type RequireYieldsCheckRuleOptions = [Schema0]
