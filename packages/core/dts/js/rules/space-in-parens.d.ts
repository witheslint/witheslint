type Schema0 = ('always' | 'never')

interface Schema1 {
  exceptions?: ('()' | '[]' | '{}' | 'empty')[]
}

export type SpaceInParensRuleOptions = [Schema0, Schema1]
