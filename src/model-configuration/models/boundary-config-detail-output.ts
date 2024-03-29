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
// May contain unused imports in some cases
// @ts-ignore
import { PointExpressItem } from './point-express-item'

/**
 *
 * @export
 * @interface BoundaryConfigDetailOutput
 */
export interface BoundaryConfigDetailOutput {
  /**
   * 边界配置ID boundary config id
   * @type {string}
   * @memberof BoundaryConfigDetailOutput
   */
  id?: string
  /**
   * 模板方案ID template scenario id
   * @type {string}
   * @memberof BoundaryConfigDetailOutput
   */
  templateId?: string
  /**
   * 边界ID boundary id
   * @type {string}
   * @memberof BoundaryConfigDetailOutput
   */
  boundaryId?: string | null
  /**
   * 边界名称 boundary name
   * @type {string}
   * @memberof BoundaryConfigDetailOutput
   */
  showName?: string | null
  /**
   *
   * @type {object}
   * @memberof BoundaryConfigDetailOutput
   */
  boundaryType?: object
  /**
   * 数据类型（主要用于结构物） data type, mainly for structures
   * @type {string}
   * @memberof BoundaryConfigDetailOutput
   */
  dataType?: string | null
  /**
   * 边界时间序列数据dfs0文件的相对路径 Dfs0 file path
   * @type {string}
   * @memberof BoundaryConfigDetailOutput
   */
  dfs0File?: string | null
  /**
   * 边界时间序列数据Dfs0文件中的项的序号，从1开始 data item of dfs0, start with 0
   * @type {string}
   * @memberof BoundaryConfigDetailOutput
   */
  dataItem?: string | null
  /**
   *
   * @type {PointExpressItem}
   * @memberof BoundaryConfigDetailOutput
   */
  measureExpression?: PointExpressItem
  /**
   *
   * @type {PointExpressItem}
   * @memberof BoundaryConfigDetailOutput
   */
  forecastExpression?: PointExpressItem
  /**
   * 监测/预报点信息 corresponding measure or forecast points
   * @type {Array<BoundaryConfigPointItem>}
   * @memberof BoundaryConfigDetailOutput
   */
  pointID?: Array<BoundaryConfigPointItem> | null
}
