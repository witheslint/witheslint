type Schema0 = ('backtick' | 'double' | 'single')

type Schema1 = ('avoid-escape' | {
  allowTemplateLiterals?: boolean
  avoidEscape?: boolean
})

export type QuotesRuleOptions = [Schema0, Schema1]
