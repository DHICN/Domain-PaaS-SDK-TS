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
import { WdValveSettingNo } from './wd-valve-setting-no'
// May contain unused imports in some cases
// @ts-ignore
import { WdValveStatusNo } from './wd-valve-status-no'
// May contain unused imports in some cases
// @ts-ignore
import { WdValveTypeNo } from './wd-valve-type-no'

/**
 *
 * @export
 * @interface QueryValveDto
 */
export interface QueryValveDto {
  /**
   * 模型中阀门的ID valve muid
   * @type {string}
   * @memberof QueryValveDto
   */
  muid?: string | null
  /**
   * 设置的数值 setting valve
   * @type {number}
   * @memberof QueryValveDto
   */
  setting?: number
  /**
   *
   * @type {WdValveSettingNo}
   * @memberof QueryValveDto
   */
  settingNo?: WdValveSettingNo
  /**
   *
   * @type {WdValveTypeNo}
   * @memberof QueryValveDto
   */
  valveType?: WdValveTypeNo
  /**
   *
   * @type {WdValveStatusNo}
   * @memberof QueryValveDto
   */
  valveStatus?: WdValveStatusNo
  /**
   * 阀门空间信息 valve geometry in wkt format
   * @type {string}
   * @memberof QueryValveDto
   */
  geomWKT?: string | null
  /**
   * 终止节点坐标值Y coordinate y of to-node
   * @type {number}
   * @memberof QueryValveDto
   */
  toY?: number
  /**
   * 终止节点坐标值X coordinate x of to-node
   * @type {number}
   * @memberof QueryValveDto
   */
  toX?: number
  /**
   * 起始节点坐标值Y coordinate y of from-node
   * @type {number}
   * @memberof QueryValveDto
   */
  fromY?: number
  /**
   * 起始节点坐标值X coordinate x of from-node
   * @type {number}
   * @memberof QueryValveDto
   */
  fromX?: number
  /**
   * 坐标信息 coordinate
   * @type {string}
   * @memberof QueryValveDto
   */
  coorStr?: string | null
  /**
   * 街道名称 street name
   * @type {string}
   * @memberof QueryValveDto
   */
  streetName?: string | null
  /**
   * 描述 description
   * @type {string}
   * @memberof QueryValveDto
   */
  description?: string | null
  /**
   * 备注 note
   * @type {string}
   * @memberof QueryValveDto
   */
  note?: string | null
  /**
   * 数据源 data source
   * @type {string}
   * @memberof QueryValveDto
   */
  dataSource?: string | null
  /**
   * 分区ID zone id
   * @type {string}
   * @memberof QueryValveDto
   */
  zoneID?: string | null
  /**
   * 损失系数 loss coefficient
   * @type {number}
   * @memberof QueryValveDto
   */
  lossCoeff?: number
  /**
   * 直径 diameter
   * @type {number}
   * @memberof QueryValveDto
   */
  diameter?: number
  /**
   * 终止节点 to node
   * @type {string}
   * @memberof QueryValveDto
   */
  toNode?: string | null
  /**
   * 起始节点 from node
   * @type {string}
   * @memberof QueryValveDto
   */
  fromNode?: string | null
  /**
   * 调度曲线ID operation schedule curve id
   * @type {string}
   * @memberof QueryValveDto
   */
  operCurveID?: string | null
  /**
   * 阀门曲线ID valve characteristic curve id
   * @type {string}
   * @memberof QueryValveDto
   */
  valveCurveID?: string | null
  /**
   * 创建时间 create time
   * @type {string}
   * @memberof QueryValveDto
   */
  createTime?: string
  /**
   * 阀门ID valve id
   * @type {string}
   * @memberof QueryValveDto
   */
  id?: string
}
