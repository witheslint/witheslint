type AccessibilityLevel = ('explicit' | 'no-public' | 'off')

interface Schema0 {
  accessibility?: AccessibilityLevel
  overrides?: {
    accessors?: AccessibilityLevel
    constructors?: AccessibilityLevel
    methods?: AccessibilityLevel
    parameterProperties?: AccessibilityLevel
    properties?: AccessibilityLevel
  }
  ignoredMethodNames?: string[]
}

export type ExplicitMemberAccessibilityRuleOptions = [Schema0]
