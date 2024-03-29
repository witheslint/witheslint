type Schema0 = ('asc' | 'desc')

interface Schema1 {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}

export type SortKeysRuleOptions = [Schema0, Schema1]
