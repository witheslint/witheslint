type Schema0 = ('always' | 'any' | 'never')

interface Schema1 {
  applyToEndTag?: boolean
  count?: number
  endLines?: (number | null)
  startLines?: (number | null)
  tags?: {
    /**
     */
    [k: string]: {
      count?: number
      lines?: ('always' | 'never' | 'any')
    }
  }
}

export type TagLinesRuleOptions = [Schema0, Schema1]
