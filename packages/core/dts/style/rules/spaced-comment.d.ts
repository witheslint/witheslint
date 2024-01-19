type Schema0 = ('always' | 'never')

interface Schema1 {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    balanced?: boolean
    exceptions?: string[]
    markers?: string[]
  }
}

export type SpacedCommentRuleOptions = [Schema0, Schema1]
