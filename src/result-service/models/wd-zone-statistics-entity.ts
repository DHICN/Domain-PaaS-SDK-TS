/* eslint-disable */
/**
 * 模型结果服务
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
import { ZoneStatistics } from './zone-statistics'

/**
 *
 * @export
 * @interface WdZoneStatisticsEntity
 */
export interface WdZoneStatisticsEntity {
  /**
   *
   * @type {string}
   * @memberof WdZoneStatisticsEntity
   */
  resultType?: string | null
  /**
   *
   * @type {Array<ZoneStatistics>}
   * @memberof WdZoneStatisticsEntity
   */
  zoneStatistics?: Array<ZoneStatistics> | null
}
