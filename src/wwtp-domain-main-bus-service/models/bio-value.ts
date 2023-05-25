/* eslint-disable */
/**
 * wwtp-paas-main-bus-service
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
 * 生化区值
 * @export
 * @interface BioValue
 */
export interface BioValue {
  /**
   * 生化区名称 biochemical pool name
   * @type {string}
   * @memberof BioValue
   */
  bioName?: string | null
  /**
   * 生化池序号 biochemical pool index
   * @type {number}
   * @memberof BioValue
   */
  extInfo?: number
  /**
   * 值 value
   * @type {number}
   * @memberof BioValue
   */
  value?: number
}