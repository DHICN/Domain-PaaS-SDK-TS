/* eslint-disable */
/**
 * 模型映射服务
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
 * @interface GroupEquipRelOutputCache
 */
export interface GroupEquipRelOutputCache {
  /**
   * 分组id，关联DeviceGroupConfig的id
   * @type {string}
   * @memberof GroupEquipRelOutputCache
   */
  groupId?: string
  /**
   * 分组名称
   * @type {string}
   * @memberof GroupEquipRelOutputCache
   */
  groupName?: string | null
  /**
   * 资产或设备id，关联iot中的资产id或设备id
   * @type {string}
   * @memberof GroupEquipRelOutputCache
   */
  equipmentId?: string
  /**
   * 设备标签
   * @type {string}
   * @memberof GroupEquipRelOutputCache
   */
  deviceName?: string | null
  /**
   * 设备标签 device label
   * @type {string}
   * @memberof GroupEquipRelOutputCache
   */
  deviceLabel?: string | null
}
