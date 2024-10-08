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

// May contain unused imports in some cases
// @ts-ignore
import { MonitorIndicatorInfo } from './monitor-indicator-info'

/**
 *
 * @export
 * @interface AddControlCmdConfigInput
 */
export interface AddControlCmdConfigInput {
  /**
   * 下达控制命令的设备名
   * @type {string}
   * @memberof AddControlCmdConfigInput
   */
  controlDeviceName?: string | null
  /**
   * 下达控制命令的指标
   * @type {string}
   * @memberof AddControlCmdConfigInput
   */
  controlIndicator?: string | null
  /**
   * 故障设备指标信息
   * @type {Array<MonitorIndicatorInfo>}
   * @memberof AddControlCmdConfigInput
   */
  faultIndicatorInfoList?: Array<MonitorIndicatorInfo> | null
  /**
   * 后馈设备指标信息
   * @type {Array<MonitorIndicatorInfo>}
   * @memberof AddControlCmdConfigInput
   */
  backFeedIndicatorInfoList?: Array<MonitorIndicatorInfo> | null
  /**
   * 控制指令监听执行情况的时长（s）
   * @type {number}
   * @memberof AddControlCmdConfigInput
   */
  trackingDuration?: number
  /**
   * 监听频率（s）
   * @type {number}
   * @memberof AddControlCmdConfigInput
   */
  frequency?: number
  /**
   * 0-OPCUA 1-HTTP 2-MQTT
   * @type {number}
   * @memberof AddControlCmdConfigInput
   */
  deliveryType?: AddControlCmdConfigInputDeliveryTypeEnum
}

export const AddControlCmdConfigInputDeliveryTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type AddControlCmdConfigInputDeliveryTypeEnum =
  (typeof AddControlCmdConfigInputDeliveryTypeEnum)[keyof typeof AddControlCmdConfigInputDeliveryTypeEnum]
