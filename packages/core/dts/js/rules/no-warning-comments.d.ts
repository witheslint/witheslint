interface Schema0 {
  terms?: string[]
  location?: ('anywhere' | 'start')
  /**
   * @minItems 1
   */
  decoration?: [string, ...string[]]
}

export type NoWarningCommentsRuleOptions = [Schema0]
