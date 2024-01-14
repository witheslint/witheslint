type Schema0 = ('always' | 'any' | 'never')

interface Schema1 {
  applyToEndTag?: boolean
  count?: number
  endLines?: (null | number)
  startLines?: (null | number)
  tags?: {
    /**
     */
    [k: string]: {
      count?: number
      lines?: ('always' | 'any' | 'never')
    }
  }
}

export type TagLinesRuleOptions = [Schema0, Schema1]
