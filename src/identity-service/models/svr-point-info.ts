/* eslint-disable */
/**
 * identity-service
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
 * @interface SvrPointInfo
 */
export interface SvrPointInfo {
  /**
   *
   * @type {number}
   * @memberof SvrPointInfo
   */
  dataSource?: SvrPointInfoDataSourceEnum
  /**
   *
   * @type {string}
   * @memberof SvrPointInfo
   */
  pointCode?: string | null
}

export const SvrPointInfoDataSourceEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
  3: 3 as number,
} as const

export type SvrPointInfoDataSourceEnum =
  (typeof SvrPointInfoDataSourceEnum)[keyof typeof SvrPointInfoDataSourceEnum]
