type Schema0 = ({
  code?: number
  comments?: number
  ignoreComments?: boolean
  ignorePattern?: string
  ignoreRegExpLiterals?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  tabWidth?: number
} | number)

type Schema1 = ({
  code?: number
  comments?: number
  ignoreComments?: boolean
  ignorePattern?: string
  ignoreRegExpLiterals?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  tabWidth?: number
} | number)

interface Schema2 {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}

export type MaxLenRuleOptions = [Schema0, Schema1, Schema2]
