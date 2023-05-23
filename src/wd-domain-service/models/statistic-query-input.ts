/* eslint-disable */
/**
 * wd-domain-service
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
 * @interface StatisticQueryInput
 */
export interface StatisticQueryInput {
  /**
   * 开始时间
   * @type {string}
   * @memberof StatisticQueryInput
   */
  startTime?: string
  /**
   * 结束时间
   * @type {string}
   * @memberof StatisticQueryInput
   */
  endTime?: string
  /**
   * 统计类型,支持多查询
   * @type {Array<number>}
   * @memberof StatisticQueryInput
   */
  statisticTypes: Array<StatisticQueryInputStatisticTypesEnum>
  /**
   * 0-Daily 1-Month 2-Year
   * @type {number}
   * @memberof StatisticQueryInput
   */
  period: StatisticQueryInputPeriodEnum
}

export const StatisticQueryInputStatisticTypesEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
  3: 3 as number,
  4: 4 as number,
  5: 5 as number,
  6: 6 as number,
  7: 7 as number,
} as const

export type StatisticQueryInputStatisticTypesEnum =
  (typeof StatisticQueryInputStatisticTypesEnum)[keyof typeof StatisticQueryInputStatisticTypesEnum]
export const StatisticQueryInputPeriodEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
} as const

export type StatisticQueryInputPeriodEnum =
  (typeof StatisticQueryInputPeriodEnum)[keyof typeof StatisticQueryInputPeriodEnum]
