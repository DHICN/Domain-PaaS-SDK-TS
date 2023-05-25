/* eslint-disable */
/**
 * scenario-manager-service
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
import { ModelTypeEnum } from './model-type-enum'

/**
 *
 * @export
 * @interface CreateTemplateScenarioByMinIoPara2
 */
export interface CreateTemplateScenarioByMinIoPara2 {
  /**
   * 模型文件在分布式文件系统上的路径 path of the model file on distributed file system
   * @type {string}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  minIOPath?: string | null
  /**
   * 模型文件在分布式文件系统上的桶 bucket of the model file on distributed file system
   * @type {string}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  minIOBucket?: string | null
  /**
   * 主模型文件相对于模型文件夹的路径 main model file\'s (eg. .mupp file) relative path to the model folder
   * @type {string}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  projectFile?: string | null
  /**
   *
   * @type {ModelTypeEnum}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  type?: ModelTypeEnum
  /**
   * 模板的方案组ID template scenario\'s group Id
   * @type {string}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  groupId?: string | null
  /**
   * 模板方案名称 template scenario name
   * @type {string}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  newTemplateName?: string | null
  /**
   * 模板方案子类型 template scenario subtype
   * @type {string}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  subType?: string | null
  /**
   * 模板方案描述 template scenario description
   * @type {string}
   * @memberof CreateTemplateScenarioByMinIoPara2
   */
  description?: string | null
}