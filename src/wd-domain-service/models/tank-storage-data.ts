/* eslint-disable */
/**
 * wd-domain-service
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
 * @interface TankStorageData
 */
export interface TankStorageData {
  /**
   * 水池水厂名称
   * @type {string}
   * @memberof TankStorageData
   */
  tankName?: string | null
  /**
   * 可调蓄量
   * @type {number}
   * @memberof TankStorageData
   */
  storageValue?: number
  /**
   * 总调蓄量
   * @type {number}
   * @memberof TankStorageData
   */
  totalStorageValue?: number
}
