type Schema0 = (('all' | 'local') | {
  args?: ('after-used' | 'all' | 'none')
  argsIgnorePattern?: string
  caughtErrors?: ('all' | 'none')
  caughtErrorsIgnorePattern?: string
  destructuredArrayIgnorePattern?: string
  ignoreRestSiblings?: boolean
  vars?: ('all' | 'local')
  varsIgnorePattern?: string
})

export type NoUnusedVarsTsRuleOptions = [Schema0]
