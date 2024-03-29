/* eslint-disable */
/**
 * 模型结果服务
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
 * @interface ModelResultPipeWqInput
 */
export interface ModelResultPipeWqInput {
  /**
   * 方案id scenario id
   * @type {string}
   * @memberof ModelResultPipeWqInput
   */
  scenarioId?: string | null
  /**
   * 水质 water quality item
   * @type {string}
   * @memberof ModelResultPipeWqInput
   */
  wqItem?: string | null
  /**
   * 频率 frequency
   * @type {number}
   * @memberof ModelResultPipeWqInput
   */
  frequency?: number
  /**
   * 开始时间 start time
   * @type {string}
   * @memberof ModelResultPipeWqInput
   */
  startTime?: string
  /**
   * 结束时间 end time
   * @type {string}
   * @memberof ModelResultPipeWqInput
   */
  endTime?: string
}
