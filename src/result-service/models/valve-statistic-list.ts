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
 * @interface ValveStatisticList
 */
export interface ValveStatisticList {
  /**
   * 阀门Id valve id
   * @type {string}
   * @memberof ValveStatisticList
   */
  assetID?: string | null
  /**
   * 阀门名称 valve name
   * @type {string}
   * @memberof ValveStatisticList
   */
  assetName?: string | null
  /**
   * 模型中阀门的ID modelfeature id
   * @type {string}
   * @memberof ValveStatisticList
   */
  modelFeatureId?: string | null
  /**
   * 阀门类型： valve type 0-WasteWater,1-RainWater  0-WasteWater  1-RainWater
   * @type {number}
   * @memberof ValveStatisticList
   */
  valveType?: number
  /**
   * 开关状态(0:关,1:开) switch status (0: off, 1: on)
   * @type {number}
   * @memberof ValveStatisticList
   */
  state?: number
  /**
   * 排河闸累计开启时间(min) total opening time (unit:minute)
   * @type {number}
   * @memberof ValveStatisticList
   */
  totalMinutes?: number
}
