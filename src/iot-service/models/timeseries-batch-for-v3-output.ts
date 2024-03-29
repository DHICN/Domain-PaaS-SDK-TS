/* eslint-disable */
/**
 * IoT服务
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
 * @interface TimeseriesBatchForV3Output
 */
export interface TimeseriesBatchForV3Output {
  /**
   *
   * @type {Array<string>}
   * @memberof TimeseriesBatchForV3Output
   */
  t?: Array<string> | null
  /**
   *
   * @type {Array<number>}
   * @memberof TimeseriesBatchForV3Output
   */
  v?: Array<number> | null
  /**
   * 设备编码,若当前项目下Indicator有重复,设备编码必传
   * @type {string}
   * @memberof TimeseriesBatchForV3Output
   */
  deviceCode?: string | null
  /**
   * 指标
   * @type {string}
   * @memberof TimeseriesBatchForV3Output
   */
  indicator?: string | null
}
