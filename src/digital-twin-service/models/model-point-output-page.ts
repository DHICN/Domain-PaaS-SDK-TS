/* eslint-disable */
/**
 * digital-twin-service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ModelPointOutput } from './model-point-output'

/**
 *
 * @export
 * @interface ModelPointOutputPage
 */
export interface ModelPointOutputPage {
  /**
   *
   * @type {number}
   * @memberof ModelPointOutputPage
   */
  pageIndex?: number
  /**
   *
   * @type {number}
   * @memberof ModelPointOutputPage
   */
  pageSize?: number
  /**
   *
   * @type {Array<ModelPointOutput>}
   * @memberof ModelPointOutputPage
   */
  list?: Array<ModelPointOutput> | null
  /**
   *
   * @type {number}
   * @memberof ModelPointOutputPage
   */
  totalCount?: number
  /**
   *
   * @type {number}
   * @memberof ModelPointOutputPage
   */
  totalPages?: number
  /**
   *
   * @type {boolean}
   * @memberof ModelPointOutputPage
   */
  haveNextPage?: boolean
}
