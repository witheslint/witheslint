type Schema0 = ('always' | 'never')

interface Schema1 {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}

export type SpacedCommentRuleOptions = [Schema0, Schema1]
