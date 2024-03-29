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
 * @interface DeviceMaintenanceOutput
 */
export interface DeviceMaintenanceOutput {
  /**
   *
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  entityId?: string
  /**
   * 0-TENANT_PROFILE(租户配置实体) 1-TENANT(租户实体) 2-CUSTOMER(客户实体) 3-DEVICE(设备实体) 4-ASSET(资产实体) 5-DEVICE_PROFILE(资产实体)
   * @type {number}
   * @memberof DeviceMaintenanceOutput
   */
  entityType?: DeviceMaintenanceOutputEntityTypeEnum
  /**
   *
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  maintenance?: string | null
  /**
   *
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  time?: string
  /**
   *
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  id?: string
}

export const DeviceMaintenanceOutputEntityTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
  '5': 5 as number,
} as const

export type DeviceMaintenanceOutputEntityTypeEnum =
  (typeof DeviceMaintenanceOutputEntityTypeEnum)[keyof typeof DeviceMaintenanceOutputEntityTypeEnum]
