type Schema0 = ((string | {
  name: string
  message?: string
  importNames?: string[]
  /**
   * Disallow value imports, but allow type-only imports.
   */
  allowTypeImports?: boolean
})[] | [] | [{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    /**
     * Disallow value imports, but allow type-only imports.
     */
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    /**
     * @minItems 1
     */
    importNames?: [string, ...string[]]
    /**
     * @minItems 1
     */
    group: [string, ...string[]]
    importNamePattern?: string
    message?: string
    caseSensitive?: boolean
    /**
     * Disallow value imports, but allow type-only imports.
     */
    allowTypeImports?: boolean
  }[])
}])

export type NoRestrictedImportsRuleOptions = Schema0
