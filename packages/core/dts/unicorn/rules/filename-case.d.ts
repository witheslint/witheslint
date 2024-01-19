type Schema0 = ({
  case?: ('camelCase' | 'snakeCase' | 'kebabCase' | 'pascalCase')
  ignore?: any[]
} | {
  cases?: {
    camelCase?: boolean
    kebabCase?: boolean
    pascalCase?: boolean
    snakeCase?: boolean
  }
  ignore?: any[]
})

export type FilenameCaseRuleOptions = [Schema0]
