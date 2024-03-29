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
 * @interface WqStatistic
 */
export interface WqStatistic {
  /**
   * 水质项 water quality item
   * @type {string}
   * @memberof WqStatistic
   */
  wqItem?: string | null
  /**
   * 最大值 max value
   * @type {number}
   * @memberof WqStatistic
   */
  wqItemMaxValue?: number
  /**
   * 达标率 compliance rate
   * @type {number}
   * @memberof WqStatistic
   */
  controlRate?: number
}
