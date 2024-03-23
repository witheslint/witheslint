/**
 * @minItems 1
 */
type Schema0 = [(string | {
/**
 * @minItems 1
 */
  elements?: [string, ...string[]]
  message?: string
}), ...((string | {
/**
 * @minItems 1
 */
  elements?: [string, ...string[]]
  message?: string
}))[]]

export type NoRestrictedHtmlElementsRuleOptions = Schema0
