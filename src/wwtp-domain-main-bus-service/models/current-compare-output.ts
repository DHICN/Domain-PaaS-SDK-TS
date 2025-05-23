/* eslint-disable */
/**
 * 污水业务中台领域服务-v4
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
 * @interface CurrentCompareOutput
 */
export interface CurrentCompareOutput {
  /**
   * 系统点位代码 point code
   * @type {string}
   * @memberof CurrentCompareOutput
   */
  code?: string | null
  /**
   * 系统点位名称 point name
   * @type {string}
   * @memberof CurrentCompareOutput
   */
  name?: string | null
  /**
   * 数值单位 unit of the value
   * @type {string}
   * @memberof CurrentCompareOutput
   */
  unit?: string | null
  /**
   * 在线数据 online data
   * @type {number}
   * @memberof CurrentCompareOutput
   */
  realData?: number
  /**
   * 模拟数据 model result data
   * @type {number}
   * @memberof CurrentCompareOutput
   */
  modelData?: number
  /**
   * 是否开启自动模式
   * @type {boolean}
   * @memberof CurrentCompareOutput
   */
  isAutoControl?: boolean
}
