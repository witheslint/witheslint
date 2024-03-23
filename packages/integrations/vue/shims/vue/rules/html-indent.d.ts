type Schema0 = (number | 'tab')

interface Schema1 {
  attribute?: number
  baseIndent?: number
  closeBracket?: (number | {
    startTag?: number
    endTag?: number
    selfClosingTag?: number
  })
  switchCase?: number
  alignAttributesVertically?: boolean
  ignores?: string[]
}

export type HtmlIndentRuleOptions = [Schema0, Schema1]
