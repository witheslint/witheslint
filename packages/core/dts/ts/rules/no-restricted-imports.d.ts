type Schema0 = (({
  /**
   * Disallow value imports, but allow type-only imports.
   */
  allowTypeImports?: boolean
  importNames?: string[]
  message?: string
  name: string
} | string)[] | [] | [{
  paths?: ({
    /**
     * Disallow value imports, but allow type-only imports.
     */
    allowTypeImports?: boolean
    importNames?: string[]
    message?: string
    name: string
  } | string)[]
  patterns?: ({
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
  }[] | string[])
}])

export type NoRestrictedImportsRuleOptions = Schema0
