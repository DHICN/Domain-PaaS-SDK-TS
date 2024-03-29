/* eslint-disable */
/**
 * 方案管理服务
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
 * @interface CreateScenarioByGroupPara2
 */
export interface CreateScenarioByGroupPara2 {
  /**
   * 父方案的ID parent scenario\'s Id
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  parentScenarioId?: string | null
  /**
   * 方案组ID scenario\'s group Id
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  groupId?: string | null
  /**
   * 方案名称 scenario name
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  newScenarioName?: string | null
  /**
   * 模型开始时刻 model start time
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  startTime?: string
  /**
   * 模型结束时刻 model end time
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  endTime?: string
  /**
   * 方案的子类型 scenario subtype
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  subType?: string | null
  /**
   * 方案描述 scenario description
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  description?: string | null
  /**
   *
   * @type {string}
   * @memberof CreateScenarioByGroupPara2
   */
  attributes?: string | null
}
