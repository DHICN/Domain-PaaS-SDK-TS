/* eslint-disable */
/**
 * 污水业务中台领域服务
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
 * @interface DosingStatisticMonthlysInOut
 */
export interface DosingStatisticMonthlysInOut {
  /**
   * 统计数据ID data id
   * @type {string}
   * @memberof DosingStatisticMonthlysInOut
   */
  id?: string
  /**
   * 统计编码 statistic code
   * @type {string}
   * @memberof DosingStatisticMonthlysInOut
   */
  statisticCode?: string | null
  /**
   * 时间 time
   * @type {string}
   * @memberof DosingStatisticMonthlysInOut
   */
  time?: string
  /**
   * 实际投加值 actual dosage
   * @type {number}
   * @memberof DosingStatisticMonthlysInOut
   */
  value?: number
  /**
   * 药耗值 actual dosage cost
   * @type {number}
   * @memberof DosingStatisticMonthlysInOut
   */
  costValue?: number
  /**
   * 计算投加值 calculated dosage
   * @type {number}
   * @memberof DosingStatisticMonthlysInOut
   */
  calValue?: number
  /**
   * 药剂投加类别
   * @type {number}
   * @memberof DosingStatisticMonthlysInOut
   */
  category?: DosingStatisticMonthlysInOutCategoryEnum
  /**
   * 生产线代码 product line code
   * @type {string}
   * @memberof DosingStatisticMonthlysInOut
   */
  productLine?: string | null
  /**
   * 租户ID tenant id
   * @type {string}
   * @memberof DosingStatisticMonthlysInOut
   */
  tenantId?: string
}

export const DosingStatisticMonthlysInOutCategoryEnum = {
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
} as const

export type DosingStatisticMonthlysInOutCategoryEnum =
  (typeof DosingStatisticMonthlysInOutCategoryEnum)[keyof typeof DosingStatisticMonthlysInOutCategoryEnum]
