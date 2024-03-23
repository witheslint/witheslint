interface Schema0 {
  textExpressions?: ('never' | 'always')
  attributesAndProps?: ('never' | 'always')
  directiveExpressions?: ('never' | 'always')
  tags?: {
    openingBrace?: ('never' | 'always')
    closingBrace?: ('never' | 'always' | 'always-after-expression')
  }
}

export type MustacheSpacingRuleOptions = [Schema0]
