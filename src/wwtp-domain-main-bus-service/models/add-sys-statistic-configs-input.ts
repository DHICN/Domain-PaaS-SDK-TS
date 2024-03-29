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

// May contain unused imports in some cases
// @ts-ignore
import { StatisticVarRefDto } from './statistic-var-ref-dto'

/**
 *
 * @export
 * @interface AddSysStatisticConfigsInput
 */
export interface AddSysStatisticConfigsInput {
  /**
   * 统计编码 statistic code
   * @type {string}
   * @memberof AddSysStatisticConfigsInput
   */
  statisticCode: string
  /**
   * 统计名称 statistic name
   * @type {string}
   * @memberof AddSysStatisticConfigsInput
   */
  statisticName: string
  /**
   * 统计类型 statistic type
   * @type {number}
   * @memberof AddSysStatisticConfigsInput
   */
  statisticType: AddSysStatisticConfigsInputStatisticTypeEnum
  /**
   *
   * @type {StatisticVarRefDto}
   * @memberof AddSysStatisticConfigsInput
   */
  statisticVarRefInfo: StatisticVarRefDto
  /**
   * 是否展示该条统计信息 if display on the front end
   * @type {boolean}
   * @memberof AddSysStatisticConfigsInput
   */
  isDisplay: boolean
  /**
   * 单位 unit
   * @type {string}
   * @memberof AddSysStatisticConfigsInput
   */
  unit?: string | null
  /**
   * 统计分组 statistic group
   * @type {string}
   * @memberof AddSysStatisticConfigsInput
   */
  groupName?: string | null
}

export const AddSysStatisticConfigsInputStatisticTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type AddSysStatisticConfigsInputStatisticTypeEnum =
  (typeof AddSysStatisticConfigsInputStatisticTypeEnum)[keyof typeof AddSysStatisticConfigsInputStatisticTypeEnum]
