interface Schema0 {
/**
 * @minItems 1
 */
  zones?: [{
    except?: string[]
    from?: (string | string[])
    message?: string
    target?: (string | string[])
  }, ...({
    except?: string[]
    from?: (string | string[])
    message?: string
    target?: (string | string[])
  })[]]
  basePath?: string
}

export type NoRestrictedPathsRuleOptions = [Schema0]
