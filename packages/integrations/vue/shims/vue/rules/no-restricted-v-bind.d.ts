/**
 * @minItems 0
 */
type Schema0 = ((string | null) | {
  argument: (string | null)
  modifiers?: ('prop' | 'camel' | 'sync' | 'attr')[]
  element?: string
  message?: string
})[]

export type NoRestrictedVBindRuleOptions = Schema0
