/* eslint-disable */
/**
 * 模型配置服务
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
 * @interface CsPumpPolicy
 */
export interface CsPumpPolicy {
  /**
   * 泵站ID pump id
   * @type {string}
   * @memberof CsPumpPolicy
   */
  pumpID?: string | null
  /**
   * 泵站开启水位 pump start water level
   * @type {number}
   * @memberof CsPumpPolicy
   */
  startLevel?: number
  /**
   * 泵站停止水位 pump stop water level
   * @type {number}
   * @memberof CsPumpPolicy
   */
  stopLevel?: number
  /**
   * 泵站能力 pump capacity
   * @type {number}
   * @memberof CsPumpPolicy
   */
  capacity?: number
}
