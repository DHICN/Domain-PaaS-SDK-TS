/* eslint-disable */
/**
 * identity-service
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
import { TsPair1 } from './ts-pair1'

/**
 *
 * @export
 * @interface CatalysisTankOutput
 */
export interface CatalysisTankOutput {
  /**
   * 指标代码 indicator code
   * @type {string}
   * @memberof CatalysisTankOutput
   */
  code?: string | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof CatalysisTankOutput
   */
  unit?: string | null
  /**
   * 时间序列数据 time-series result
   * @type {Array<TsPair1>}
   * @memberof CatalysisTankOutput
   */
  values?: Array<TsPair1> | null
}
