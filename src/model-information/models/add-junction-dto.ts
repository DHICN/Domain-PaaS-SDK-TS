/* eslint-disable */
/**
 * 模型编辑服务
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
import { OperateEnum } from './operate-enum'

/**
 *
 * @export
 * @interface AddJunctionDto
 */
export interface AddJunctionDto {
  /**
   * 模型中节点ID junction muid
   * @type {string}
   * @memberof AddJunctionDto
   */
  muid?: string | null
  /**
   * 节点类型 node type
   * @type {number}
   * @memberof AddJunctionDto
   */
  nodeType?: number
  /**
   * 高程 elevation
   * @type {number}
   * @memberof AddJunctionDto
   */
  elevation?: number
  /**
   * 表面高程 surface elevation
   * @type {number}
   * @memberof AddJunctionDto
   */
  surfaceElevation?: number
  /**
   * 分区ID zone id
   * @type {string}
   * @memberof AddJunctionDto
   */
  zoneID?: string | null
  /**
   * 初始化学物质浓度 initial chemical concentration
   * @type {number}
   * @memberof AddJunctionDto
   */
  initChemicalConcentration?: number
  /**
   * 初始水量占比 initial source percentage
   * @type {number}
   * @memberof AddJunctionDto
   */
  initSourcePercentage?: number
  /**
   * 初始水龄 initial water age
   * @type {number}
   * @memberof AddJunctionDto
   */
  initWaterAge?: number
  /**
   * 描述 description
   * @type {string}
   * @memberof AddJunctionDto
   */
  description?: string | null
  /**
   * 数据源 data source
   * @type {string}
   * @memberof AddJunctionDto
   */
  dataSource?: string | null
  /**
   * 资产名称 asset name
   * @type {string}
   * @memberof AddJunctionDto
   */
  assetName?: string | null
  /**
   * 节点坐标X coordinate x
   * @type {number}
   * @memberof AddJunctionDto
   */
  x?: number
  /**
   * 节点坐标Y coordinate y
   * @type {number}
   * @memberof AddJunctionDto
   */
  y?: number
  /**
   *
   * @type {OperateEnum}
   * @memberof AddJunctionDto
   */
  operate?: OperateEnum
}
