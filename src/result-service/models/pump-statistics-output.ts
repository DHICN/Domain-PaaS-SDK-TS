/* eslint-disable */
/**
 * 模型结果服务
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
 * @interface PumpStatisticsOutput
 */
export interface PumpStatisticsOutput {
  /**
   * 泵站ID pump id
   * @type {string}
   * @memberof PumpStatisticsOutput
   */
  pumpID?: string | null
  /**
   * 累计流量（单位：m3） accumulated discharge (unit: m3)
   * @type {number}
   * @memberof PumpStatisticsOutput
   */
  accDischarge?: number
  /**
   * 累计开启时长（单位：分钟） accumulated open time(unit: minute)
   * @type {number}
   * @memberof PumpStatisticsOutput
   */
  accOpenTime?: number
}
