/* eslint-disable */
/**
 * iot-service
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
 * @interface InitOpcUaConfigInput
 */
export interface InitOpcUaConfigInput {
  /**
   * 标识 mark
   * @type {string}
   * @memberof InitOpcUaConfigInput
   */
  opcFlag: string
  /**
   * Ip Ip
   * @type {string}
   * @memberof InitOpcUaConfigInput
   */
  opcServerIp: string
  /**
   * 端口 port
   * @type {string}
   * @memberof InitOpcUaConfigInput
   */
  opcServerPort: string
  /**
   * 用户名 user name
   * @type {string}
   * @memberof InitOpcUaConfigInput
   */
  userName?: string | null
  /**
   * 密码 password
   * @type {string}
   * @memberof InitOpcUaConfigInput
   */
  password?: string | null
  /**
   * 备注 remarks
   * @type {string}
   * @memberof InitOpcUaConfigInput
   */
  remarks?: string | null
}
