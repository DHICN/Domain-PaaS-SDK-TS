/* eslint-disable */
/**
 * 污水业务中台基础服务
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ModelParameterConfigOutput
 */
export interface ModelParameterConfigOutput {
  /**
   * 模型参数配置ID config id
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  id?: string
  /**
   * 模板模型名称（即模板方案名称） template scenario name
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  modelCode?: string | null
  /**
   * 模板模型名称（即模板方案名称） template scenario name
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  modelName?: string | null
  /**
   * 参数 model parameter code
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  paraCode?: string | null
  /**
   * 参数值 model parameter value
   * @type {number}
   * @memberof ModelParameterConfigOutput
   */
  value?: number
  /**
   * 单位 model parameter unit
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  unit?: string | null
  /**
   * 工艺线 product line code
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  productionLine?: string | null
  /**
   * 中文说明 description
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  description?: string | null
  /**
   * 分组 group
   * @type {string}
   * @memberof ModelParameterConfigOutput
   */
  group?: string | null
}
