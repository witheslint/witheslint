interface Schema0 {
  groups?: any[]
  pathGroupsExcludedImportTypes?: any[]
  distinctGroup?: boolean
  pathGroups?: {
    group: ('builtin' | 'external' | 'index' | 'internal' | 'object' | 'parent' | 'sibling' | 'type' | 'unknown')
    pattern: string
    patternOptions?: {
      [k: string]: any
    }
    position?: ('after' | 'before')
  }[]
  'newlines-between'?: ('always-and-inside-groups' | 'always' | 'ignore' | 'never')
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ('asc' | 'desc' | 'ignore')
    orderImportKind?: ('asc' | 'desc' | 'ignore')
  }
  warnOnUnassignedImports?: boolean
}

export type OrderRuleOptions = [Schema0]
