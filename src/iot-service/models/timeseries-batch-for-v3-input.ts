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
 * @interface TimeseriesBatchForV3Input
 */
export interface TimeseriesBatchForV3Input {
  /**
   * 设备编码,若当前项目下Indicator有重复,设备编码必传
   * @type {string}
   * @memberof TimeseriesBatchForV3Input
   */
  deviceCode?: string | null
  /**
   * 指标 indicator
   * @type {string}
   * @memberof TimeseriesBatchForV3Input
   */
  indicator: string
  /**
   * 查询开始时间 start time
   * @type {string}
   * @memberof TimeseriesBatchForV3Input
   */
  startTs: string
  /**
   * 查询结束时间 end time
   * @type {string}
   * @memberof TimeseriesBatchForV3Input
   */
  endTs: string
  /**
   * 排序方式，ASC (升序)，DESC (降序) sort order, ASC (ASCENDING) or DESC (DESCENDING);默认是降序DESC
   * @type {string}
   * @memberof TimeseriesBatchForV3Input
   */
  orderBy?: string | null
  /**
   * 抽样类型,为空时代表不抽样,按:days hours year minutes years类型抽样
   * @type {string}
   * @memberof TimeseriesBatchForV3Input
   */
  sample?: string | null
  /**
   * 抽样频率,如:sample=minutes,interval=5,表示按照5分钟进行抽样
   * @type {number}
   * @memberof TimeseriesBatchForV3Input
   */
  interval?: number
}
