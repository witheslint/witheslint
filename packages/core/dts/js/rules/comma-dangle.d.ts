type Schema0 = [({
  arrays?: ValueWithIgnore
  exports?: ValueWithIgnore
  functions?: ValueWithIgnore
  imports?: ValueWithIgnore
  objects?: ValueWithIgnore
} | Value)] | []
type Value = ('always-multiline' | 'always' | 'never' | 'only-multiline')
type ValueWithIgnore = ('always-multiline' | 'always' | 'ignore' | 'never' | 'only-multiline')

export type CommaDangleRuleOptions = Schema0
