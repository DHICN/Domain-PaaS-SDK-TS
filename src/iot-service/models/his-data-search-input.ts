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
 * 历史数据搜索
 * @export
 * @interface HisDataSearchInput
 */
export interface HisDataSearchInput {
  /**
   * 是否查询实测历史数据
   * @type {boolean}
   * @memberof HisDataSearchInput
   */
  isSearchMeasure: boolean
  /**
   * 是否查询模拟历史数据
   * @type {boolean}
   * @memberof HisDataSearchInput
   */
  isSearchSimul: boolean
  /**
   * 模拟场景,如:real-time-simulation-and-prediction-of-water-distribution(配水实时与预测),若IsSearchSimul为true,此字段必填
   * @type {string}
   * @memberof HisDataSearchInput
   */
  simulScene?: string | null
  /**
   * 指标 indicator
   * @type {string}
   * @memberof HisDataSearchInput
   */
  indicator: string
  /**
   * 查询开始时间 start time
   * @type {string}
   * @memberof HisDataSearchInput
   */
  startTs: string
  /**
   * 查询结束时间 end time
   * @type {string}
   * @memberof HisDataSearchInput
   */
  endTs: string
  /**
   * 排序方式，ASC (升序)，DESC (降序) sort order, ASC (ASCENDING) or DESC (DESCENDING);默认是降序DESC
   * @type {string}
   * @memberof HisDataSearchInput
   */
  orderBy?: string | null
}
