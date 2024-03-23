type Schema0 = ('always' | 'always-multiline' | 'never')

interface Schema1 {
  ignoreJSX?: boolean
  [k: string]: any
}

export type MultilineTernaryRuleOptions = [Schema0, Schema1]
