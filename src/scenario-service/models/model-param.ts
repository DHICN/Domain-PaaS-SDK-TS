/* eslint-disable */
/**
 * identity-service
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
 * @interface ModelParam
 */
export interface ModelParam {
  /**
   * 方案代码 scenario code
   * @type {string}
   * @memberof ModelParam
   */
  scenarioCode?: string | null
  /**
   * 参数代码 parameter code
   * @type {string}
   * @memberof ModelParam
   */
  paraCode?: string | null
  /**
   * 参数值 parameter value
   * @type {number}
   * @memberof ModelParam
   */
  value?: number
  /**
   * 单位 unit
   * @type {string}
   * @memberof ModelParam
   */
  unit?: string | null
  /**
   * 参数描述 parameter description
   * @type {string}
   * @memberof ModelParam
   */
  description?: string | null
}