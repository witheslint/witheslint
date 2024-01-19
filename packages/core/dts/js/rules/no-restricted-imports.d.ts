type Schema0 = ((string | {
  importNames?: string[]
  message?: string
  name: string
})[] | [] | [{
  paths?: (string | {
    importNames?: string[]
    message?: string
    name: string
  })[]
  patterns?: (string[] | {
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
  }[])
}])

export type NoRestrictedImportsRuleOptions = Schema0
