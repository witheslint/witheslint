type Schema0 = (('always' | 'never') | {
  singleline?: ('always' | 'never' | 'ignore')
  multiline?: ('always' | 'never' | 'ignore')
})

interface Schema1 {
  exceptions?: string[]
}

export type HtmlCommentContentNewlineRuleOptions = [Schema0, Schema1]
