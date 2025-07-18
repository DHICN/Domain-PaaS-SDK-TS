/* eslint-disable */
/**
 * 模型配置服务
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
 * 更新模板文件的信息
 * @export
 * @interface UpdateModelTemplateFile
 */
export interface UpdateModelTemplateFile {
  /**
   * 数据Id
   * @type {string}
   * @memberof UpdateModelTemplateFile
   */
  id: string
  /**
   * 模板文件的名称
   * @type {string}
   * @memberof UpdateModelTemplateFile
   */
  templateName: string
  /**
   * 模板文件的描述信息
   * @type {string}
   * @memberof UpdateModelTemplateFile
   */
  remark?: string | null
}
