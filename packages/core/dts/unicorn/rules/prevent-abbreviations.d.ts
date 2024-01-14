type Schema0 = [] | [{
  allowList?: BooleanObject
  checkDefaultAndNamespaceImports?: (boolean | string)
  checkFilenames?: boolean
  checkProperties?: boolean
  checkShorthandImports?: (boolean | string)
  checkShorthandProperties?: boolean
  checkVariables?: boolean
  extendDefaultAllowList?: boolean
  extendDefaultReplacements?: boolean
  ignore?: any[]
  replacements?: Abbreviations
}]
type Replacements = (BooleanObject | false)

interface Abbreviations {
  [k: string]: Replacements
}
interface BooleanObject {
  [k: string]: boolean
}

export type PreventAbbreviationsRuleOptions = Schema0
