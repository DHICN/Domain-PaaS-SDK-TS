/* eslint-disable */
/**
 * 模型结果服务
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
import { NodeProfileData } from './node-profile-data'

/**
 *
 * @export
 * @interface NodeProfileDataProfileDataItem
 */
export interface NodeProfileDataProfileDataItem {
  /**
   * 时间 time
   * @type {string}
   * @memberof NodeProfileDataProfileDataItem
   */
  time?: string | null
  /**
   * 对应时刻上的数据 data of the time
   * @type {Array<NodeProfileData>}
   * @memberof NodeProfileDataProfileDataItem
   */
  data?: Array<NodeProfileData> | null
}
