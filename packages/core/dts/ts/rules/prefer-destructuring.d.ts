type Schema0 = ({
  array?: boolean
  object?: boolean
} | {
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
})

interface Schema1 {
  enforceForRenamedProperties?: boolean
  enforceForDeclarationWithTypeAnnotation?: boolean
  [k: string]: any
}

export type PreferDestructuringRuleOptions = [Schema0, Schema1]