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
import { GeoPointItem } from './geo-point-item'
// May contain unused imports in some cases
// @ts-ignore
import { RiverWaterLevelProfileDataItem } from './river-water-level-profile-data-item'

/**
 *
 * @export
 * @interface RiverProfile
 */
export interface RiverProfile {
  /**
   * 河道计算点列表 points of river
   * @type {Array<GeoPointItem>}
   * @memberof RiverProfile
   */
  points?: Array<GeoPointItem> | null
  /**
   * 水位时间序列数据 water level time series
   * @type {Array<RiverWaterLevelProfileDataItem>}
   * @memberof RiverProfile
   */
  waterLevelData?: Array<RiverWaterLevelProfileDataItem> | null
}
