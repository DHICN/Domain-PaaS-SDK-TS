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
 * @interface DeviceKeysOutput
 */
export interface DeviceKeysOutput {
  /**
   * 设备Id device id
   * @type {string}
   * @memberof DeviceKeysOutput
   */
  deviceId?: string
  /**
   * 设备指标 device indicators
   * @type {Array<string>}
   * @memberof DeviceKeysOutput
   */
  keys?: Array<string> | null
}
