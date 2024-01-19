type Schema0 = [] | [(Value | {
  arrays?: ValueWithIgnore
  enums?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
  generics?: ValueWithIgnore
  imports?: ValueWithIgnore
  objects?: ValueWithIgnore
  tuples?: ValueWithIgnore
})]
type Value = ('always-multiline' | 'always' | 'never' | 'only-multiline')
type ValueWithIgnore = ('always-multiline' | 'always' | 'never' | 'only-multiline' | 'ignore')

export type CommaDangleRuleOptions = Schema0
