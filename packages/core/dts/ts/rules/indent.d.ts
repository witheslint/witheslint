type Schema0 = ('tab' | number)

interface Schema1 {
  SwitchCase?: number
  VariableDeclarator?: ((number | ('first' | 'off')) | {
    const?: (number | ('first' | 'off'))
    let?: (number | ('first' | 'off'))
    var?: (number | ('first' | 'off'))
  })
  outerIIFEBody?: (number | 'off')
  MemberExpression?: (number | 'off')
  FunctionDeclaration?: {
    body?: number
    parameters?: (number | ('first' | 'off'))
  }
  FunctionExpression?: {
    body?: number
    parameters?: (number | ('first' | 'off'))
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ('first' | 'off'))
  }
  ArrayExpression?: (number | ('first' | 'off'))
  ObjectExpression?: (number | ('first' | 'off'))
  ImportDeclaration?: (number | ('first' | 'off'))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}

export type IndentRuleOptions = [Schema0, Schema1]
