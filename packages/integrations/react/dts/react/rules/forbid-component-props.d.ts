interface Schema0 {
  forbid?: (string | {
    propName?: string
    allowedFor?: string[]
    message?: string
  } | {
    propName?: string
    /**
     * @minItems 1
     */
    disallowedFor: [string, ...string[]]
    message?: string
  })[]
  [k: string]: any
}

export type ForbidComponentPropsRuleOptions = [Schema0]
