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
 * @interface GetAlarmLogByTypeInput
 */
export interface GetAlarmLogByTypeInput {
  /**
   * 开始时间
   * @type {string}
   * @memberof GetAlarmLogByTypeInput
   */
  startTime?: string
  /**
   * 结束时间
   * @type {string}
   * @memberof GetAlarmLogByTypeInput
   */
  endTime?: string
  /**
   * 报警数据类型
   * @type {Array<number>}
   * @memberof GetAlarmLogByTypeInput
   */
  alarmDataType: Array<GetAlarmLogByTypeInputAlarmDataTypeEnum>
}

export const GetAlarmLogByTypeInputAlarmDataTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
  '5': 5 as number,
} as const

export type GetAlarmLogByTypeInputAlarmDataTypeEnum =
  (typeof GetAlarmLogByTypeInputAlarmDataTypeEnum)[keyof typeof GetAlarmLogByTypeInputAlarmDataTypeEnum]
