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
 * @interface WdIndicatorAttr
 */
export interface WdIndicatorAttr {
  /**
   * 指标
   * @type {string}
   * @memberof WdIndicatorAttr
   */
  indicator?: string | null
  /**
   * 触发数据清洗的最小值
   * @type {number}
   * @memberof WdIndicatorAttr
   */
  minClean?: number
  /**
   * 触发数据清洗的最大值
   * @type {number}
   * @memberof WdIndicatorAttr
   */
  maxClean?: number
  /**
   * 是否参与精度计算
   * @type {boolean}
   * @memberof WdIndicatorAttr
   */
  accuracyCheck?: boolean
}
