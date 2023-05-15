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
 * @interface UpdateButtonPerInput
 */
export interface UpdateButtonPerInput {
  /**
   * 按钮ID button id
   * @type {string}
   * @memberof UpdateButtonPerInput
   */
  id: string
  /**
   * 按钮名称 button name
   * @type {string}
   * @memberof UpdateButtonPerInput
   */
  name: string
  /**
   * 按钮权限规则-正则 button permission regular
   * @type {string}
   * @memberof UpdateButtonPerInput
   */
  regular?: string | null
  /**
   * 后端API权限规则
   * @type {string}
   * @memberof UpdateButtonPerInput
   */
  apiRegular?: string | null
}
