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
 * @interface QueryDemandDto
 */
export interface QueryDemandDto {
  /**
   * 模型中的节点ID junction muid
   * @type {string}
   * @memberof QueryDemandDto
   */
  junctionID?: string | null
  /**
   * 需水量或需水量增量 demand or demand difference
   * @type {number}
   * @memberof QueryDemandDto
   */
  demand?: number
  /**
   * 分类 category
   * @type {string}
   * @memberof QueryDemandDto
   */
  category?: string | null
  /**
   * 系数 coefficient
   * @type {number}
   * @memberof QueryDemandDto
   */
  coefficient?: number
  /**
   * 模式ID pattern id
   * @type {string}
   * @memberof QueryDemandDto
   */
  patternID?: string | null
  /**
   * 描述 description
   * @type {string}
   * @memberof QueryDemandDto
   */
  description?: string | null
  /**
   * 需水量ID demand id
   * @type {string}
   * @memberof QueryDemandDto
   */
  id?: string
}
