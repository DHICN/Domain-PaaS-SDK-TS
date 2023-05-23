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
 * @interface CloseGisValveInfo
 */
export interface CloseGisValveInfo {
  /**
   *
   * @type {string}
   * @memberof CloseGisValveInfo
   */
  id?: string
  /**
   * Gis Id
   * @type {string}
   * @memberof CloseGisValveInfo
   */
  gisId?: string | null
  /**
   * 坐标 - X
   * @type {number}
   * @memberof CloseGisValveInfo
   */
  x?: number
  /**
   * 坐标 - Y
   * @type {number}
   * @memberof CloseGisValveInfo
   */
  y?: number
  /**
   * 坐标 - Z
   * @type {number}
   * @memberof CloseGisValveInfo
   */
  z?: number
  /**
   * 管径
   * @type {number}
   * @memberof CloseGisValveInfo
   */
  diameter?: number
  /**
   * 管道号
   * @type {string}
   * @memberof CloseGisValveInfo
   */
  pipeId?: string | null
  /**
   * 位置
   * @type {string}
   * @memberof CloseGisValveInfo
   */
  address?: string | null
  /**
   * 能否关闭
   * @type {boolean}
   * @memberof CloseGisValveInfo
   */
  closeEnable?: boolean
  /**
   * 特有的属性
   * @type {string}
   * @memberof CloseGisValveInfo
   */
  customProperties?: string | null
  /**
   *
   * @type {string}
   * @memberof CloseGisValveInfo
   */
  scenarioId?: string
  /**
   *
   * @type {string}
   * @memberof CloseGisValveInfo
   */
  eventId?: string
}
