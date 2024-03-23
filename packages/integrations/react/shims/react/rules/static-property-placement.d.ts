type Schema0 = ('static public field' | 'static getter' | 'property assignment')

interface Schema1 {
  propTypes?: ('static public field' | 'static getter' | 'property assignment')
  defaultProps?: ('static public field' | 'static getter' | 'property assignment')
  childContextTypes?: ('static public field' | 'static getter' | 'property assignment')
  contextTypes?: ('static public field' | 'static getter' | 'property assignment')
  contextType?: ('static public field' | 'static getter' | 'property assignment')
  displayName?: ('static public field' | 'static getter' | 'property assignment')
}

export type StaticPropertyPlacementRuleOptions = [Schema0, Schema1]
