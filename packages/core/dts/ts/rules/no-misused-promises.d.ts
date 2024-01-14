interface Schema0 {
  checksConditionals?: boolean
  checksVoidReturn?: ({
    arguments?: boolean
    attributes?: boolean
    properties?: boolean
    returns?: boolean
    variables?: boolean
  } | boolean)
  checksSpreads?: boolean
}

export type NoMisusedPromisesRuleOptions = [Schema0]
