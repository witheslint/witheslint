type SortImports = (MaxLineLengthRequiresLineLengthType & {
  'custom-groups'?: {
    type?: {
      [k: string]: any
    }
    value?: {
      [k: string]: any
    }
  }
  'type'?: ('alphabetical' | 'natural' | 'line-length')
  'order'?: ('asc' | 'desc')
  'ignore-case'?: boolean
  'groups'?: any[]
  'internal-pattern'?: string[]
  'newlines-between'?: ('ignore' | 'always' | 'never')
  'max-line-length'?: number
})
type MaxLineLengthRequiresLineLengthType = ({
  [k: string]: any
} | IsLineLength)

interface IsLineLength {
  type: 'line-length'
  [k: string]: any
}

export type SortImportsRuleOptions = [Schema0]
