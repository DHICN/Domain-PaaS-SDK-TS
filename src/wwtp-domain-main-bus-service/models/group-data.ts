/* eslint-disable */
/**
 * 污水业务中台领域服务
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
 * @interface GroupData
 */
export interface GroupData {
  /**
   * 看板项名称 statistic item name
   * @type {string}
   * @memberof GroupData
   */
  boardName?: string | null
  /**
   * 看板项数值 statistic item value
   * @type {number}
   * @memberof GroupData
   */
  boardValue?: number | null
  /**
   * 看板项单位 statistic item unit
   * @type {string}
   * @memberof GroupData
   */
  unit?: string | null
}
