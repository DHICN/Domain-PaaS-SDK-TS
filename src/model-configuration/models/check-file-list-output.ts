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
import { ModelingFileCheckItemOutput } from './modeling-file-check-item-output'

/**
 *
 * @export
 * @interface CheckFileListOutput
 */
export interface CheckFileListOutput {
  /**
   * Modeling file DataType
   * @type {string}
   * @memberof CheckFileListOutput
   */
  dataType?: string | null
  /**
   * File items of this type
   * @type {Array<ModelingFileCheckItemOutput>}
   * @memberof CheckFileListOutput
   */
  items?: Array<ModelingFileCheckItemOutput> | null
}
