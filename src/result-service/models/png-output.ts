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
 * @interface PngOutput
 */
export interface PngOutput {
  /**
   * 时刻 time
   * @type {string}
   * @memberof PngOutput
   */
  time?: string | null
  /**
   * PNG等值面图结果数据路径 png file path of the contour map result
   * @type {string}
   * @memberof PngOutput
   */
  pngPath?: string | null
}