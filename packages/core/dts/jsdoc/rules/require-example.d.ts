interface Schema0 {
  checkConstructors?: boolean
  checkGetters?: boolean
  checkSetters?: boolean
  contexts?: ({
    comment?: string
    context?: string
  } | string)[]
  enableFixer?: boolean
  exemptedBy?: string[]
  exemptNoArguments?: boolean
}

export type RequireExampleRuleOptions = [Schema0]
