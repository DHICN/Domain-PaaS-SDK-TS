/* eslint-disable */
/**
 * IoT服务
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
 * @interface HistorySearchRecordOutput
 */
export interface HistorySearchRecordOutput {
  /**
   * 历史搜索条件记录
   * @type {string}
   * @memberof HistorySearchRecordOutput
   */
  name?: string | null
  /**
   * 是否是默认展示点位
   * @type {boolean}
   * @memberof HistorySearchRecordOutput
   */
  isDefault?: boolean
  /**
   * 指标编码
   * @type {string}
   * @memberof HistorySearchRecordOutput
   */
  indicator?: string | null
  /**
   * 是否需要查询模拟数据
   * @type {boolean}
   * @memberof HistorySearchRecordOutput
   */
  isSearchSimul?: boolean
  /**
   * 是否需要查询在线数据
   * @type {boolean}
   * @memberof HistorySearchRecordOutput
   */
  isSearchOnline?: boolean
  /**
   * 搜索条件应用场景
   * @type {string}
   * @memberof HistorySearchRecordOutput
   */
  scene?: string | null
}
