type Schema0 = ('tab' | number)

interface Schema1 {
  SwitchCase?: number
  VariableDeclarator?: (number | {
    [k: string]: any
    const?: number
    let?: number
    var?: number
  })
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    [k: string]: any
    body?: number
    parameters?: (number | 'first')
  }
  FunctionExpression?: {
    [k: string]: any
    body?: number
    parameters?: (number | 'first')
  }
  CallExpression?: {
    [k: string]: any
    parameters?: (number | 'first')
  }
  ArrayExpression?: (number | 'first')
  ObjectExpression?: (number | 'first')
}

export type IndentLegacyRuleOptions = [Schema0, Schema1]
