/* eslint-disable */
/**
 * 污水业务中台领域服务
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
import { TsPair } from './ts-pair'

/**
 *
 * @export
 * @interface CatalysisBfOutput
 */
export interface CatalysisBfOutput {
  /**
   * 指标代码 indicator code
   * @type {string}
   * @memberof CatalysisBfOutput
   */
  code?: string | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof CatalysisBfOutput
   */
  unit?: string | null
  /**
   * 催化反应前时间序列 time-series result before catalysis
   * @type {Array<TsPair>}
   * @memberof CatalysisBfOutput
   */
  valuesBefore?: Array<TsPair> | null
  /**
   * 催化反应后时间序列 time-series result after catalysis
   * @type {Array<TsPair>}
   * @memberof CatalysisBfOutput
   */
  valuesAfter?: Array<TsPair> | null
}
