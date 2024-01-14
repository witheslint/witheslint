type BanConfig = ({
/**
 * Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.
 */
  fixWith?: string
  /**
   * Custom error message
   */
  message?: string
  /**
   * Types to suggest replacing with.
   */
  suggest?: string[]
} | false | null | string | true)

interface Schema0 {
  types?: {
    [k: string]: BanConfig
  }
  extendDefaults?: boolean
}

export type BanTypesRuleOptions = [Schema0]
