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
 * @interface StorageData
 */
export interface StorageData {
  /**
   * 时间 time
   * @type {string}
   * @memberof StorageData
   */
  dt?: string | null
  /**
   * 调蓄管道储水量 water storage capacity of regulation and storage pipeline
   * @type {number}
   * @memberof StorageData
   */
  storageVolume?: number
  /**
   * 存储率 storage rate
   * @type {number}
   * @memberof StorageData
   */
  storageRate?: number
}
