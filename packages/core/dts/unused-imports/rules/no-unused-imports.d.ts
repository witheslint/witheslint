type Schema0 = (('all' | 'local') | {
  args?: ('all' | 'after-used' | 'none')
  argsIgnorePattern?: string
  caughtErrors?: ('all' | 'none')
  caughtErrorsIgnorePattern?: string
  destructuredArrayIgnorePattern?: string
  ignoreRestSiblings?: boolean
  vars?: ('all' | 'local')
  varsIgnorePattern?: string
})

export type NoUnusedImportsRuleOptions = [Schema0]
