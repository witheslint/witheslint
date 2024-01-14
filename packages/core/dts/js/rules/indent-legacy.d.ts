type Schema0 = ('tab' | number)

interface Schema1 {
  SwitchCase?: number
  VariableDeclarator?: ({
    [k: string]: any
    const?: number
    let?: number
    var?: number
  } | number)
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    [k: string]: any
    body?: number
    parameters?: ('first' | number)
  }
  FunctionExpression?: {
    [k: string]: any
    body?: number
    parameters?: ('first' | number)
  }
  CallExpression?: {
    [k: string]: any
    parameters?: ('first' | number)
  }
  ArrayExpression?: ('first' | number)
  ObjectExpression?: ('first' | number)
}

export type IndentLegacyRuleOptions = [Schema0, Schema1]
