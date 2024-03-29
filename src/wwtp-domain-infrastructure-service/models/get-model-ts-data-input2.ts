/* eslint-disable */
/**
 * 污水业务中台基础服务
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
import { CodeAssembly } from './code-assembly'

/**
 *
 * @export
 * @interface GetModelTsDataInput2
 */
export interface GetModelTsDataInput2 {
  /**
   *
   * @type {string}
   * @memberof GetModelTsDataInput2
   */
  scenarioId: string
  /**
   * 开始时间 start time
   * @type {string}
   * @memberof GetModelTsDataInput2
   */
  startTime?: string
  /**
   * 结束时间 end time
   * @type {string}
   * @memberof GetModelTsDataInput2
   */
  endTime?: string
  /**
   * 模型点位信息 model node codes
   * @type {Array<CodeAssembly>}
   * @memberof GetModelTsDataInput2
   */
  codeAssemblys: Array<CodeAssembly>
}
