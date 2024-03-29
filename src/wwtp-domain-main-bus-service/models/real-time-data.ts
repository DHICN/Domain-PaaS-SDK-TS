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
import { TsData } from './ts-data'

/**
 *
 * @export
 * @interface RealTimeData
 */
export interface RealTimeData {
  /**
   * 毒性指标 toxicity indicator
   * @type {string}
   * @memberof RealTimeData
   */
  code?: string | null
  /**
   * 指标名称 indicator name
   * @type {string}
   * @memberof RealTimeData
   */
  name?: string | null
  /**
   * 最新值 latest value
   * @type {number}
   * @memberof RealTimeData
   */
  latestValue?: number
  /**
   * 毒性描述 toxicity description
   * @type {string}
   * @memberof RealTimeData
   */
  description?: string | null
  /**
   * 时间序列数据 time-series data
   * @type {Array<TsData>}
   * @memberof RealTimeData
   */
  tsDatas?: Array<TsData> | null
}
