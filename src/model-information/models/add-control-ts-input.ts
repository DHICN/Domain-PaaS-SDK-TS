/* eslint-disable */
/**
 * 模型编辑服务
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
import { AddControlTsDto } from './add-control-ts-dto'

/**
 *
 * @export
 * @interface AddControlTsInput
 */
export interface AddControlTsInput {
  /**
   * 方案Id scenario id
   * @type {string}
   * @memberof AddControlTsInput
   */
  scenarioId: string
  /**
   * 待新增的控制规则时序数据 control time-series data to be added
   * @type {Array<AddControlTsDto>}
   * @memberof AddControlTsInput
   */
  data: Array<AddControlTsDto>
}
