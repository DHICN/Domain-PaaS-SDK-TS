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
 * @interface DeviceIndicatorInput
 */
export interface DeviceIndicatorInput {
  /**
   * 设备编码,若当前项目下Indicator有重复,设备编码必传
   * @type {string}
   * @memberof DeviceIndicatorInput
   */
  deviceCode: string
  /**
   * 指标 indicator
   * @type {string}
   * @memberof DeviceIndicatorInput
   */
  indicator: string
}