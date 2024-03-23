interface Schema0 {
  checkGeneratorsOnly?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  exemptedBy?: string[]
  next?: boolean
}

export type RequireYieldsCheckRuleOptions = [Schema0]
