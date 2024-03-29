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
import { BoundaryConfigPointItem } from './boundary-config-point-item'

/**
 *
 * @export
 * @interface QueryBoundaryConfigListOutput
 */
export interface QueryBoundaryConfigListOutput {
  /**
   * 边界配置ID boundary config id
   * @type {string}
   * @memberof QueryBoundaryConfigListOutput
   */
  id?: string
  /**
   * 边界ID boundary id
   * @type {string}
   * @memberof QueryBoundaryConfigListOutput
   */
  boundaryId?: string | null
  /**
   * 边界名称 boundary name
   * @type {string}
   * @memberof QueryBoundaryConfigListOutput
   */
  showName?: string | null
  /**
   *
   * @type {object}
   * @memberof QueryBoundaryConfigListOutput
   */
  boundaryType?: object
  /**
   * 数据类型（主要用于结构物） data type, mainly for structures
   * @type {string}
   * @memberof QueryBoundaryConfigListOutput
   */
  dataType?: string | null
  /**
   * 对应的监测点信息 corresponding measure points
   * @type {Array<BoundaryConfigPointItem>}
   * @memberof QueryBoundaryConfigListOutput
   */
  measurePoint?: Array<BoundaryConfigPointItem> | null
  /**
   * 对应的预报监测点信息 corresponding forecast points
   * @type {Array<BoundaryConfigPointItem>}
   * @memberof QueryBoundaryConfigListOutput
   */
  forecastPoint?: Array<BoundaryConfigPointItem> | null
}
