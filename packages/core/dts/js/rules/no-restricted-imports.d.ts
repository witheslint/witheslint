type Schema0 = (({
  importNames?: string[]
  message?: string
  name: string
} | string)[] | [] | [{
  paths?: ({
    importNames?: string[]
    message?: string
    name: string
  } | string)[]
  patterns?: ({
    caseSensitive?: boolean
    /**
     * @minItems 1
     */
    group: [string, ...string[]]
    importNamePattern?: string
    /**
     * @minItems 1
     */
    importNames?: [string, ...string[]]
    message?: string
  }[] | string[])
}])

export type NoRestrictedImportsRuleOptions = Schema0
