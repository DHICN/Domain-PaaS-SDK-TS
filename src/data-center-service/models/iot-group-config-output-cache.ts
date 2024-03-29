/* eslint-disable */
/**
 * 数据中台服务
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
 * @interface IotGroupConfigOutputCache
 */
export interface IotGroupConfigOutputCache {
  /**
   * 分组 Id
   * @type {string}
   * @memberof IotGroupConfigOutputCache
   */
  id?: string
  /**
   * 分组名称
   * @type {string}
   * @memberof IotGroupConfigOutputCache
   */
  groupName?: string | null
  /**
   * 层级编码 如: 00010001
   * @type {string}
   * @memberof IotGroupConfigOutputCache
   */
  levelCode?: string | null
  /**
   * 父级层级编码 0001 可空,空代表顶级
   * @type {string}
   * @memberof IotGroupConfigOutputCache
   */
  parentLevelCode?: string | null
}
