type Schema0 = ((string | null) | {
  argument: (string | null)
  element?: string
  message?: string
  /**
   * @minItems 1
   */
  modifiers?: [('prevent' | 'stop' | 'capture' | 'self' | 'once' | 'passive'), ...(('prevent' | 'stop' | 'capture' | 'self' | 'once' | 'passive'))[]]
})[]

export type NoRestrictedVOnRuleOptions = Schema0
