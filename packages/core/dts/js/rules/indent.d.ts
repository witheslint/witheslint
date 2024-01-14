type Schema0 = ('tab' | number)

interface Schema1 {
  SwitchCase?: number
  VariableDeclarator?: ((('first' | 'off') | number) | {
    const?: (('first' | 'off') | number)
    let?: (('first' | 'off') | number)
    var?: (('first' | 'off') | number)
  })
  outerIIFEBody?: ('off' | number)
  MemberExpression?: ('off' | number)
  FunctionDeclaration?: {
    body?: number
    parameters?: (('first' | 'off') | number)
  }
  FunctionExpression?: {
    body?: number
    parameters?: (('first' | 'off') | number)
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (('first' | 'off') | number)
  }
  ArrayExpression?: (('first' | 'off') | number)
  ObjectExpression?: (('first' | 'off') | number)
  ImportDeclaration?: (('first' | 'off') | number)
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}

export type IndentRuleOptions = [Schema0, Schema1]
