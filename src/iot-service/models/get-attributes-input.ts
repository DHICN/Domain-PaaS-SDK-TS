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
 * @interface GetAttributesInput
 */
export interface GetAttributesInput {
  /**
   * 设备ID device id
   * @type {string}
   * @memberof GetAttributesInput
   */
  deviceId: string
  /**
   * 属性的键 device attribute keys
   * @type {Array<string>}
   * @memberof GetAttributesInput
   */
  attributeKeys?: Array<string> | null
}
