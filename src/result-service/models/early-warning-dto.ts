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
 * 预警信息
 * @export
 * @interface EarlyWarningDto
 */
export interface EarlyWarningDto {
  /**
   * 模型中的Id
   * @type {string}
   * @memberof EarlyWarningDto
   */
  modelFeatureId?: string | null
  /**
   * 显示的name
   * @type {string}
   * @memberof EarlyWarningDto
   */
  showName?: string | null
  /**
   * 初始值
   * @type {number}
   * @memberof EarlyWarningDto
   */
  initValue?: number
  /**
   * 预测最大值
   * @type {number}
   * @memberof EarlyWarningDto
   */
  measureMaxValue?: number
  /**
   * 指标最大值
   * @type {number}
   * @memberof EarlyWarningDto
   */
  maxValue?: number
  /**
   * 最大值出现时刻
   * @type {string}
   * @memberof EarlyWarningDto
   */
  measureMaxValueTime?: string
}
