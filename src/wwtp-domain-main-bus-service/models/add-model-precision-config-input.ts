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

/**
 *
 * @export
 * @interface AddModelPrecisionConfigInput
 */
export interface AddModelPrecisionConfigInput {
  /**
   * 百分比区间名称,如:80-100(优秀) precision region name
   * @type {string}
   * @memberof AddModelPrecisionConfigInput
   */
  regionName?: string | null
  /**
   * 百分比区间推荐:如:>70 precison region recommended proportion
   * @type {string}
   * @memberof AddModelPrecisionConfigInput
   */
  recProbability?: string | null
  /**
   * 百分比区间开始,如:80 precision region start value
   * @type {number}
   * @memberof AddModelPrecisionConfigInput
   */
  regionSValue?: number
  /**
   * 百分比区间截止,如:100 precision region end value
   * @type {number}
   * @memberof AddModelPrecisionConfigInput
   */
  regionEValue?: number
  /**
   * 排序号,越小越靠前 precision region index
   * @type {number}
   * @memberof AddModelPrecisionConfigInput
   */
  sort?: number
  /**
   * 指标 system point code
   * @type {string}
   * @memberof AddModelPrecisionConfigInput
   */
  code?: string | null
}
