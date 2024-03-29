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
 * @interface CreateSceneScenarioInput
 */
export interface CreateSceneScenarioInput {
  /**
   * 方案名称 scenario name
   * @type {string}
   * @memberof CreateSceneScenarioInput
   */
  newScenarioName?: string | null
  /**
   * 方案开始时间 start time
   * @type {string}
   * @memberof CreateSceneScenarioInput
   */
  startTime?: string
  /**
   * 方案结束时间 end time
   * @type {string}
   * @memberof CreateSceneScenarioInput
   */
  endTime?: string
  /**
   * 方案描述 scenario description
   * @type {string}
   * @memberof CreateSceneScenarioInput
   */
  description?: string | null
}
