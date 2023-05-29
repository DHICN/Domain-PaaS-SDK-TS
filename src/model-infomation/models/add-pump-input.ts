/* eslint-disable */
/**
 * model-information-service
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
import { AddPumpDto } from './add-pump-dto'

/**
 *
 * @export
 * @interface AddPumpInput
 */
export interface AddPumpInput {
  /**
   * 方案ID scenario id
   * @type {string}
   * @memberof AddPumpInput
   */
  scenarioId?: string | null
  /**
   * 新增泵站列表 pumps to be added
   * @type {Array<AddPumpDto>}
   * @memberof AddPumpInput
   */
  pumps?: Array<AddPumpDto> | null
}
