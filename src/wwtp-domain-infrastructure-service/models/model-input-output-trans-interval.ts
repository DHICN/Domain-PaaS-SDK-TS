/* eslint-disable */
/**
 * 污水业务中台基础服务
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
 * @interface ModelInputOutputTransInterval
 */
export interface ModelInputOutputTransInterval {
  /**
   *
   * @type {string}
   * @memberof ModelInputOutputTransInterval
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof ModelInputOutputTransInterval
   */
  tenantId?: string | null
  /**
   *
   * @type {string}
   * @memberof ModelInputOutputTransInterval
   */
  modelName?: string | null
  /**
   *
   * @type {string}
   * @memberof ModelInputOutputTransInterval
   */
  outputFile?: string | null
  /**
   *
   * @type {number}
   * @memberof ModelInputOutputTransInterval
   */
  transInterval?: number | null
  /**
   *
   * @type {string}
   * @memberof ModelInputOutputTransInterval
   */
  fileType?: string | null
}
