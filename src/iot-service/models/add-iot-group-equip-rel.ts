/* eslint-disable */
/**
 * iot-service
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
 * @interface AddIotGroupEquipRel
 */
export interface AddIotGroupEquipRel {
  /**
   * 分组id，关联DeviceGroupConfig的id
   * @type {string}
   * @memberof AddIotGroupEquipRel
   */
  groupId?: string
  /**
   * 资产或设备id，关联iot中的资产id或设备id
   * @type {string}
   * @memberof AddIotGroupEquipRel
   */
  equipmentId?: string
}
