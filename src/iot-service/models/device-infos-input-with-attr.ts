/* eslint-disable */
/**
 * IoT服务
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
import { AttributesParamItem } from './attributes-param-item'

/**
 * 带属性信息的查询
 * @export
 * @interface DeviceInfosInputWithAttr
 */
export interface DeviceInfosInputWithAttr {
  /**
   *
   * @type {string}
   * @memberof DeviceInfosInputWithAttr
   */
  keyWords?: string | null
  /**
   *
   * @type {number}
   * @memberof DeviceInfosInputWithAttr
   */
  pageIndex?: number
  /**
   *
   * @type {number}
   * @memberof DeviceInfosInputWithAttr
   */
  pageSize?: number
  /**
   * 用于排序的属性 sort attribute:  0-createdTime,  1-customerTitle,  2-deviceProfileName,  3-label,  4-name
   * @type {number}
   * @memberof DeviceInfosInputWithAttr
   */
  sortProperty?: DeviceInfosInputWithAttrSortPropertyEnum
  /**
   * 排序的方式 sort order:  0-ASC,  1-DESC
   * @type {number}
   * @memberof DeviceInfosInputWithAttr
   */
  sortOrder?: DeviceInfosInputWithAttrSortOrderEnum
  /**
   * 设备类型
   * @type {string}
   * @memberof DeviceInfosInputWithAttr
   */
  type?: string | null
  /**
   *
   * @type {Array<AttributesParamItem>}
   * @memberof DeviceInfosInputWithAttr
   */
  attributes?: Array<AttributesParamItem> | null
}

export const DeviceInfosInputWithAttrSortPropertyEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type DeviceInfosInputWithAttrSortPropertyEnum =
  (typeof DeviceInfosInputWithAttrSortPropertyEnum)[keyof typeof DeviceInfosInputWithAttrSortPropertyEnum]
export const DeviceInfosInputWithAttrSortOrderEnum = {
  '0': 0 as number,
  '1': 1 as number,
} as const

export type DeviceInfosInputWithAttrSortOrderEnum =
  (typeof DeviceInfosInputWithAttrSortOrderEnum)[keyof typeof DeviceInfosInputWithAttrSortOrderEnum]