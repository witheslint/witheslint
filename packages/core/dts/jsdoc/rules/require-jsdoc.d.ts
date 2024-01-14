interface Schema0 {
  checkConstructors?: boolean
  checkGetters?: ('no-setter' | boolean)
  checkSetters?: ('no-getter' | boolean)
  contexts?: ({
    context?: string
    inlineCommentBlock?: boolean
    minLineCount?: number
  } | string)[]
  enableFixer?: boolean
  exemptEmptyConstructors?: boolean
  exemptEmptyFunctions?: boolean
  fixerMessage?: string
  minLineCount?: number
  publicOnly?: ({
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  } | boolean)
  require?: {
    ArrowFunctionExpression?: boolean
    ClassDeclaration?: boolean
    ClassExpression?: boolean
    FunctionDeclaration?: boolean
    FunctionExpression?: boolean
    MethodDefinition?: boolean
  }
}

export type RequireJsdocRuleOptions = [Schema0]
