type Schema0 = (({
  unusedExports: true
  src?: {
    [k: string]: any
  }
  [k: string]: any
} | {
  missingExports: true
  [k: string]: any
}) & {
/**
 * files/paths to be analyzed (only for unused exports)
 */
  src?: string[]
  /**
   * files/paths for which unused exports will not be reported (e.g module entry points)
   */
  ignoreExports?: string[]
  /**
   * report modules without any exports
   */
  missingExports?: boolean
  /**
   * report exports without any usage
   */
  unusedExports?: boolean
  [k: string]: any
})

export type NoUnusedModulesRuleOptions = [Schema0]
