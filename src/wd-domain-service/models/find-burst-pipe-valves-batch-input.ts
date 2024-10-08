/* eslint-disable */
/**
 * 供水业务中台领域服务
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
import { BurstPipeValvesItem } from './burst-pipe-valves-item'

/**
 *
 * @export
 * @interface FindBurstPipeValvesBatchInput
 */
export interface FindBurstPipeValvesBatchInput {
  /**
   * 方案Id
   * @type {string}
   * @memberof FindBurstPipeValvesBatchInput
   */
  scenarioId?: string
  /**
   * 未使用的阀门
   * @type {Array<string>}
   * @memberof FindBurstPipeValvesBatchInput
   */
  unuseValves?: Array<string> | null
  /**
   * 爆管项
   * @type {Array<BurstPipeValvesItem>}
   * @memberof FindBurstPipeValvesBatchInput
   */
  items?: Array<BurstPipeValvesItem> | null
  /**
   *
   * @type {boolean}
   * @memberof FindBurstPipeValvesBatchInput
   */
  bForceRefreshCache?: boolean
}
