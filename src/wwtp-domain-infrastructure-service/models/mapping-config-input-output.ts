/* eslint-disable */
/**
 * wwtp-paas-infrastructure-service
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
 * @interface MappingConfigInputOutput
 */
export interface MappingConfigInputOutput {
  /**
   * 点位ID mapping id
   * @type {string}
   * @memberof MappingConfigInputOutput
   */
  id?: string
  /**
   * 系统点位编码 online point code
   * @type {string}
   * @memberof MappingConfigInputOutput
   */
  pointCode?: string | null
  /**
   * 模型点位编码 model node code
   * @type {string}
   * @memberof MappingConfigInputOutput
   */
  modelNodeCode?: string | null
  /**
   * 系统点位ID system point id
   * @type {string}
   * @memberof MappingConfigInputOutput
   */
  sysId?: string
  /**
   * 保留字段 reserved field
   * @type {string}
   * @memberof MappingConfigInputOutput
   */
  reserve?: string | null
  /**
   * 模板模型名称（即模板方案名称） template model name
   * @type {string}
   * @memberof MappingConfigInputOutput
   */
  modelName?: string | null
}