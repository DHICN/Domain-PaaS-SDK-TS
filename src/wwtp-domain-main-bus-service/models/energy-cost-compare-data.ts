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
 * @interface EnergyCostCompareData
 */
export interface EnergyCostCompareData {
  /**
   * 系统点位代码 point code
   * @type {string}
   * @memberof EnergyCostCompareData
   */
  code?: string | null
  /**
   * 系统点位名称 point name
   * @type {string}
   * @memberof EnergyCostCompareData
   */
  name?: string | null
  /**
   * 数值单位 unit of the value
   * @type {string}
   * @memberof EnergyCostCompareData
   */
  unit?: string | null
  /**
   * 在线数据 online data
   * @type {Array<TsPair1>}
   * @memberof EnergyCostCompareData
   */
  realDatas?: Array<TsPair1> | null
  /**
   * 模拟数据 model result data
   * @type {Array<TsPair1>}
   * @memberof EnergyCostCompareData
   */
  modelDatas?: Array<TsPair1> | null
  /**
   *
   * @type {number}
   * @memberof EnergyCostCompareData
   */
  energyCostPerTonReal?: number
  /**
   *
   * @type {number}
   * @memberof EnergyCostCompareData
   */
  energyCostPerTonModel?: number
}