interface Schema0 {
  checkConstructors?: boolean
  checkGetters?: boolean
  checkSetters?: boolean
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  descriptionStyle?: ('body' | 'tag' | 'any')
  exemptedBy?: string[]
}

export type RequireDescriptionRuleOptions = [Schema0]
