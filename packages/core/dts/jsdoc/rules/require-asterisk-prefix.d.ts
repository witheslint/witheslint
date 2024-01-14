type Schema0 = ('always' | 'any' | 'never')

interface Schema1 {
  tags?: {
    [k: string]: any
    always?: string[]
    any?: string[]
    never?: string[]
  }
}

export type RequireAsteriskPrefixRuleOptions = [Schema0, Schema1]
