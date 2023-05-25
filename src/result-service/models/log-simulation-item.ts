/* eslint-disable */
/**
 * result-analysis-service
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
import { ModelStateEnum } from './model-state-enum'

/**
 *
 * @export
 * @interface LogSimulationItem
 */
export interface LogSimulationItem {
  /**
   * 日志记录时间 log time
   * @type {string}
   * @memberof LogSimulationItem
   */
  time?: string | null
  /**
   * 计算进度 calculation progress
   * @type {number}
   * @memberof LogSimulationItem
   */
  progress?: number
  /**
   * 消息 remark message
   * @type {string}
   * @memberof LogSimulationItem
   */
  message?: string | null
  /**
   *
   * @type {ModelStateEnum}
   * @memberof LogSimulationItem
   */
  modelState?: ModelStateEnum
  /**
   * 错误信息 error message
   * @type {string}
   * @memberof LogSimulationItem
   */
  errorMsg?: string | null
}