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
 * @interface ValveStatisticsOutput
 */
export interface ValveStatisticsOutput {
  /**
   * 阀门ID valve id
   * @type {string}
   * @memberof ValveStatisticsOutput
   */
  valveID?: string | null
  /**
   * 累计开启时长（单位：分钟） accumulated open time(unit: minute)
   * @type {number}
   * @memberof ValveStatisticsOutput
   */
  accOpenTime?: number
  /**
   * 总流量
   * @type {number}
   * @memberof ValveStatisticsOutput
   */
  accDischarge?: number
}
