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
 * @interface GetStatisticResultDto
 */
export interface GetStatisticResultDto {
  /**
   * 统计码
   * @type {string}
   * @memberof GetStatisticResultDto
   */
  statisticCode?: string | null
  /**
   * 时间
   * @type {string}
   * @memberof GetStatisticResultDto
   */
  time?: string
  /**
   * 值
   * @type {number}
   * @memberof GetStatisticResultDto
   */
  value?: number
}
