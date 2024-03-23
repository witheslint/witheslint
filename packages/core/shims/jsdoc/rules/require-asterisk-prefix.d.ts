type Schema0 = ('always' | 'never' | 'any')

interface Schema1 {
  tags?: {
    always?: string[]
    any?: string[]
    never?: string[]
    [k: string]: any
  }
}

export type RequireAsteriskPrefixRuleOptions = [Schema0, Schema1]
