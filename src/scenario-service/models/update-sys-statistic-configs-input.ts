/* eslint-disable */
/**
 * identity-service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { StatisticVarRefDto } from './statistic-var-ref-dto'

/**
 *
 * @export
 * @interface UpdateSysStatisticConfigsInput
 */
export interface UpdateSysStatisticConfigsInput {
  /**
   * 统计编码 statistic code
   * @type {string}
   * @memberof UpdateSysStatisticConfigsInput
   */
  statisticCode: string
  /**
   * 统计名称 statistic name
   * @type {string}
   * @memberof UpdateSysStatisticConfigsInput
   */
  statisticName: string
  /**
   * 统计类型 statistic type
   * @type {number}
   * @memberof UpdateSysStatisticConfigsInput
   */
  statisticType: UpdateSysStatisticConfigsInputStatisticTypeEnum
  /**
   *
   * @type {StatisticVarRefDto}
   * @memberof UpdateSysStatisticConfigsInput
   */
  statisticVarRefInfo: StatisticVarRefDto
  /**
   * 是否展示该条统计信息 if display on the front end
   * @type {boolean}
   * @memberof UpdateSysStatisticConfigsInput
   */
  isDisplay: boolean
  /**
   * 单位 unit
   * @type {string}
   * @memberof UpdateSysStatisticConfigsInput
   */
  unit: string
  /**
   * 统计分组 statistic group
   * @type {string}
   * @memberof UpdateSysStatisticConfigsInput
   */
  groupName?: string | null
  /**
   * 配置ID config id
   * @type {string}
   * @memberof UpdateSysStatisticConfigsInput
   */
  id: string
}

export const UpdateSysStatisticConfigsInputStatisticTypeEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
} as const

export type UpdateSysStatisticConfigsInputStatisticTypeEnum =
  (typeof UpdateSysStatisticConfigsInputStatisticTypeEnum)[keyof typeof UpdateSysStatisticConfigsInputStatisticTypeEnum]
