/* eslint-disable */
/**
 * 污水业务中台领域服务
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
import { DosingParamSettingDto } from './dosing-param-setting-dto'

/**
 *
 * @export
 * @interface ExecutePlcInput
 */
export interface ExecutePlcInput {
  /**
   * 执行PLC时间
   * @type {string}
   * @memberof ExecutePlcInput
   */
  executeTime?: string
  /**
   * 加药参数
   * @type {Array<DosingParamSettingDto>}
   * @memberof ExecutePlcInput
   */
  dosingParamSettingDtos?: Array<DosingParamSettingDto> | null
}
