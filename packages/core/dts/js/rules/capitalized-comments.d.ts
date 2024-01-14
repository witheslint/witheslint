type Schema0 = ('always' | 'never')

type Schema1 = ({
  block?: {
    ignoreConsecutiveComments?: boolean
    ignoreInlineComments?: boolean
    ignorePattern?: string
  }
  line?: {
    ignoreConsecutiveComments?: boolean
    ignoreInlineComments?: boolean
    ignorePattern?: string
  }
} | {
  ignoreConsecutiveComments?: boolean
  ignoreInlineComments?: boolean
  ignorePattern?: string
})

export type CapitalizedCommentsRuleOptions = [Schema0, Schema1]
