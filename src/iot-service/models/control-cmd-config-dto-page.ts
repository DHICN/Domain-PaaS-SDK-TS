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

// May contain unused imports in some cases
// @ts-ignore
import { ControlCmdConfigDto } from './control-cmd-config-dto'

/**
 *
 * @export
 * @interface ControlCmdConfigDtoPage
 */
export interface ControlCmdConfigDtoPage {
  /**
   *
   * @type {number}
   * @memberof ControlCmdConfigDtoPage
   */
  pageIndex?: number
  /**
   *
   * @type {number}
   * @memberof ControlCmdConfigDtoPage
   */
  pageSize?: number
  /**
   *
   * @type {Array<ControlCmdConfigDto>}
   * @memberof ControlCmdConfigDtoPage
   */
  list?: Array<ControlCmdConfigDto> | null
  /**
   *
   * @type {number}
   * @memberof ControlCmdConfigDtoPage
   */
  totalCount?: number
  /**
   *
   * @type {number}
   * @memberof ControlCmdConfigDtoPage
   */
  totalPages?: number
  /**
   *
   * @type {boolean}
   * @memberof ControlCmdConfigDtoPage
   */
  haveNextPage?: boolean
}
