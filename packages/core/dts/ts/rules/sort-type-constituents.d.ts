interface Schema0 {
/**
 * Whether to check intersection types.
 */
  checkIntersections?: boolean
  /**
   * Whether to check union types.
   */
  checkUnions?: boolean
  /**
   * Ordering of the groups.
   */
  groupOrder?: ('conditional' | 'function' | 'import' | 'intersection' | 'keyword' | 'literal' | 'named' | 'nullish' | 'object' | 'operator' | 'tuple' | 'union')[]
}

export type SortTypeConstituentsRuleOptions = [Schema0]
