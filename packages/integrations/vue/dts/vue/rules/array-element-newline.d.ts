type Schema0 = [] | [(BasicConfig | {
  ArrayExpression?: BasicConfig
  ArrayPattern?: BasicConfig
})]
type BasicConfig = (('always' | 'never' | 'consistent') | {
  multiline?: boolean
  minItems?: (number | null)
})

export type ArrayElementNewlineRuleOptions = Schema0
