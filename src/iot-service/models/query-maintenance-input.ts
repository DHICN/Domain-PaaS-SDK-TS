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
 * @interface QueryMaintenanceInput
 */
export interface QueryMaintenanceInput {
  /**
   *
   * @type {Array<string>}
   * @memberof QueryMaintenanceInput
   */
  entityIds?: Array<string> | null
  /**
   *
   * @type {string}
   * @memberof QueryMaintenanceInput
   */
  startTime?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryMaintenanceInput
   */
  endTime?: string | null
}
