/* eslint-disable */
/**
 * 模型结果服务
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
 * @interface GeoJsonOuput
 */
export interface GeoJsonOuput {
  /**
   * 时刻 time
   * @type {string}
   * @memberof GeoJsonOuput
   */
  time?: string | null
  /**
   * GeoJson格式的矢量等值面图结果数据 vector data of the contour map result in GeoJson format
   * @type {string}
   * @memberof GeoJsonOuput
   */
  geoJson?: string | null
}
