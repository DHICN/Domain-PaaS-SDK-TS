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
import { ProjectInitializeStatusEnum } from './project-initialize-status-enum'

/**
 *
 * @export
 * @interface QueryStatusOutput
 */
export interface QueryStatusOutput {
  /**
   * 初始化步骤的代码 project initialization step code
   * @type {string}
   * @memberof QueryStatusOutput
   */
  stepCode?: string | null
  /**
   * 初始化步骤的描述 initialization step description
   * @type {string}
   * @memberof QueryStatusOutput
   */
  description?: string | null
  /**
   *
   * @type {ProjectInitializeStatusEnum}
   * @memberof QueryStatusOutput
   */
  status?: ProjectInitializeStatusEnum
  /**
   * 初始化步骤的执行时间 initialization step execution time
   * @type {string}
   * @memberof QueryStatusOutput
   */
  executeTime?: string
  /**
   * 初始化步骤涉及的参数 the parameters of the step
   * @type {string}
   * @memberof QueryStatusOutput
   */
  param?: string | null
  /**
   * 项目名称 project name
   * @type {string}
   * @memberof QueryStatusOutput
   */
  projectName?: string | null
  /**
   *
   * @type {object}
   * @memberof QueryStatusOutput
   */
  step?: object
}
