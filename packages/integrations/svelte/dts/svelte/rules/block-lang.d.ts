interface Schema0 {
  enforceScriptPresent?: boolean
  enforceStylePresent?: boolean
  script?: ((string | null) | [(string | null), ...((string | null))[]])
  style?: ((string | null) | [(string | null), ...((string | null))[]])
}

export type BlockLangRuleOptions = [Schema0]
