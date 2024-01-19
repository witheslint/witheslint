type Schema0 = ({
/**
 * @minItems 1
 */
  enforce: [{
    blankLine: ('always' | 'never')
    next: ('method' | 'field' | '*')
    prev: ('method' | 'field' | '*')
  }, ...({
    blankLine: ('always' | 'never')
    next: ('method' | 'field' | '*')
    prev: ('method' | 'field' | '*')
  })[]]
} | ('always' | 'never'))

interface Schema1 {
  exceptAfterSingleLine?: boolean
}

export type LinesBetweenClassMembersRuleOptions = [Schema0, Schema1]
