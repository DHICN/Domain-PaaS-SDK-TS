/* eslint-disable */
/**
 * 污水业务中台基础服务
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
 * @interface AlarmConfigInOut
 */
export interface AlarmConfigInOut {
  /**
   *
   * @type {string}
   * @memberof AlarmConfigInOut
   */
  id?: string
  /**
   * 节点代码 code
   * @type {string}
   * @memberof AlarmConfigInOut
   */
  nodeCode?: string | null
  /**
   * 指标 indicator
   * @type {string}
   * @memberof AlarmConfigInOut
   */
  indicator?: string | null
  /**
   * 规则等级 alarm grade
   * @type {number}
   * @memberof AlarmConfigInOut
   */
  grade?: number
  /**
   * 最大值，超过此数值将预警 maximum value, if the value is larger than this, it will be alarmed
   * @type {number}
   * @memberof AlarmConfigInOut
   */
  maxValue?: number
  /**
   * 最小值，低于此数值将预警 minimum value, if the value is smaller than this, it will be alarmed
   * @type {number}
   * @memberof AlarmConfigInOut
   */
  minValue?: number
  /**
   * 警报类型 alarm type
   * @type {number}
   * @memberof AlarmConfigInOut
   */
  alarmType?: AlarmConfigInOutAlarmTypeEnum
  /**
   * 节点类型 node type
   * @type {number}
   * @memberof AlarmConfigInOut
   */
  nodeType?: AlarmConfigInOutNodeTypeEnum
  /**
   * 单位 unit
   * @type {string}
   * @memberof AlarmConfigInOut
   */
  unit?: string | null
  /**
   * 报警信息 alarm message
   * @type {string}
   * @memberof AlarmConfigInOut
   */
  message?: string | null
}

export const AlarmConfigInOutAlarmTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type AlarmConfigInOutAlarmTypeEnum =
  (typeof AlarmConfigInOutAlarmTypeEnum)[keyof typeof AlarmConfigInOutAlarmTypeEnum]
export const AlarmConfigInOutNodeTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
} as const

export type AlarmConfigInOutNodeTypeEnum =
  (typeof AlarmConfigInOutNodeTypeEnum)[keyof typeof AlarmConfigInOutNodeTypeEnum]
