type Schema0 = ('always' | 'never')

interface Schema1 {
  ignoreClassFields?: boolean
  destructureInSignature?: ('always' | 'ignore')
}

export type DestructuringAssignmentRuleOptions = [Schema0, Schema1]
