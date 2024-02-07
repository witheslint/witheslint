interface Schema0 {
  singleline?: ('always' | 'never' | 'consistent' | 'ignore')
  multiline?: ('always' | 'never' | 'consistent' | 'ignore')
  maxEmptyLines?: number
  blocks?: {
    /**
     */
    [k: string]: {
      singleline?: ('always' | 'never' | 'consistent' | 'ignore')
      multiline?: ('always' | 'never' | 'consistent' | 'ignore')
      maxEmptyLines?: number
    }
  }
}

export type BlockTagNewlineRuleOptions = [Schema0]
