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
 *
 * @export
 * @interface StringListResult
 */
export interface StringListResult {
  /**
   *
   * @type {boolean}
   * @memberof StringListResult
   */
  status?: boolean
  /**
   *
   * @type {string}
   * @memberof StringListResult
   */
  code?: string | null
  /**
   *
   * @type {string}
   * @memberof StringListResult
   */
  message?: string | null
  /**
   *
   * @type {string}
   * @memberof StringListResult
   */
  traceId?: string | null
  /**
   *
   * @type {Array<string>}
   * @memberof StringListResult
   */
  data?: Array<string> | null
}
