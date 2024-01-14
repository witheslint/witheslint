interface Schema0 {
/**
 * Allows specified method names to be ignored with this rule
 */
  exceptMethods?: string[]
  /**
   * Enforces that functions used as instance field initializers utilize `this`
   */
  enforceForClassFields?: boolean
  /**
   * Ingore members marked with the `override` modifier
   */
  ignoreOverrideMethods?: boolean
  /**
   * Ignore classes that specifically implement some interface
   */
  ignoreClassesThatImplementAnInterface?: ('public-fields' | boolean)
}

export type ClassMethodsUseThisRuleOptions = [Schema0]