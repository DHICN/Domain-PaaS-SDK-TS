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

// May contain unused imports in some cases
// @ts-ignore
import { DaConditionDto } from './da-condition-dto'

/**
 *
 * @export
 * @interface SaveDaConditionInput
 */
export interface SaveDaConditionInput {
  /**
   * 方案Id scenario id
   * @type {string}
   * @memberof SaveDaConditionInput
   */
  scenarioId: string
  /**
   * 实时校正点数据 DA condition data
   * @type {Array<DaConditionDto>}
   * @memberof SaveDaConditionInput
   */
  daConditions: Array<DaConditionDto>
}
