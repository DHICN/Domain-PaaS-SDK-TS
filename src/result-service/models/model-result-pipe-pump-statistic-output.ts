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

/**
 * 管网泵运行预报统计
 * @export
 * @interface ModelResultPipePumpStatisticOutput
 */
export interface ModelResultPipePumpStatisticOutput {
  /**
   * 泵站id pump id
   * @type {string}
   * @memberof ModelResultPipePumpStatisticOutput
   */
  assetID?: string | null
  /**
   * 泵站名称 pump name
   * @type {string}
   * @memberof ModelResultPipePumpStatisticOutput
   */
  assetName?: string | null
  /**
   * 总补水时长，以分钟为单位 total water make-up duration (unit:minute)
   * @type {number}
   * @memberof ModelResultPipePumpStatisticOutput
   */
  totalMinutes?: number
  /**
   * 总补水量 total make-up water
   * @type {number}
   * @memberof ModelResultPipePumpStatisticOutput
   */
  totalVolume?: number
}
