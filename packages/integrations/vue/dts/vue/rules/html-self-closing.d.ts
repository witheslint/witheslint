/**
 * @maxItems 1
 */
type Schema0 = [] | [{
  html?: {
    normal?: OptionValue
    void?: OptionValue
    component?: OptionValue
  }
  svg?: OptionValue
  math?: OptionValue
}]
type OptionValue = ('always' | 'never' | 'any')

export type HtmlSelfClosingRuleOptions = Schema0
