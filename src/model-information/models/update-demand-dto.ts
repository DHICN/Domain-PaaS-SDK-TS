/* eslint-disable */
/**
 * 模型编辑服务
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
 * @interface UpdateDemandDto
 */
export interface UpdateDemandDto {
  /**
   * 模型中的节点ID junction muid
   * @type {string}
   * @memberof UpdateDemandDto
   */
  junctionID?: string | null
  /**
   * 需水量或需水量增量 demand or demand difference
   * @type {number}
   * @memberof UpdateDemandDto
   */
  demand?: number
  /**
   * 分类 category
   * @type {string}
   * @memberof UpdateDemandDto
   */
  category?: string | null
  /**
   * 系数 coefficient
   * @type {number}
   * @memberof UpdateDemandDto
   */
  coefficient?: number
  /**
   * 模式ID pattern id
   * @type {string}
   * @memberof UpdateDemandDto
   */
  patternID?: string | null
  /**
   * 描述 description
   * @type {string}
   * @memberof UpdateDemandDto
   */
  description?: string | null
  /**
   * 需水量ID demand id
   * @type {string}
   * @memberof UpdateDemandDto
   */
  id?: string
}
