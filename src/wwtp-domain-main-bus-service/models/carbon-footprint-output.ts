/* eslint-disable */
/**
 * 污水业务中台领域服务-v4
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface CarbonFootprintOutput
 */
export interface CarbonFootprintOutput {
  /**
   * 指标显示名 indicator show name
   * @type {string}
   * @memberof CarbonFootprintOutput
   */
  showName?: string | null
  /**
   * 上月的实测值 Last month\'s measured value
   * @type {number}
   * @memberof CarbonFootprintOutput
   */
  lastMonthMeasure?: number
  /**
   * 本月预测值 This month\'s forecast value
   * @type {number}
   * @memberof CarbonFootprintOutput
   */
  currentMonthForecast?: number
  /**
   * 单位
   * @type {string}
   * @memberof CarbonFootprintOutput
   */
  unit?: string | null
}