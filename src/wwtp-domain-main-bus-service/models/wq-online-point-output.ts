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
import { WqOnlinePoint } from './wq-online-point'

/**
 *
 * @export
 * @interface WqOnlinePointOutput
 */
export interface WqOnlinePointOutput {
  /**
   * 位置 location
   * @type {string}
   * @memberof WqOnlinePointOutput
   */
  location?: string | null
  /**
   * 进水点/工艺线，及其下的指标信息 inlet/product and corresponding indicators
   * @type {Array<WqOnlinePoint>}
   * @memberof WqOnlinePointOutput
   */
  points?: Array<WqOnlinePoint> | null
}
