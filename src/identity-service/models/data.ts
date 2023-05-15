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
import { CostData } from './cost-data'

/**
 *
 * @export
 * @interface Data
 */
export interface Data {
  /**
   * 工艺线代码 product line code
   * @type {string}
   * @memberof Data
   */
  productLine?: string | null
  /**
   * 与上一周对比的增长率，若为负数，则表示降低了 raise ratio compared to last week
   * @type {number}
   * @memberof Data
   */
  raiseRatio?: number | null
  /**
   * 一周中每天的吨水药耗 dosage cost per ton water of each day
   * @type {Array<CostData>}
   * @memberof Data
   */
  costDatas?: Array<CostData> | null
}
