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
import { RealTimeData } from './real-time-data'

/**
 *
 * @export
 * @interface RealTimeOutput
 */
export interface RealTimeOutput {
  /**
   * 毒性仪位置 toxicity meter location
   * @type {string}
   * @memberof RealTimeOutput
   */
  location?: string | null
  /**
   * 所处的进水点 inlet
   * @type {string}
   * @memberof RealTimeOutput
   */
  inlet?: string | null
  /**
   *
   * @type {string}
   * @memberof RealTimeOutput
   */
  inletName?: string | null
  /**
   * 具体数据 detailed data
   * @type {Array<RealTimeData>}
   * @memberof RealTimeOutput
   */
  datas?: Array<RealTimeData> | null
}
