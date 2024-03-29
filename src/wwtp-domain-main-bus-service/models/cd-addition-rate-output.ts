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
import { TsPair } from './ts-pair'

/**
 *
 * @export
 * @interface CdAdditionRateOutput
 */
export interface CdAdditionRateOutput {
  /**
   * 药剂代码 dosage code
   * @type {string}
   * @memberof CdAdditionRateOutput
   */
  code?: string | null
  /**
   * 计算值 calculated value
   * @type {Array<TsPair>}
   * @memberof CdAdditionRateOutput
   */
  calValue?: Array<TsPair> | null
  /**
   * 实际值 actual value
   * @type {Array<TsPair>}
   * @memberof CdAdditionRateOutput
   */
  value?: Array<TsPair> | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof CdAdditionRateOutput
   */
  unit?: string | null
}
