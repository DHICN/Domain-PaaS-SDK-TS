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

/**
 *
 * @export
 * @interface GetOutputCostPerFlowsInput
 */
export interface GetOutputCostPerFlowsInput {
  /**
   * 模型点位编码 model node codes
   * @type {Array<string>}
   * @memberof GetOutputCostPerFlowsInput
   */
  nodeCodes: Array<string>
  /**
   * 开始时间 start time
   * @type {string}
   * @memberof GetOutputCostPerFlowsInput
   */
  sTime: string
  /**
   * 结束时间 end time
   * @type {string}
   * @memberof GetOutputCostPerFlowsInput
   */
  eTime: string
}
