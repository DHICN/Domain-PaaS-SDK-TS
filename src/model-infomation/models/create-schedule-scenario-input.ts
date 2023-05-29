/* eslint-disable */
/**
 * model-information-service
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
 * @interface CreateScheduleScenarioInput
 */
export interface CreateScheduleScenarioInput {
  /**
   * 父方案（预报方案）ID parent scenario (forecast scenario) id
   * @type {string}
   * @memberof CreateScheduleScenarioInput
   */
  parentScenarioId?: string
  /**
   * 方案名称 scenario name
   * @type {string}
   * @memberof CreateScheduleScenarioInput
   */
  newScenarioName?: string | null
  /**
   * 方案描述 scenario description
   * @type {string}
   * @memberof CreateScheduleScenarioInput
   */
  description?: string | null
}
