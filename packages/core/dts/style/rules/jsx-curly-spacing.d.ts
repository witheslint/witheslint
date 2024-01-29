type Schema0 = [] | [((BasicConfig & {
  attributes?: BasicConfigOrBoolean
  children?: BasicConfigOrBoolean
  [k: string]: any
}) | ('always' | 'never'))] | [((BasicConfig & {
  attributes?: BasicConfigOrBoolean
  children?: BasicConfigOrBoolean
  [k: string]: any
}) | ('always' | 'never')), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ('always' | 'never')
    [k: string]: any
  }
}]
type BasicConfigOrBoolean = (BasicConfig | boolean)

interface BasicConfig {
  when?: ('always' | 'never')
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ('always' | 'never')
    [k: string]: any
  }
  [k: string]: any
}

export type JsxCurlySpacingRuleOptions = Schema0
