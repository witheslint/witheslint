type Schema0 = ((('always' | 'never') | {
  consistent?: boolean
  minProperties?: number
  multiline?: boolean
}) | {
  ExportDeclaration?: (('always' | 'never') | {
    consistent?: boolean
    minProperties?: number
    multiline?: boolean
  })
  ImportDeclaration?: (('always' | 'never') | {
    consistent?: boolean
    minProperties?: number
    multiline?: boolean
  })
  ObjectExpression?: (('always' | 'never') | {
    consistent?: boolean
    minProperties?: number
    multiline?: boolean
  })
  ObjectPattern?: (('always' | 'never') | {
    consistent?: boolean
    minProperties?: number
    multiline?: boolean
  })
})

export type ObjectCurlyNewlineRuleOptions = [Schema0]
