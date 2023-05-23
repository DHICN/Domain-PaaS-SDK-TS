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
 * @interface AccuracyConfigDto
 */
export interface AccuracyConfigDto {
  /**
   * 精度类型
   * @type {string}
   * @memberof AccuracyConfigDto
   */
  type?: string | null
  /**
   * 精度类型-中文显示
   * @type {string}
   * @memberof AccuracyConfigDto
   */
  typeName?: string | null
  /**
   * 阈值
   * @type {number}
   * @memberof AccuracyConfigDto
   */
  threshold?: number
  /**
   * 单位
   * @type {string}
   * @memberof AccuracyConfigDto
   */
  unit?: string | null
  /**
   * 描述
   * @type {string}
   * @memberof AccuracyConfigDto
   */
  description?: string | null
  /**
   * 备注
   * @type {string}
   * @memberof AccuracyConfigDto
   */
  remark?: string | null
  /**
   *
   * @type {string}
   * @memberof AccuracyConfigDto
   */
  id?: string
}
