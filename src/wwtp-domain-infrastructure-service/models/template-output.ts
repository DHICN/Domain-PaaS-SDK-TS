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
 * @interface TemplateOutput
 */
export interface TemplateOutput {
  /**
   * 模板方案ID template scenario id
   * @type {string}
   * @memberof TemplateOutput
   */
  id?: string
  /**
   * 模型名称（即模板方案名称） model name as well as template scenario name
   * @type {string}
   * @memberof TemplateOutput
   */
  modelName?: string | null
  /**
   * 模型类型，分为WWTP, WWTPOptim, WWTPMLab model type including WWTP, WWTPOptim, WWTPMLab
   * @type {number}
   * @memberof TemplateOutput
   */
  modelType?: TemplateOutputModelTypeEnum
  /**
   * 模板文件名称（压缩文件） compressed model file name
   * @type {string}
   * @memberof TemplateOutput
   */
  modelFileName?: string | null
  /**
   * 创建时间 create time
   * @type {string}
   * @memberof TemplateOutput
   */
  createTime?: string
}

export const TemplateOutputModelTypeEnum = {
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
} as const

export type TemplateOutputModelTypeEnum =
  (typeof TemplateOutputModelTypeEnum)[keyof typeof TemplateOutputModelTypeEnum]
