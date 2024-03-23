type Schema0 = [] | [(Value | {
  arrays?: ValueWithIgnore
  objects?: ValueWithIgnore
  imports?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
})]
type Value = ('always-multiline' | 'always' | 'never' | 'only-multiline')
type ValueWithIgnore = ('always-multiline' | 'always' | 'ignore' | 'never' | 'only-multiline')

export type CommaDangleRuleOptions = Schema0
