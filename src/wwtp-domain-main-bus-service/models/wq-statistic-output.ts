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
import { StatisticData } from './statistic-data'

/**
 *
 * @export
 * @interface WqStatisticOutput
 */
export interface WqStatisticOutput {
  /**
   * 生化池名称 biochemical pool name
   * @type {string}
   * @memberof WqStatisticOutput
   */
  bioChemicalTank?: string | null
  /**
   * 统计数据 statistic data
   * @type {Array<StatisticData>}
   * @memberof WqStatisticOutput
   */
  data?: Array<StatisticData> | null
}
