/* eslint-disable */
/**
 * 污水业务中台领域服务
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
import { ScenarioModelNodeDto } from './scenario-model-node-dto'

/**
 *
 * @export
 * @interface AddProNumSimLabIndexConfigInput
 */
export interface AddProNumSimLabIndexConfigInput {
  /**
   * 指标名称
   * @type {string}
   * @memberof AddProNumSimLabIndexConfigInput
   */
  code: string
  /**
   *
   * @type {ScenarioModelNodeDto}
   * @memberof AddProNumSimLabIndexConfigInput
   */
  modelNodes: ScenarioModelNodeDto
  /**
   * 计算结果值,存入的文件名
   * @type {string}
   * @memberof AddProNumSimLabIndexConfigInput
   */
  outputFile: string
  /**
   * 去除率结果值,存入的文件名
   * @type {string}
   * @memberof AddProNumSimLabIndexConfigInput
   */
  remRateFile: string
}
