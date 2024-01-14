type Schema0 = ({
  case?: ('camelCase' | 'kebabCase' | 'pascalCase' | 'snakeCase')
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
