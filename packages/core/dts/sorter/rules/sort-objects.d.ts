interface Schema0 {
  'custom-groups'?: {
    [k: string]: any
  }
  'partition-by-comment'?: (boolean | string | any[])
  'partition-by-new-line'?: boolean
  'styled-components'?: boolean
  'type'?: ('alphabetical' | 'natural' | 'line-length')
  'order'?: ('asc' | 'desc')
  'ignore-case'?: boolean
  'ignore-pattern'?: string[]
  'groups'?: any[]
}

export type SortObjectsRuleOptions = [Schema0]
