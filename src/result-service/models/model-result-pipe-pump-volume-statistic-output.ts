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
import { PumpVolume } from './pump-volume'

/**
 * 管网调蓄泵站调蓄量统计
 * @export
 * @interface ModelResultPipePumpVolumeStatisticOutput
 */
export interface ModelResultPipePumpVolumeStatisticOutput {
  /**
   * 资产名称 asset name
   * @type {string}
   * @memberof ModelResultPipePumpVolumeStatisticOutput
   */
  assetName?: string | null
  /**
   * 调蓄泵站信息 information of regulation and storage pump
   * @type {Array<PumpVolume>}
   * @memberof ModelResultPipePumpVolumeStatisticOutput
   */
  pumpTS?: Array<PumpVolume> | null
}
