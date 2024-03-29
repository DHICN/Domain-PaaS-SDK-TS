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
 * @interface RiverWaterLevel
 */
export interface RiverWaterLevel {
  /**
   * 计算点里程 point chainage
   * @type {number}
   * @memberof RiverWaterLevel
   */
  chainage?: number
  /**
   * 计算点上的水位 water level at the point
   * @type {number}
   * @memberof RiverWaterLevel
   */
  waterLevel?: number
}
