interface Schema0 {
/**
 * an array of additional namespace names to allow
 *
 * @minItems 1
 */
  allowedNamespaces?: [string, ...string[]]
}

export type NoUnknownNamespacesRuleOptions = [Schema0]
