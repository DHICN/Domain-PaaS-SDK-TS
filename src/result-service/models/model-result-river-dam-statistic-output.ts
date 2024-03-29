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
 * 河网坝运行统计
 * @export
 * @interface ModelResultRiverDamStatisticOutput
 */
export interface ModelResultRiverDamStatisticOutput {
  /**
   * 坝id dam id
   * @type {string}
   * @memberof ModelResultRiverDamStatisticOutput
   */
  assetID?: string | null
  /**
   * 坝名称 dam name
   * @type {string}
   * @memberof ModelResultRiverDamStatisticOutput
   */
  assetName?: string | null
  /**
   * 最高控制水位 maximum control water level
   * @type {number}
   * @memberof ModelResultRiverDamStatisticOutput
   */
  maxWaterLevel?: number
  /**
   * 最低控制水位 Minimum control water level
   * @type {number}
   * @memberof ModelResultRiverDamStatisticOutput
   */
  minWaterLevel?: number
}
