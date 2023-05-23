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
 *
 * @export
 * @interface ModelResultRiverWqOutput
 */
export interface ModelResultRiverWqOutput {
  /**
   * 模型文件里元素的ID modelfeature id
   * @type {string}
   * @memberof ModelResultRiverWqOutput
   */
  modelFeatureId?: string | null
  /**
   * 水质项 water quality item
   * @type {string}
   * @memberof ModelResultRiverWqOutput
   */
  qualityCode?: string | null
  /**
   * 浓度 concentration
   * @type {Array<number>}
   * @memberof ModelResultRiverWqOutput
   */
  concentration?: Array<number> | null
}
