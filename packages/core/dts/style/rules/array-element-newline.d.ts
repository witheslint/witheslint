type Schema0 = [] | [(BasicConfig | {
  ArrayExpression?: BasicConfig
  ArrayPattern?: BasicConfig
})]
type BasicConfig = (('always' | 'never' | 'consistent') | {
  minItems?: (number | null)
  multiline?: boolean
})

export type ArrayElementNewlineRuleOptions = Schema0
