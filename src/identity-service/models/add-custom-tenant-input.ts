/* eslint-disable */
/**
 * 用户认证管理服务
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { StringStringKeyValue } from './string-string-key-value'

/**
 *
 * @export
 * @interface AddCustomTenantInput
 */
export interface AddCustomTenantInput {
  /**
   * 分组Id/系统Id group/system id
   * @type {string}
   * @memberof AddCustomTenantInput
   */
  customId: string
  /**
   * 租户名称 tenant name
   * @type {string}
   * @memberof AddCustomTenantInput
   */
  name: string
  /**
   * 租户管理员账号 administrator name of the tenant
   * @type {string}
   * @memberof AddCustomTenantInput
   */
  adminUserName: string
  /**
   * 是否开通IOT功能 if open IoT function
   * @type {boolean}
   * @memberof AddCustomTenantInput
   */
  isOpenIOT?: boolean | null
  /**
   * 自定义属性:K-V自定义列-值 customized attributes in key-value pairs
   * @type {Array<StringStringKeyValue>}
   * @memberof AddCustomTenantInput
   */
  attributes?: Array<StringStringKeyValue> | null
  /**
   * 分配的功能模块
   * @type {Array<string>}
   * @memberof AddCustomTenantInput
   */
  functions: Array<string>
}