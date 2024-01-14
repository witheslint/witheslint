type Schema0 = [({
  ArrayExpression?: BasicConfig
  ArrayPattern?: BasicConfig
} | BasicConfig)] | []
type BasicConfig = (('always' | 'consistent' | 'never') | {
  minItems?: (null | number)
  multiline?: boolean
})

export type ArrayElementNewlineRuleOptions = Schema0
