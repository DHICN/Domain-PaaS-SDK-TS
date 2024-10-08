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

/**
 *
 * @export
 * @interface GroupEquipRelOutput
 */
export interface GroupEquipRelOutput {
  /**
   * 分组id，关联DeviceGroupConfig的id
   * @type {string}
   * @memberof GroupEquipRelOutput
   */
  groupId?: string
  /**
   * 分组名称
   * @type {string}
   * @memberof GroupEquipRelOutput
   */
  groupName?: string | null
  /**
   * 资产或设备id，关联iot中的资产id或设备id
   * @type {string}
   * @memberof GroupEquipRelOutput
   */
  equipmentId?: string
  /**
   * 设备标签
   * @type {string}
   * @memberof GroupEquipRelOutput
   */
  deviceName?: string | null
  /**
   * 设备标签 device label
   * @type {string}
   * @memberof GroupEquipRelOutput
   */
  deviceLabel?: string | null
}
