type Schema0 = (({
  [k: string]: any
  missingExports: true
} | {
  [k: string]: any
  src?: {
    [k: string]: any
  }
  unusedExports: true
}) & {
  [k: string]: any
  /**
   * files/paths for which unused exports will not be reported (e.g module entry points)
   */
  ignoreExports?: string[]
  /**
   * report modules without any exports
   */
  missingExports?: boolean
  /**
   * files/paths to be analyzed (only for unused exports)
   */
  src?: string[]
  /**
   * report exports without any usage
   */
  unusedExports?: boolean
})

export type NoUnusedModulesRuleOptions = [Schema0]
