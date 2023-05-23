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
 * 管网水质结果
 * @export
 * @interface ModelResultPipeWQsOutput
 */
export interface ModelResultPipeWQsOutput {
  /**
   * 时刻列表 time steps, in string
   * @type {Array<string>}
   * @memberof ModelResultPipeWQsOutput
   */
  time?: Array<string> | null
  /**
   *
   * @type {Array<string>}
   * @memberof ModelResultPipeWQsOutput
   */
  iDs?: Array<string> | null
  /**
   * 水质 water quality item
   * @type {string}
   * @memberof ModelResultPipeWQsOutput
   */
  wqItem?: string | null
  /**
   * 浓度 Concentrations
   * @type {Array<Array<number>>}
   * @memberof ModelResultPipeWQsOutput
   */
  concentration?: Array<Array<number>> | null
}
