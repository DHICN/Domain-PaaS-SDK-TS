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
 * @interface FeedBackTarget
 */
export interface FeedBackTarget {
  /**
   *
   * @type {string}
   * @memberof FeedBackTarget
   */
  deviceName?: string | null
  /**
   *
   * @type {string}
   * @memberof FeedBackTarget
   */
  indicator?: string | null
  /**
   * 后馈目标值
   * @type {number}
   * @memberof FeedBackTarget
   */
  targetValue?: number
}
