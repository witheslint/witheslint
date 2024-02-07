type Schema0 = ('PascalCase' | 'kebab-case')

interface Schema1 {
  globals?: string[]
  ignores?: string[]
  registeredComponentsOnly?: boolean
}

export type ComponentNameInTemplateCasingRuleOptions = [Schema0, Schema1]
