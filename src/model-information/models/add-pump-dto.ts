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

/**
 *
 * @export
 * @interface AddPumpDto
 */
export interface AddPumpDto {
  /**
   * 模型中泵站ID pump muid
   * @type {string}
   * @memberof AddPumpDto
   */
  muid?: string | null
  /**
   * 起始节点 from node
   * @type {string}
   * @memberof AddPumpDto
   */
  fromNode?: string | null
  /**
   * 终止节点 to node
   * @type {string}
   * @memberof AddPumpDto
   */
  toNode?: string | null
  /**
   * 泵站类型 pump type
   * @type {number}
   * @memberof AddPumpDto
   */
  pumpType?: number
  /**
   * 泵站速度 pump speed
   * @type {number}
   * @memberof AddPumpDto
   */
  speed?: number
  /**
   * 模式ID pattern id
   * @type {string}
   * @memberof AddPumpDto
   */
  patternID?: string | null
  /**
   * 泵站功率 pump constant power
   * @type {number}
   * @memberof AddPumpDto
   */
  constantPower?: number
  /**
   * 分区ID zone id
   * @type {string}
   * @memberof AddPumpDto
   */
  zoneID?: string | null
  /**
   * 描述 description
   * @type {string}
   * @memberof AddPumpDto
   */
  description?: string | null
  /**
   * 数据源 data source
   * @type {string}
   * @memberof AddPumpDto
   */
  dataSource?: string | null
  /**
   * 资产名称 asset name
   * @type {string}
   * @memberof AddPumpDto
   */
  assetName?: string | null
  /**
   * 起始节点坐标X coordinate x of from-node
   * @type {number}
   * @memberof AddPumpDto
   */
  fromX?: number
  /**
   * 起始节点坐标Y coordinate y of from-node
   * @type {number}
   * @memberof AddPumpDto
   */
  fromY?: number
  /**
   * 终止节点坐标X coordinate x of to-node
   * @type {number}
   * @memberof AddPumpDto
   */
  toX?: number
  /**
   * 终止节点坐标Y coordinate y of to-node
   * @type {number}
   * @memberof AddPumpDto
   */
  toY?: number
}
