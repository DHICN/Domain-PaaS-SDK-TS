/* eslint-disable */
/**
 * wwtp-paas-main-bus-service
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
import { TsPair1 } from './ts-pair1'

/**
 *
 * @export
 * @interface MicroOrganismOutput
 */
export interface MicroOrganismOutput {
  /**
   * 微生物指标代码 microorganism code
   * @type {string}
   * @memberof MicroOrganismOutput
   */
  code?: string | null
  /**
   * 微生物指标名称 microorganism name
   * @type {string}
   * @memberof MicroOrganismOutput
   */
  name?: string | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof MicroOrganismOutput
   */
  unit?: string | null
  /**
   * 时间序列数据 time-series data
   * @type {Array<TsPair1>}
   * @memberof MicroOrganismOutput
   */
  data?: Array<TsPair1> | null
}