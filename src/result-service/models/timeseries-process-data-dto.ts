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
 * @interface TimeseriesProcessDataDto
 */
export interface TimeseriesProcessDataDto {
  /**
   *
   * @type {string}
   * @memberof TimeseriesProcessDataDto
   */
  modelFeatureId?: string | null
  /**
   *
   * @type {string}
   * @memberof TimeseriesProcessDataDto
   */
  dataType?: string | null
  /**
   *
   * @type {string}
   * @memberof TimeseriesProcessDataDto
   */
  indicator?: string | null
  /**
   *
   * @type {Array<string>}
   * @memberof TimeseriesProcessDataDto
   */
  t?: Array<string> | null
  /**
   *
   * @type {Array<number>}
   * @memberof TimeseriesProcessDataDto
   */
  v?: Array<number> | null
  /**
   *
   * @type {string}
   * @memberof TimeseriesProcessDataDto
   */
  unit?: string | null
}
