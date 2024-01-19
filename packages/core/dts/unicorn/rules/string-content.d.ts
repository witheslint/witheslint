interface Schema0 {
  patterns?: {
    [k: string]: (string | {
      fix?: boolean
      message?: string
      suggest: string
    })
  }
}

export type StringContentRuleOptions = [Schema0]
