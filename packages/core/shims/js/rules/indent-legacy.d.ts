type Schema0 = ('tab' | number)

interface Schema1 {
  SwitchCase?: number
  VariableDeclarator?: (number | {
    var?: number
    let?: number
    const?: number
    [k: string]: any
  })
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    parameters?: (number | 'first')
    body?: number
    [k: string]: any
  }
  FunctionExpression?: {
    parameters?: (number | 'first')
    body?: number
    [k: string]: any
  }
  CallExpression?: {
    parameters?: (number | 'first')
    [k: string]: any
  }
  ArrayExpression?: (number | 'first')
  ObjectExpression?: (number | 'first')
}

export type IndentLegacyRuleOptions = [Schema0, Schema1]
