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
import { NotifyParams } from './notify-params'

/**
 *
 * @export
 * @interface AddOpcUaPubSubInput
 */
export interface AddOpcUaPubSubInput {
  /**
   * 标识,OpcUaConfig表的OpcFlag mark,OpcFlag of OpcUaConfig table
   * @type {string}
   * @memberof AddOpcUaPubSubInput
   */
  opcFlag: string
  /**
   * 订阅回调标识Key subscription callback ID Key
   * @type {string}
   * @memberof AddOpcUaPubSubInput
   */
  subKey?: string | null
  /**
   * 要订阅的节点名 node name to subscribe to
   * @type {string}
   * @memberof AddOpcUaPubSubInput
   */
  node?: string | null
  /**
   * 通知模式：kafka,notify,rabitmq等 notification Mode: kafka,notify,rabitmq,etc.
   * @type {string}
   * @memberof AddOpcUaPubSubInput
   */
  notifyPattern?: string | null
  /**
   * 备注 remarks
   * @type {string}
   * @memberof AddOpcUaPubSubInput
   */
  remarks?: string | null
  /**
   *
   * @type {NotifyParams}
   * @memberof AddOpcUaPubSubInput
   */
  notifyDetails?: NotifyParams
}
