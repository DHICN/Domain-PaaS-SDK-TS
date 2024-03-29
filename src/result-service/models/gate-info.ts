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
 * @interface GateInfo
 */
export interface GateInfo {
  /**
   * 闸Id gate id
   * @type {string}
   * @memberof GateInfo
   */
  assetID?: string | null
  /**
   * 闸名称 gate name
   * @type {string}
   * @memberof GateInfo
   */
  assetName?: string | null
  /**
   * 开关状态(0:关,1:开) switch status (0: off, 1: on)
   * @type {number}
   * @memberof GateInfo
   */
  state?: number
  /**
   * 开启次数 Opening times
   * @type {number}
   * @memberof GateInfo
   */
  openNum?: number
  /**
   * 开启时长，以分钟为单位 opening duration (unit:minute)
   * @type {number}
   * @memberof GateInfo
   */
  openMinutes?: number
}
