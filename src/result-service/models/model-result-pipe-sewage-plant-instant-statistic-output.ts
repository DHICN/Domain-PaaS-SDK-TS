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
import { WqInstantStatisticInfo } from './wq-instant-statistic-info'

/**
 * 污水处理厂瞬时浓度统计
 * @export
 * @interface ModelResultPipeSewagePlantInstantStatisticOutput
 */
export interface ModelResultPipeSewagePlantInstantStatisticOutput {
  /**
   * 资产id asset id
   * @type {string}
   * @memberof ModelResultPipeSewagePlantInstantStatisticOutput
   */
  assetID?: string | null
  /**
   * 污水处理厂名称 asset name
   * @type {string}
   * @memberof ModelResultPipeSewagePlantInstantStatisticOutput
   */
  assetName?: string | null
  /**
   * 瞬时浓度列表 list of instantaneous concentrations
   * @type {Array<WqInstantStatisticInfo>}
   * @memberof ModelResultPipeSewagePlantInstantStatisticOutput
   */
  wqStatisticInfos?: Array<WqInstantStatisticInfo> | null
}
