interface Schema0 {
  groups?: any[]
  pathGroupsExcludedImportTypes?: any[]
  distinctGroup?: boolean
  pathGroups?: {
    group: ('builtin' | 'external' | 'internal' | 'unknown' | 'parent' | 'sibling' | 'index' | 'object' | 'type')
    pattern: string
    patternOptions?: {
      [k: string]: any
    }
    position?: ('after' | 'before')
  }[]
  'newlines-between'?: ('ignore' | 'always' | 'always-and-inside-groups' | 'never')
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ('ignore' | 'asc' | 'desc')
    orderImportKind?: ('ignore' | 'asc' | 'desc')
  }
  warnOnUnassignedImports?: boolean
}

export type OrderRuleOptions = [Schema0]
