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
 * @interface M2DByRangeTimeInput
 */
export interface M2DByRangeTimeInput {
  /**
   * 方案的ID scenario’s ID
   * @type {string}
   * @memberof M2DByRangeTimeInput
   */
  scenarioId: string
  /**
   * 查询结果的时间频率 time frequency used to get result
   * @type {number}
   * @memberof M2DByRangeTimeInput
   */
  frequency: number
  /**
   * 查询结果的开始时刻 start time used to get result
   * @type {string}
   * @memberof M2DByRangeTimeInput
   */
  startTime: string
  /**
   * 查询结果的结束时刻 end time used to get result
   * @type {string}
   * @memberof M2DByRangeTimeInput
   */
  endTime: string
  /**
   * 搜索的网格编号列表，查询上限1000个 search ids, max input: 1000 elements
   * @type {Array<string>}
   * @memberof M2DByRangeTimeInput
   */
  elementIds: Array<string>
}
