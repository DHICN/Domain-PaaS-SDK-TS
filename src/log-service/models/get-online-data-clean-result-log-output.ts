/* eslint-disable */
/**
 * 日志服务
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
import { OnlineDataCleanResultInfo } from './online-data-clean-result-info'

/**
 *
 * @export
 * @interface GetOnlineDataCleanResultLogOutput
 */
export interface GetOnlineDataCleanResultLogOutput {
  /**
   * clean log start time
   * @type {string}
   * @memberof GetOnlineDataCleanResultLogOutput
   */
  startTime?: string
  /**
   * clean log end time
   * @type {string}
   * @memberof GetOnlineDataCleanResultLogOutput
   */
  endTime?: string
  /**
   * point code name
   * @type {string}
   * @memberof GetOnlineDataCleanResultLogOutput
   */
  pointCode?: string | null
  /**
   * clean result information
   * @type {Array<OnlineDataCleanResultInfo>}
   * @memberof GetOnlineDataCleanResultLogOutput
   */
  resultInfos?: Array<OnlineDataCleanResultInfo> | null
}
