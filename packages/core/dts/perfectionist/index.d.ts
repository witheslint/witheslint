import type { SortArrayIncludesRuleOptions } from './rules/sort-array-includes'
import type { SortAstroAttributesRuleOptions } from './rules/sort-astro-attributes'
import type { SortClassesRuleOptions } from './rules/sort-classes'
import type { SortEnumsRuleOptions } from './rules/sort-enums'
import type { SortExportsRuleOptions } from './rules/sort-exports'
import type { SortImportsRuleOptions } from './rules/sort-imports'
import type { SortInterfacesRuleOptions } from './rules/sort-interfaces'
import type { SortJsxPropsRuleOptions } from './rules/sort-jsx-props'
import type { SortMapsRuleOptions } from './rules/sort-maps'
import type { SortNamedExportsRuleOptions } from './rules/sort-named-exports'
import type { SortNamedImportsRuleOptions } from './rules/sort-named-imports'
import type { SortObjectTypesRuleOptions } from './rules/sort-object-types'
import type { SortObjectsRuleOptions } from './rules/sort-objects'
import type { SortSvelteAttributesRuleOptions } from './rules/sort-svelte-attributes'
import type { SortUnionTypesRuleOptions } from './rules/sort-union-types'
import type { SortVueAttributesRuleOptions } from './rules/sort-vue-attributes'

export interface RuleOptions {
  /**
   * enforce sorted arrays before include method
   *
   * @see [sort-array-includes](https://eslint-plugin-perfectionist.azat.io/rules/sort-array-includes)
   */
  'perfectionist/sort-array-includes': SortArrayIncludesRuleOptions

  /**
   * enforce sorted Astro attributes
   *
   * @see [sort-astro-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-astro-attributes)
   */
  'perfectionist/sort-astro-attributes': SortAstroAttributesRuleOptions

  /**
   * enforce sorted classes
   *
   * @see [sort-classes](https://eslint-plugin-perfectionist.azat.io/rules/sort-classes)
   */
  'perfectionist/sort-classes': SortClassesRuleOptions

  /**
   * enforce sorted TypeScript enums
   *
   * @see [sort-enums](https://eslint-plugin-perfectionist.azat.io/rules/sort-enums)
   */
  'perfectionist/sort-enums': SortEnumsRuleOptions

  /**
   * enforce sorted exports
   *
   * @see [sort-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-exports)
   */
  'perfectionist/sort-exports': SortExportsRuleOptions

  /**
   * enforce sorted imports
   *
   * @see [sort-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-imports)
   */
  'perfectionist/sort-imports': SortImportsRuleOptions

  /**
   * enforce sorted interface properties
   *
   * @see [sort-interfaces](https://eslint-plugin-perfectionist.azat.io/rules/sort-interfaces)
   */
  'perfectionist/sort-interfaces': SortInterfacesRuleOptions

  /**
   * enforce sorted JSX props
   *
   * @see [sort-jsx-props](https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props)
   */
  'perfectionist/sort-jsx-props': SortJsxPropsRuleOptions

  /**
   * enforce sorted Map elements
   *
   * @see [sort-maps](https://eslint-plugin-perfectionist.azat.io/rules/sort-maps)
   */
  'perfectionist/sort-maps': SortMapsRuleOptions

  /**
   * enforce sorted named exports
   *
   * @see [sort-named-exports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-exports)
   */
  'perfectionist/sort-named-exports': SortNamedExportsRuleOptions

  /**
   * enforce sorted named imports
   *
   * @see [sort-named-imports](https://eslint-plugin-perfectionist.azat.io/rules/sort-named-imports)
   */
  'perfectionist/sort-named-imports': SortNamedImportsRuleOptions

  /**
   * enforce sorted object types
   *
   * @see [sort-object-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types)
   */
  'perfectionist/sort-object-types': SortObjectTypesRuleOptions

  /**
   * enforce sorted objects
   *
   * @see [sort-objects](https://eslint-plugin-perfectionist.azat.io/rules/sort-objects)
   */
  'perfectionist/sort-objects': SortObjectsRuleOptions

  /**
   * enforce sorted Svelte attributes
   *
   * @see [sort-svelte-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-svelte-attributes)
   */
  'perfectionist/sort-svelte-attributes': SortSvelteAttributesRuleOptions

  /**
   * enforce sorted union types
   *
   * @see [sort-union-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-union-types)
   */
  'perfectionist/sort-union-types': SortUnionTypesRuleOptions

  /**
   * enforce sorted Vue attributes
   *
   * @see [sort-vue-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-vue-attributes)
   */
  'perfectionist/sort-vue-attributes': SortVueAttributesRuleOptions

}
