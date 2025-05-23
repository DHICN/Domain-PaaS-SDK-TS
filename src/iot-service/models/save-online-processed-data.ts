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
 * 保存清洗数据
 * @export
 * @interface SaveOnlineProcessedData
 */
export interface SaveOnlineProcessedData {
  /**
   * 时间
   * @type {string}
   * @memberof SaveOnlineProcessedData
   */
  time?: string
  /**
   * 设备编码，设备的唯一标识
   * @type {string}
   * @memberof SaveOnlineProcessedData
   */
  deviceCode: string
  /**
   * IoT设备的指标，如Cod、NH3等
   * @type {string}
   * @memberof SaveOnlineProcessedData
   */
  indicator: string
  /**
   * 指标的数值
   * @type {number}
   * @memberof SaveOnlineProcessedData
   */
  value?: number
  /**
   * 数据标签，反应数据的情况，如数据的质量、清洗的标记等，具体依业务而定
   * @type {string}
   * @memberof SaveOnlineProcessedData
   */
  tag?: string | null
  /**
   * 租户Id
   * @type {string}
   * @memberof SaveOnlineProcessedData
   */
  tenantId?: string | null
}
