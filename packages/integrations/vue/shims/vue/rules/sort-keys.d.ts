type Schema0 = ('asc' | 'desc')

interface Schema1 {
  caseSensitive?: boolean
  ignoreChildrenOf?: any[]
  ignoreGrandchildrenOf?: any[]
  minKeys?: number
  natural?: boolean
  runOutsideVue?: boolean
}

export type SortKeysRuleOptions = [Schema0, Schema1]
