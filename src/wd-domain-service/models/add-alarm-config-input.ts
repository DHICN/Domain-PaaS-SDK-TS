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
 * @interface AddAlarmConfigInput
 */
export interface AddAlarmConfigInput {
  /**
   * 设备指标id，关联设备指标表
   * @type {string}
   * @memberof AddAlarmConfigInput
   */
  deviceIndicatorId?: string
  /**
   * 报警数据类型
   * @type {string}
   * @memberof AddAlarmConfigInput
   */
  alarmDataType: string
  /**
   * 报警策略（0阈值、1范围值报警）
   * @type {number}
   * @memberof AddAlarmConfigInput
   */
  alarmPolicy?: number
  /**
   * 最大值
   * @type {number}
   * @memberof AddAlarmConfigInput
   */
  max?: number
  /**
   * 最小值
   * @type {number}
   * @memberof AddAlarmConfigInput
   */
  min?: number
  /**
   * 差值阈值（实测-模拟）
   * @type {number}
   * @memberof AddAlarmConfigInput
   */
  threshold?: number
  /**
   * 备注
   * @type {string}
   * @memberof AddAlarmConfigInput
   */
  remark?: string | null
}
