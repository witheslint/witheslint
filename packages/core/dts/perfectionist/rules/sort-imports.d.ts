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
  'newlines-between'?: ('ignore' | 'always' | 'never')
  order?: ('asc' | 'desc')
  type?: ('alphabetical' | 'natural' | 'line-length')
})
type MaxLineLengthRequiresLineLengthType = ({
  [k: string]: any
} | IsLineLength)

interface IsLineLength {
  type: 'line-length'
  [k: string]: any
}

export type SortImportsRuleOptions = [Schema0]
