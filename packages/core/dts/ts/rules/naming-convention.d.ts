type FormatOptionsConfig = (null | PredefinedFormats[])
type PredefinedFormats = ('camelCase' | 'PascalCase' | 'snake_case' | 'strictCamelCase' | 'StrictPascalCase' | 'UPPER_CASE')
type UnderscoreOptions = ('allow' | 'allowDouble' | 'allowSingleOrDouble' | 'forbid' | 'require' | 'requireDouble')
type PrefixSuffixConfig = string[]
type TypeModifiers = ('array' | 'boolean' | 'function' | 'number' | 'string')
type Schema0 = ({
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('#private' | 'abstract' | 'async' | 'const' | 'default' | 'destructured' | 'exported' | 'global' | 'namespace' | 'override' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'default'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('#private' | 'abstract' | 'async' | 'const' | 'default' | 'destructured' | 'exported' | 'global' | 'namespace' | 'override' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: ('accessor' | 'class' | 'classMethod' | 'classProperty' | 'default' | 'enum' | 'enumMember' | 'function' | 'import' | 'interface' | 'memberLike' | 'method' | 'objectLiteralMethod' | 'objectLiteralProperty' | 'parameter' | 'parameterProperty' | 'property' | 'typeAlias' | 'typeLike' | 'typeMethod' | 'typeParameter' | 'typeProperty' | 'variable' | 'variableLike')[]
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('#private' | 'abstract' | 'async' | 'override' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static')[]
  prefix?: PrefixSuffixConfig
  selector: 'memberLike'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('#private' | 'abstract' | 'async' | 'override' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static')[]
  prefix?: PrefixSuffixConfig
  selector: 'property'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('#private' | 'abstract' | 'async' | 'override' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static')[]
  prefix?: PrefixSuffixConfig
  selector: 'classMethod'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('#private' | 'abstract' | 'async' | 'override' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static')[]
  prefix?: PrefixSuffixConfig
  selector: 'method'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('#private' | 'abstract' | 'override' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static')[]
  prefix?: PrefixSuffixConfig
  selector: 'classProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'class'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeLike'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'override' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static')[]
  prefix?: PrefixSuffixConfig
  selector: 'accessor'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('async' | 'const' | 'destructured' | 'exported' | 'global' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'variable'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('async' | 'exported' | 'global' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'function'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('async' | 'public' | 'requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'objectLiteralMethod'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('async' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'variableLike'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('default' | 'namespace')[]
  prefix?: PrefixSuffixConfig
  selector: 'import'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('destructured' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'parameter'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'enum'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'interface'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeAlias'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('private' | 'protected' | 'public' | 'readonly')[]
  prefix?: PrefixSuffixConfig
  selector: 'parameterProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('public' | 'readonly' | 'requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('public' | 'requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'objectLiteralProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('public' | 'requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeMethod'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'enumMember'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (MatchRegexConfig | string)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeParameter'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
})[]

interface MatchRegexConfig {
  match: boolean
  regex: string
}

export type NamingConventionRuleOptions = Schema0
