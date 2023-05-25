/* eslint-disable */
/**
 * identity-service
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
 * @interface InletWqOut
 */
export interface InletWqOut {
  /**
   * 指标 indicator code
   * @type {string}
   * @memberof InletWqOut
   */
  code?: string | null
  /**
   * 清洗前数据 raw data
   * @type {Array<TsPair1>}
   * @memberof InletWqOut
   */
  sourceDatas?: Array<TsPair1> | null
  /**
   * 清洗后数据 processed data
   * @type {Array<TsPair1>}
   * @memberof InletWqOut
   */
  processDatas?: Array<TsPair1> | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof InletWqOut
   */
  unit?: string | null
}