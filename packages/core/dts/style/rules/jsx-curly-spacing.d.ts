type Schema0 = [] | [((BasicConfig & {
  [k: string]: any
  attributes?: BasicConfigOrBoolean
  children?: BasicConfigOrBoolean
}) | ('always' | 'never'))] | [((BasicConfig & {
  [k: string]: any
  attributes?: BasicConfigOrBoolean
  children?: BasicConfigOrBoolean
}) | ('always' | 'never')), {
  allowMultiline?: boolean
  spacing?: {
    [k: string]: any
    objectLiterals?: ('always' | 'never')
  }
}]
type BasicConfigOrBoolean = (BasicConfig | boolean)

interface BasicConfig {
  when?: ('always' | 'never')
  allowMultiline?: boolean
  spacing?: {
    [k: string]: any
    objectLiterals?: ('always' | 'never')
  }
  [k: string]: any
}

export type JsxCurlySpacingRuleOptions = Schema0
