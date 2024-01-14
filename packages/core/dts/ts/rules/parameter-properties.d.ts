type Modifier = ('private readonly' | 'private' | 'protected readonly' | 'protected' | 'public readonly' | 'public' | 'readonly')

interface Schema0 {
  allow?: Modifier[]
  prefer?: ('class-property' | 'parameter-property')
}

export type ParameterPropertiesRuleOptions = [Schema0]
