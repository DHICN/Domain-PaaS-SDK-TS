/* eslint-disable */
/**
 * model-information-service
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
 * @interface GetBoundaryTsOutput
 */
export interface GetBoundaryTsOutput {
  /**
   * 时间列表 time list
   * @type {Array<string>}
   * @memberof GetBoundaryTsOutput
   */
  t?: Array<string> | null
  /**
   * 每个时刻对应的数值 value list
   * @type {Array<number>}
   * @memberof GetBoundaryTsOutput
   */
  v?: Array<number> | null
}
