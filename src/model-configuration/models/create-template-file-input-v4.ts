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

// May contain unused imports in some cases
// @ts-ignore
import { BusinessTypeEnum } from './business-type-enum'
// May contain unused imports in some cases
// @ts-ignore
import { LibraryTypeEnum } from './library-type-enum'
// May contain unused imports in some cases
// @ts-ignore
import { ModelTypeEnum } from './model-type-enum'

/**
 *
 * @export
 * @interface CreateTemplateFileInputV4
 */
export interface CreateTemplateFileInputV4 {
  /**
   * 模型文件名称 model file name without path
   * @type {string}
   * @memberof CreateTemplateFileInputV4
   */
  muppName: string
  /**
   * 上传的文件的ID upload file id
   * @type {string}
   * @memberof CreateTemplateFileInputV4
   */
  fileId: string
  /**
   *
   * @type {LibraryTypeEnum}
   * @memberof CreateTemplateFileInputV4
   */
  libraryType: LibraryTypeEnum
  /**
   *
   * @type {BusinessTypeEnum}
   * @memberof CreateTemplateFileInputV4
   */
  businessType: BusinessTypeEnum
  /**
   *
   * @type {ModelTypeEnum}
   * @memberof CreateTemplateFileInputV4
   */
  modelType: ModelTypeEnum
  /**
   * 模型文件名称，用于区分由同一个文件多次转为模型文件的情况
   * @type {string}
   * @memberof CreateTemplateFileInputV4
   */
  templateName?: string | null
  /**
   * 模型操作版本
   * @type {string}
   * @memberof CreateTemplateFileInputV4
   */
  operAppId: string
  /**
   * 模型版本
   * @type {boolean}
   * @memberof CreateTemplateFileInputV4
   */
  bCheckAndExportModelData?: boolean
}
