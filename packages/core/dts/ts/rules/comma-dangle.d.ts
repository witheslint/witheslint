type Schema0 = [] | [(Value | {
  arrays?: ValueWithIgnore
  objects?: ValueWithIgnore
  imports?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
  enums?: ValueWithIgnore
  generics?: ValueWithIgnore
  tuples?: ValueWithIgnore
})]
type Value = ('always-multiline' | 'always' | 'never' | 'only-multiline')
type ValueWithIgnore = ('always-multiline' | 'always' | 'never' | 'only-multiline' | 'ignore')

export type CommaDangleRuleOptions = Schema0
