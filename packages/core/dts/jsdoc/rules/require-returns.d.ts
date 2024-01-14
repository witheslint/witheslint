interface Schema0 {
  checkConstructors?: boolean
  checkGetters?: boolean
  contexts?: ({
    comment?: string
    context?: string
    forceRequireReturn?: boolean
  } | string)[]
  enableFixer?: boolean
  exemptedBy?: string[]
  forceRequireReturn?: boolean
  forceReturnsWithAsync?: boolean
  publicOnly?: ({
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  } | boolean)
}

export type RequireReturnsRuleOptions = [Schema0]
