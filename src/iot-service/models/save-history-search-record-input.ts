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
 * @interface SaveHistorySearchRecordInput
 */
export interface SaveHistorySearchRecordInput {
  /**
   * 历史搜索条件记录
   * @type {string}
   * @memberof SaveHistorySearchRecordInput
   */
  name?: string | null
  /**
   * 是否是默认展示点位
   * @type {boolean}
   * @memberof SaveHistorySearchRecordInput
   */
  isDefault?: boolean
  /**
   * 指标编码
   * @type {string}
   * @memberof SaveHistorySearchRecordInput
   */
  indicator?: string | null
  /**
   * 是否需要查询模拟数据
   * @type {boolean}
   * @memberof SaveHistorySearchRecordInput
   */
  isSearchSimul?: boolean
  /**
   * 是否需要查询在线数据
   * @type {boolean}
   * @memberof SaveHistorySearchRecordInput
   */
  isSearchOnline?: boolean
  /**
   * 搜索条件应用场景
   * @type {string}
   * @memberof SaveHistorySearchRecordInput
   */
  scene?: string | null
}
