type Schema0 = ({
  maximum?: {
    [k: string]: any
    multi?: number
    single?: number
  }
} | {
  maximum?: number
  when?: ('always' | 'multiline')
})

export type JsxMaxPropsPerLineRuleOptions = [Schema0]
