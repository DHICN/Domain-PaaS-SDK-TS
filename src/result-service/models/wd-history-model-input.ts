/* eslint-disable */
/**
 * result-analysis-service
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
import { SysWdDataTypeEnum } from './sys-wd-data-type-enum'

/**
 *
 * @export
 * @interface WdHistoryModelInput
 */
export interface WdHistoryModelInput {
  /**
   *
   * @type {Array<string>}
   * @memberof WdHistoryModelInput
   */
  modelIds: Array<string>
  /**
   *
   * @type {string}
   * @memberof WdHistoryModelInput
   */
  startTime?: string
  /**
   *
   * @type {string}
   * @memberof WdHistoryModelInput
   */
  endTime?: string
  /**
   *
   * @type {number}
   * @memberof WdHistoryModelInput
   */
  frequency?: number
  /**
   *
   * @type {SysWdDataTypeEnum}
   * @memberof WdHistoryModelInput
   */
  dataType?: SysWdDataTypeEnum
}
