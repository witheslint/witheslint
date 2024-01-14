interface Schema0 {
  checkConstructors?: boolean
  checkGetters?: boolean
  checkSetters?: boolean
  contexts?: ({
    comment?: string
    context?: string
  } | string)[]
  descriptionStyle?: ('any' | 'body' | 'tag')
  exemptedBy?: string[]
}

export type RequireDescriptionRuleOptions = [Schema0]
