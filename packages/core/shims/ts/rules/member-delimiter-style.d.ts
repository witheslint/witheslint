type MultiLineOption = ('none' | 'semi' | 'comma')
type SingleLineOption = ('semi' | 'comma')

interface Schema0 {
  multiline?: {
    delimiter?: MultiLineOption
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: SingleLineOption
    requireLast?: boolean
  }
  overrides?: {
    interface?: DelimiterConfig
    typeLiteral?: DelimiterConfig
  }
  multilineDetection?: ('brackets' | 'last-member')
}
interface DelimiterConfig {
  multiline?: {
    delimiter?: MultiLineOption
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: SingleLineOption
    requireLast?: boolean
  }
}

export type MemberDelimiterStyleRuleOptions = [Schema0]
