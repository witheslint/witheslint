interface Schema0 {
  groups?: ('props' | 'data' | 'asyncData' | 'computed' | 'methods' | 'setup')[]
  deepData?: boolean
  ignorePublicMembers?: boolean
  unreferencedOptions?: ('unknownMemberAsUnreferenced' | 'returnAsUnreferenced')[]
}

export type NoUnusedPropertiesRuleOptions = [Schema0]
