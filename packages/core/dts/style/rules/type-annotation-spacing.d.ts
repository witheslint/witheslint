interface Schema0 {
  before?: boolean
  after?: boolean
  overrides?: {
    arrow?: SpacingConfig
    colon?: SpacingConfig
    parameter?: SpacingConfig
    property?: SpacingConfig
    returnType?: SpacingConfig
    variable?: SpacingConfig
  }
}
interface SpacingConfig {
  before?: boolean
  after?: boolean
}

export type TypeAnnotationSpacingRuleOptions = [Schema0]
