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
 * @interface GetStatisticResultInput
 */
export interface GetStatisticResultInput {
  /**
   *
   * @type {string}
   * @memberof GetStatisticResultInput
   */
  scenarioId?: string | null
  /**
   *
   * @type {SysWdDataTypeEnum}
   * @memberof GetStatisticResultInput
   */
  sysWDDataType?: SysWdDataTypeEnum
}
