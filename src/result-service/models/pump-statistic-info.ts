/* eslint-disable */
/**
 * result-analysis-service
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
import { PumpInfo } from './pump-info'

/**
 *
 * @export
 * @interface PumpStatisticInfo
 */
export interface PumpStatisticInfo {
  /**
   * 时间 time
   * @type {string}
   * @memberof PumpStatisticInfo
   */
  dt?: string | null
  /**
   * 泵站信息详情  pump details
   * @type {Array<PumpInfo>}
   * @memberof PumpStatisticInfo
   */
  pumpInfos?: Array<PumpInfo> | null
}
