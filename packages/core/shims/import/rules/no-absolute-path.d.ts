interface Schema0 {
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]]
}

export type NoAbsolutePathRuleOptions = [Schema0]
