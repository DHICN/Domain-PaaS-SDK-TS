/* eslint-disable */
/**
 * 香港污水厂项目测试
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
 * @interface EnergyCostOutput
 */
export interface EnergyCostOutput {
  /**
   * 工艺线代码 product line code
   * @type {string}
   * @memberof EnergyCostOutput
   */
  productLine?: string | null
  /**
   * 过去七天总的吨水能耗 total energy cost per ton of water in the last seven days
   * @type {number}
   * @memberof EnergyCostOutput
   */
  totalEnergyCostPerTon?: number
  /**
   * 与上一周对比的增长率，若为负数，则表示降低了 raise ratio compared to last week
   * @type {number}
   * @memberof EnergyCostOutput
   */
  raiseRatio?: number | null
  /**
   * 一周中每天的吨水能耗 energy cost per ton water of each day
   * @type {Array<CostData>}
   * @memberof EnergyCostOutput
   */
  costDatas?: Array<CostData> | null
}
