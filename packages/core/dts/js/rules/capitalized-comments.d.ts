type Schema0 = ('always' | 'never')

type Schema1 = ({
  ignoreConsecutiveComments?: boolean
  ignoreInlineComments?: boolean
  ignorePattern?: string
} | {
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
})

export type CapitalizedCommentsRuleOptions = [Schema0, Schema1]
