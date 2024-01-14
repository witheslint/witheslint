type Schema0 = ('after' | 'before' | 'none' | null)

interface Schema1 {
  overrides?: {
    [k: string]: ('after' | 'before' | 'ignore' | 'none')
  }
}

export type OperatorLinebreakRuleOptions = [Schema0, Schema1]
