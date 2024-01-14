interface Schema0 {
  binary?: {
    groupLength?: number
    minimumDigits?: number
    onlyIfContainsSeparator?: boolean
  }
  octal?: {
    groupLength?: number
    minimumDigits?: number
    onlyIfContainsSeparator?: boolean
  }
  hexadecimal?: {
    groupLength?: number
    minimumDigits?: number
    onlyIfContainsSeparator?: boolean
  }
  number?: {
    groupLength?: number
    minimumDigits?: number
    onlyIfContainsSeparator?: boolean
  }
  onlyIfContainsSeparator?: boolean
}

export type NumericSeparatorsStyleRuleOptions = [Schema0]
