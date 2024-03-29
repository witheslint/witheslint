type Schema0 = [] | [{
  checkImport?: boolean
  checkDynamicImport?: boolean
  checkExportFrom?: boolean
  checkRequire?: boolean
  extendDefaultStyles?: boolean
  styles?: ModuleStyles
}]
type Styles = (false | BooleanObject)

interface ModuleStyles {
  [k: string]: Styles
}
interface BooleanObject {
  [k: string]: boolean
}

export type ImportStyleRuleOptions = Schema0
