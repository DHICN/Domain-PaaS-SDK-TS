/* eslint-disable */
/**
 * GIS服务
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
import { GeomPoint } from './geom-point'

/**
 * 查询最短路径的输入参数
 * @export
 * @interface QueryShortestPathArgs
 */
export interface QueryShortestPathArgs {
  /**
   * 模板ID
   * @type {string}
   * @memberof QueryShortestPathArgs
   */
  templateId?: string
  /**
   *
   * @type {GeomPoint}
   * @memberof QueryShortestPathArgs
   */
  fromNode?: GeomPoint
  /**
   *
   * @type {GeomPoint}
   * @memberof QueryShortestPathArgs
   */
  toNode?: GeomPoint
  /**
   * 是否有向，默认为true
   * @type {boolean}
   * @memberof QueryShortestPathArgs
   */
  direct?: boolean
}
