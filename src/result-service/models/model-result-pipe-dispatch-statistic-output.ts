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
import { ModelResultPipePumpStatisticOutput } from './model-result-pipe-pump-statistic-output'
// May contain unused imports in some cases
// @ts-ignore
import { ModelResultPipeValveStatisticOutput } from './model-result-pipe-valve-statistic-output'

/**
 *
 * @export
 * @interface ModelResultPipeDispatchStatisticOutput
 */
export interface ModelResultPipeDispatchStatisticOutput {
  /**
   * 阀门信息列表 list of valve information
   * @type {Array<ModelResultPipeValveStatisticOutput>}
   * @memberof ModelResultPipeDispatchStatisticOutput
   */
  valves?: Array<ModelResultPipeValveStatisticOutput> | null
  /**
   * 泵站信息列表 list of pump information
   * @type {Array<ModelResultPipePumpStatisticOutput>}
   * @memberof ModelResultPipeDispatchStatisticOutput
   */
  pumps?: Array<ModelResultPipePumpStatisticOutput> | null
}
