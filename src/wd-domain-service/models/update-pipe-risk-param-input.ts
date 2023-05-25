/* eslint-disable */
/**
 * wd-domain-service
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
 * @interface UpdatePipeRiskParamInput
 */
export interface UpdatePipeRiskParamInput {
  /**
   *
   * @type {string}
   * @memberof UpdatePipeRiskParamInput
   */
  id: string
  /**
   * 关联权重表Id
   * @type {string}
   * @memberof UpdatePipeRiskParamInput
   */
  riskWeightId: string
  /**
   * 参数分类信息
   * @type {string}
   * @memberof UpdatePipeRiskParamInput
   */
  paramGrade: string
  /**
   * 是否范围值
   * @type {boolean}
   * @memberof UpdatePipeRiskParamInput
   */
  isRange: boolean
  /**
   * 最大值
   * @type {number}
   * @memberof UpdatePipeRiskParamInput
   */
  maxValve: number
  /**
   * 最小值
   * @type {number}
   * @memberof UpdatePipeRiskParamInput
   */
  minValve: number
  /**
   * 可能性程度值
   * @type {number}
   * @memberof UpdatePipeRiskParamInput
   */
  levelValue: number
  /**
   * 排序
   * @type {number}
   * @memberof UpdatePipeRiskParamInput
   */
  order?: number
}