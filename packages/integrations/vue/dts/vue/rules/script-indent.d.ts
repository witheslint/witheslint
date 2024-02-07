type Schema0 = (number | 'tab')

interface Schema1 {
  baseIndent?: number
  switchCase?: number
  ignores?: string[]
}

export type ScriptIndentRuleOptions = [Schema0, Schema1]
