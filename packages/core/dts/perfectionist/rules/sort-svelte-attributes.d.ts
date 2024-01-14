interface Schema0 {
  'custom-groups'?: {
    [k: string]: any
  }
  type?: ('alphabetical' | 'line-length' | 'natural')
  order?: ('asc' | 'desc')
  'ignore-case'?: boolean
  groups?: any[]
}

export type SortSvelteAttributesRuleOptions = [Schema0]
