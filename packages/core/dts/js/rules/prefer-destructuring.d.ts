type Schema0 = ({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})

interface Schema1 {
  enforceForRenamedProperties?: boolean
}

export type PreferDestructuringRuleOptions = [Schema0, Schema1]
