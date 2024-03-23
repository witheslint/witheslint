interface Schema0 {
  order?: (string | [string, ...string[]] | {
    match: (string | [string, ...string[]])
    sort: ('alphabetical' | 'ignore')
  })[]
  alphabetical?: boolean
}

export type SortAttributesRuleOptions = [Schema0]
