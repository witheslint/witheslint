type Schema0 = [({
  arrays?: ValueWithIgnore
  enums?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
  generics?: ValueWithIgnore
  imports?: ValueWithIgnore
  objects?: ValueWithIgnore
  tuples?: ValueWithIgnore
} | Value)] | []
type Value = ('always-multiline' | 'always' | 'never' | 'only-multiline')
type ValueWithIgnore = ('always-multiline' | 'always' | 'ignore' | 'never' | 'only-multiline')

export type CommaDangleRuleOptions = Schema0
