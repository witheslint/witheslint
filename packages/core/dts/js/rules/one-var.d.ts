type Schema0 = (('always' | 'consecutive' | 'never') | {
  const?: ('always' | 'consecutive' | 'never')
  let?: ('always' | 'consecutive' | 'never')
  separateRequires?: boolean
  var?: ('always' | 'consecutive' | 'never')
} | {
  initialized?: ('always' | 'consecutive' | 'never')
  uninitialized?: ('always' | 'consecutive' | 'never')
})

export type OneVarRuleOptions = [Schema0]
