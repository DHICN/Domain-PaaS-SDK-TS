/* eslint-disable */
/**
 * wd-domain-service
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
import { PatternTsInfo } from './pattern-ts-info'

/**
 *
 * @export
 * @interface UpdatePatternTsInput
 */
export interface UpdatePatternTsInput {
  /**
   * 方案Id
   * @type {string}
   * @memberof UpdatePatternTsInput
   */
  scenarioId: string
  /**
   * 修改的数据
   * @type {Array<PatternTsInfo>}
   * @memberof UpdatePatternTsInput
   */
  data: Array<PatternTsInfo>
}
