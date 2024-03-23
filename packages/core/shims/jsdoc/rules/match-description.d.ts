interface Schema0 {
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  mainDescription?: (string | boolean | {
    match?: (string | boolean)
    message?: string
  })
  matchDescription?: string
  message?: string
  nonemptyTags?: boolean
  tags?: {
    /**
     */
    [k: string]: (string | true | {
      match?: (string | true)
      message?: string
    })
  }
}

export type MatchDescriptionRuleOptions = [Schema0]
