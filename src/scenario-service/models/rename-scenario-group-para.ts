/* eslint-disable */
/**
 * scenario-manager-service
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
 * @interface RenameScenarioGroupPara
 */
export interface RenameScenarioGroupPara {
  /**
   * 方案组ID the scenario group\'s Id
   * @type {string}
   * @memberof RenameScenarioGroupPara
   */
  oldScenarioGroupId?: string | null
  /**
   * 新的方案组名称 new scenario group name
   * @type {string}
   * @memberof RenameScenarioGroupPara
   */
  newGroupName?: string | null
}
