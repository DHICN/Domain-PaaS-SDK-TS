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
import { WqStatistic } from './wq-statistic'

/**
 * 河网断面达标率调度统计
 * @export
 * @interface ModelResultRiverQualifiedStatisticOutput
 */
export interface ModelResultRiverQualifiedStatisticOutput {
  /**
   * 断面id section id
   * @type {string}
   * @memberof ModelResultRiverQualifiedStatisticOutput
   */
  assetID?: string | null
  /**
   * 断面名称 section name
   * @type {string}
   * @memberof ModelResultRiverQualifiedStatisticOutput
   */
  assetName?: string | null
  /**
   * 考核断面（河道名，里程） assessment section
   * @type {string}
   * @memberof ModelResultRiverQualifiedStatisticOutput
   */
  keySectionLocation?: string | null
  /**
   * 水质最大值列表 list of water quality maximums
   * @type {Array<WqStatistic>}
   * @memberof ModelResultRiverQualifiedStatisticOutput
   */
  wqInfos?: Array<WqStatistic> | null
}
