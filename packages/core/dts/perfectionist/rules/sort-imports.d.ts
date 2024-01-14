type SortImports = (MaxLineLengthRequiresLineLengthType & {
  'custom-groups'?: {
    type?: {
      [k: string]: any
    }
    value?: {
      [k: string]: any
    }
  }
  groups?: any[]
  'ignore-case'?: boolean
  'internal-pattern'?: string[]
  'max-line-length'?: number
  'newlines-between'?: ('always' | 'ignore' | 'never')
  order?: ('asc' | 'desc')
  type?: ('alphabetical' | 'line-length' | 'natural')
})
type MaxLineLengthRequiresLineLengthType = ({
  [k: string]: any
} | IsLineLength)

interface IsLineLength {
  type: 'line-length'
  [k: string]: any
}

export type SortImportsRuleOptions = [Schema0]
