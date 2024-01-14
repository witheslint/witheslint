type Schema0 = (('always' | 'never') | {
/**
 * @minItems 1
 */
  enforce: [{
    blankLine: ('always' | 'never')
    next: ('*' | 'field' | 'method')
    prev: ('*' | 'field' | 'method')
  }, ...({
    blankLine: ('always' | 'never')
    next: ('*' | 'field' | 'method')
    prev: ('*' | 'field' | 'method')
  })[]]
})

interface Schema1 {
  exceptAfterSingleLine?: boolean
}

export type LinesBetweenClassMembersRuleOptions = [Schema0, Schema1]
