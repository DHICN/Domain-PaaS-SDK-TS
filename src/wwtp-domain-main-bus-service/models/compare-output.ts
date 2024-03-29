/* eslint-disable */
/**
 * 香港污水厂项目测试
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
 * @interface CompareOutput
 */
export interface CompareOutput {
  /**
   * 系统点位代码 point code
   * @type {string}
   * @memberof CompareOutput
   */
  code?: string | null
  /**
   * 系统点位名称 point name
   * @type {string}
   * @memberof CompareOutput
   */
  name?: string | null
  /**
   * 数值单位 unit of the value
   * @type {string}
   * @memberof CompareOutput
   */
  unit?: string | null
  /**
   * 在线数据 online data
   * @type {Array<TsPair1>}
   * @memberof CompareOutput
   */
  realDatas?: Array<TsPair1> | null
  /**
   * 模拟数据 model result data
   * @type {Array<TsPair1>}
   * @memberof CompareOutput
   */
  modelDatas?: Array<TsPair1> | null
}
