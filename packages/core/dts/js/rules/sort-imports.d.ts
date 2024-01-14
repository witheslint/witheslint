interface Schema0 {
  ignoreCase?: boolean
  /**
   * @minItems 4
   * @maxItems 4
   */
  memberSyntaxSortOrder?: [('all' | 'multiple' | 'none' | 'single'), ('all' | 'multiple' | 'none' | 'single'), ('all' | 'multiple' | 'none' | 'single'), ('all' | 'multiple' | 'none' | 'single')]
  ignoreDeclarationSort?: boolean
  ignoreMemberSort?: boolean
  allowSeparatedGroups?: boolean
}

export type SortImportsRuleOptions = [Schema0]
