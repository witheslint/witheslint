type Schema0 = [] | [{
  checkProperties?: boolean
  checkVariables?: boolean
  checkDefaultAndNamespaceImports?: (boolean | string)
  checkShorthandImports?: (boolean | string)
  checkShorthandProperties?: boolean
  checkFilenames?: boolean
  extendDefaultReplacements?: boolean
  replacements?: Abbreviations
  extendDefaultAllowList?: boolean
  allowList?: BooleanObject
  ignore?: any[]
}]
type Replacements = (false | BooleanObject)

interface Abbreviations {
  [k: string]: Replacements
}
interface BooleanObject {
  [k: string]: boolean
}

export type PreventAbbreviationsRuleOptions = Schema0
