/* eslint-disable */
/**
 * IoT服务
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
 * @interface AddModelPointsInput
 */
export interface AddModelPointsInput {
  /**
   * 模板Id
   * @type {string}
   * @memberof AddModelPointsInput
   */
  templateId?: string
  /**
   * 模板类型，ModelTypeEnum 枚举
   * @type {string}
   * @memberof AddModelPointsInput
   */
  modelType?: string | null
  /**
   * 模型点位里的 Id
   * @type {string}
   * @memberof AddModelPointsInput
   */
  modelId?: string | null
  /**
   * 模型点位类型
   * @type {string}
   * @memberof AddModelPointsInput
   */
  modelPointType?: string | null
  /**
   * 模型点位名称
   * @type {string}
   * @memberof AddModelPointsInput
   */
  name?: string | null
}
