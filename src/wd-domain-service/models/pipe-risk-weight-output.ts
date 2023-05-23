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
 * 爆管风险权重信息
 * @export
 * @interface PipeRiskWeightOutput
 */
export interface PipeRiskWeightOutput {
  /**
   *
   * @type {string}
   * @memberof PipeRiskWeightOutput
   */
  id?: string | null
  /**
   * 参数名
   * @type {string}
   * @memberof PipeRiskWeightOutput
   */
  weightFactorName?: string | null
  /**
   * 权重
   * @type {number}
   * @memberof PipeRiskWeightOutput
   */
  weight?: number
  /**
   *
   * @type {string}
   * @memberof PipeRiskWeightOutput
   */
  pipeField?: string | null
}
