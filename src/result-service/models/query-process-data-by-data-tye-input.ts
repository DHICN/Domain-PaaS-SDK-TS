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
 * @interface QueryProcessDataByDataTyeInput
 */
export interface QueryProcessDataByDataTyeInput {
  /**
   *
   * @type {string}
   * @memberof QueryProcessDataByDataTyeInput
   */
  scenarioId: string
  /**
   *
   * @type {string}
   * @memberof QueryProcessDataByDataTyeInput
   */
  dataType: string
  /**
   *
   * @type {Array<string>}
   * @memberof QueryProcessDataByDataTyeInput
   */
  modelFeatureIds?: Array<string> | null
}
