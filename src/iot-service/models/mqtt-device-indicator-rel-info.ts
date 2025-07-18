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
 * @interface MqttDeviceIndicatorRelInfo
 */
export interface MqttDeviceIndicatorRelInfo {
  /**
   * 设备名
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  deviceName: string
  /**
   * 指标
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  indicator: string
  /**
   * MQTT的Broker，值需要与服务的配置文件中的配置保持一致。
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  broker: string
  /**
   * MQTT 消息的Topic
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  topic: string
  /**
   * Payload中的key
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  node: string
  /**
   * 是否启用
   * @type {boolean}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  apply?: boolean
  /**
   *
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  id?: string
  /**
   * 设备指标Id，对应着设备-指标
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  indicatorId?: string
  /**
   * 设备Id
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  deviceId?: string
  /**
   * 租户Id
   * @type {string}
   * @memberof MqttDeviceIndicatorRelInfo
   */
  tenantId?: string | null
}
