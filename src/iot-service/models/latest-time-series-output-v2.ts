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
 * @interface LatestTimeSeriesOutputV2
 */
export interface LatestTimeSeriesOutputV2 {
  /**
   * 设备ID device id
   * @type {string}
   * @memberof LatestTimeSeriesOutputV2
   */
  deviceId: string
  /**
   * 指标 indicators
   * @type {string}
   * @memberof LatestTimeSeriesOutputV2
   */
  indicator?: string | null
  /**
   * 时间 time
   * @type {string}
   * @memberof LatestTimeSeriesOutputV2
   */
  t?: string | null
  /**
   * 数值 value
   * @type {string}
   * @memberof LatestTimeSeriesOutputV2
   */
  v?: string | null
}
