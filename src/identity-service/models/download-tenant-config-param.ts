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

/**
 *
 * @export
 * @interface DownloadTenantConfigParam
 */
export interface DownloadTenantConfigParam {
  /**
   * 租户名
   * @type {string}
   * @memberof DownloadTenantConfigParam
   */
  tenantName: string
  /**
   * 分配的功能模块
   * @type {Array<string>}
   * @memberof DownloadTenantConfigParam
   */
  functions: Array<string>
}
