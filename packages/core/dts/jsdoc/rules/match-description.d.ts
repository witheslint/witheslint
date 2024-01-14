interface Schema0 {
  contexts?: ({
    comment?: string
    context?: string
  } | string)[]
  mainDescription?: ({
    match?: (boolean | string)
    message?: string
  } | boolean | string)
  matchDescription?: string
  message?: string
  nonemptyTags?: boolean
  tags?: {
    /**
     */
    [k: string]: ({
      match?: (string | true)
      message?: string
    } | string | true)
  }
}

export type MatchDescriptionRuleOptions = [Schema0]
