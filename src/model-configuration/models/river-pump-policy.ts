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
 * @interface RiverPumpPolicy
 */
export interface RiverPumpPolicy {
  /**
   * 河道泵站ID river pump id
   * @type {string}
   * @memberof RiverPumpPolicy
   */
  pumpID?: string | null
  /**
   * 河道泵站能力 pump capacity
   * @type {number}
   * @memberof RiverPumpPolicy
   */
  capacity?: number
  /**
   * 泵站控制水位 pump control water level
   * @type {number}
   * @memberof RiverPumpPolicy
   */
  controlWL?: number
}
