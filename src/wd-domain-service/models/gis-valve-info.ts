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
 * 阀门信息
 * @export
 * @interface GisValveInfo
 */
export interface GisValveInfo {
  /**
   *
   * @type {string}
   * @memberof GisValveInfo
   */
  id?: string
  /**
   * Gis Id
   * @type {string}
   * @memberof GisValveInfo
   */
  gisId?: string | null
  /**
   * 坐标 - X
   * @type {number}
   * @memberof GisValveInfo
   */
  x?: number
  /**
   * 坐标 - Y
   * @type {number}
   * @memberof GisValveInfo
   */
  y?: number
  /**
   * 坐标 - Z
   * @type {number}
   * @memberof GisValveInfo
   */
  z?: number
  /**
   * 管径
   * @type {number}
   * @memberof GisValveInfo
   */
  diameter?: number
  /**
   * 管道号
   * @type {string}
   * @memberof GisValveInfo
   */
  pipeId?: string | null
  /**
   * 位置
   * @type {string}
   * @memberof GisValveInfo
   */
  address?: string | null
  /**
   * 能否关闭
   * @type {boolean}
   * @memberof GisValveInfo
   */
  closeEnable?: boolean
  /**
   * 特有的属性
   * @type {string}
   * @memberof GisValveInfo
   */
  customProperties?: string | null
}
