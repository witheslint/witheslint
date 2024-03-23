type Schema0 = ({
  case?: ('camelCase' | 'snakeCase' | 'kebabCase' | 'pascalCase')
  ignore?: any[]
} | {
  cases?: {
    camelCase?: boolean
    snakeCase?: boolean
    kebabCase?: boolean
    pascalCase?: boolean
  }
  ignore?: any[]
})

export type FilenameCaseRuleOptions = [Schema0]
