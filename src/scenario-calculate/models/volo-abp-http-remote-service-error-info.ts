/* eslint-disable */
/**
 * 方案计算服务
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
import { VoloAbpHttpRemoteServiceValidationErrorInfo } from './volo-abp-http-remote-service-validation-error-info'

/**
 *
 * @export
 * @interface VoloAbpHttpRemoteServiceErrorInfo
 */
export interface VoloAbpHttpRemoteServiceErrorInfo {
  /**
   *
   * @type {string}
   * @memberof VoloAbpHttpRemoteServiceErrorInfo
   */
  code?: string | null
  /**
   *
   * @type {string}
   * @memberof VoloAbpHttpRemoteServiceErrorInfo
   */
  message?: string | null
  /**
   *
   * @type {string}
   * @memberof VoloAbpHttpRemoteServiceErrorInfo
   */
  details?: string | null
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof VoloAbpHttpRemoteServiceErrorInfo
   */
  data?: { [key: string]: string } | null
  /**
   *
   * @type {Array<VoloAbpHttpRemoteServiceValidationErrorInfo>}
   * @memberof VoloAbpHttpRemoteServiceErrorInfo
   */
  validationErrors?: Array<VoloAbpHttpRemoteServiceValidationErrorInfo> | null
}
