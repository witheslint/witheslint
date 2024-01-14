interface Schema0 {
  'custom-groups'?: {
    [k: string]: any
  }
  'partition-by-comment'?: (any[] | boolean | string)
  'partition-by-new-line'?: boolean
  'styled-components'?: boolean
  type?: ('alphabetical' | 'line-length' | 'natural')
  order?: ('asc' | 'desc')
  'ignore-case'?: boolean
  'ignore-pattern'?: string[]
  groups?: any[]
}

export type SortObjectsRuleOptions = [Schema0]
