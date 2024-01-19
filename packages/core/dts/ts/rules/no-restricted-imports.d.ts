type Schema0 = ((string | {
  /**
   * Disallow value imports, but allow type-only imports.
   */
  allowTypeImports?: boolean
  importNames?: string[]
  message?: string
  name: string
})[] | [] | [{
  paths?: (string | {
    /**
     * Disallow value imports, but allow type-only imports.
     */
    allowTypeImports?: boolean
    importNames?: string[]
    message?: string
    name: string
  })[]
  patterns?: (string[] | {
    /**
     * Disallow value imports, but allow type-only imports.
     */
    allowTypeImports?: boolean
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
