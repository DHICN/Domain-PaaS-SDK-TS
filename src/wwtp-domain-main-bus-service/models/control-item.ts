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
 * 控制项数据
 * @export
 * @interface ControlItem
 */
export interface ControlItem {
  /**
   * 控制项 control item name
   * @type {string}
   * @memberof ControlItem
   */
  itemName?: string | null
  /**
   * 建议值 suggested value
   * @type {number}
   * @memberof ControlItem
   */
  suggestedValue?: number
  /**
   * 时间序列值-图表显示 suggested time-series data
   * @type {Array<TsPair>}
   * @memberof ControlItem
   */
  tsData?: Array<TsPair> | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof ControlItem
   */
  unit?: string | null
}
