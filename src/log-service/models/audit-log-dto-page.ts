/* eslint-disable */
/**
 * 日志服务
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
import { AuditLogDto } from './audit-log-dto'

/**
 *
 * @export
 * @interface AuditLogDtoPage
 */
export interface AuditLogDtoPage {
  /**
   *
   * @type {number}
   * @memberof AuditLogDtoPage
   */
  pageIndex?: number
  /**
   *
   * @type {number}
   * @memberof AuditLogDtoPage
   */
  pageSize?: number
  /**
   *
   * @type {Array<AuditLogDto>}
   * @memberof AuditLogDtoPage
   */
  list?: Array<AuditLogDto> | null
  /**
   *
   * @type {number}
   * @memberof AuditLogDtoPage
   */
  totalCount?: number
  /**
   *
   * @type {number}
   * @memberof AuditLogDtoPage
   */
  totalPages?: number
  /**
   *
   * @type {boolean}
   * @memberof AuditLogDtoPage
   */
  haveNextPage?: boolean
}
