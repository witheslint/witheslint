type Schema0 = ([] | [('always' | 'never')] | [] | ['always'] | ['always', {
  never?: string[]
  assumeUndefinedIsFalse?: boolean
}] | [] | ['never'] | ['never', {
  always?: string[]
  assumeUndefinedIsFalse?: boolean
}])

export type JsxBooleanValueRuleOptions = Schema0
