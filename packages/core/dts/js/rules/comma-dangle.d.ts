type Schema0 = [] | [(Value | {
  arrays?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
  imports?: ValueWithIgnore
  objects?: ValueWithIgnore
})]
type Value = ('always-multiline' | 'always' | 'never' | 'only-multiline')
type ValueWithIgnore = ('always-multiline' | 'always' | 'ignore' | 'never' | 'only-multiline')

export type CommaDangleRuleOptions = Schema0
