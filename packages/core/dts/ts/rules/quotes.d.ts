type Schema0 = ('single' | 'double' | 'backtick')

type Schema1 = ('avoid-escape' | {
  allowTemplateLiterals?: boolean
  avoidEscape?: boolean
})

export type QuotesRuleOptions = [Schema0, Schema1]
