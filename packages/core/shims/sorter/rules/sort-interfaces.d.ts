interface Schema0 {
  'custom-groups'?: {
    [k: string]: any
  }
  'type'?: ('alphabetical' | 'natural' | 'line-length')
  'order'?: ('asc' | 'desc')
  'ignore-case'?: boolean
  'ignore-pattern'?: string[]
  'groups'?: any[]
  'partition-by-new-line'?: boolean
}

export type SortInterfacesRuleOptions = [Schema0]
