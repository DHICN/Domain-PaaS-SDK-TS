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
import { Data } from './data'

/**
 *
 * @export
 * @interface ChemicalCostPerFlowOutput
 */
export interface ChemicalCostPerFlowOutput {
  /**
   * 药剂名称 dosage name
   * @type {string}
   * @memberof ChemicalCostPerFlowOutput
   */
  chemicalName?: string | null
  /**
   * 每条工艺线的吨水药耗数据 dosage cost per ton water of each product line
   * @type {Array<Data>}
   * @memberof ChemicalCostPerFlowOutput
   */
  datas?: Array<Data> | null
}
