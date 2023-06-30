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
import { Int32DoubleKeyValue } from './int32-double-key-value'
// May contain unused imports in some cases
// @ts-ignore
import { Int32ModelPipeInfoListKeyValue } from './int32-model-pipe-info-list-key-value'

/**
 *
 * @export
 * @interface PipeRiskResult
 */
export interface PipeRiskResult {
  /**
   * 计算时间
   * @type {string}
   * @memberof PipeRiskResult
   */
  calculateTime?: string
  /**
   * 全管网模型ID列表
   * @type {Array<string>}
   * @memberof PipeRiskResult
   */
  iDs?: Array<string> | null
  /**
   * 全管网的风险结果
   * @type {Array<number>}
   * @memberof PipeRiskResult
   */
  data?: Array<number> | null
  /**
   * 管道风险分级列表
   * @type {Array<Int32ModelPipeInfoListKeyValue>}
   * @memberof PipeRiskResult
   */
  classifyPipes?: Array<Int32ModelPipeInfoListKeyValue> | null
  /**
   * 各风险等级管道长度所占全管道长度比例
   * @type {Array<Int32DoubleKeyValue>}
   * @memberof PipeRiskResult
   */
  lengthPercent?: Array<Int32DoubleKeyValue> | null
}
