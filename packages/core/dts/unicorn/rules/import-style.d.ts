type Schema0 = [] | [{
  checkDynamicImport?: boolean
  checkExportFrom?: boolean
  checkImport?: boolean
  checkRequire?: boolean
  extendDefaultStyles?: boolean
  styles?: ModuleStyles
}]
type Styles = (BooleanObject | false)

interface ModuleStyles {
  [k: string]: Styles
}
interface BooleanObject {
  [k: string]: boolean
}

export type ImportStyleRuleOptions = Schema0
