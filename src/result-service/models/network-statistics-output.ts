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
import { OverflowStatisticsItem } from './overflow-statistics-item'

/**
 *
 * @export
 * @interface NetworkStatisticsOutput
 */
export interface NetworkStatisticsOutput {
  /**
   *
   * @type {OverflowStatisticsItem}
   * @memberof NetworkStatisticsOutput
   */
  rainPipeOverflow?: OverflowStatisticsItem
  /**
   *
   * @type {OverflowStatisticsItem}
   * @memberof NetworkStatisticsOutput
   */
  sewagePipeOverflow?: OverflowStatisticsItem
}
