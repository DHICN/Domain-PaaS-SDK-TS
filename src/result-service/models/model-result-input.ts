/* eslint-disable */
/**
 * 模型结果服务
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
 * @interface ModelResultInput
 */
export interface ModelResultInput {
  /**
   * 模型ID
   * @type {string}
   * @memberof ModelResultInput
   */
  modelFeatureId: string
  /**
   * 开始时间
   * @type {string}
   * @memberof ModelResultInput
   */
  startTime: string
  /**
   * 结束时间
   * @type {string}
   * @memberof ModelResultInput
   */
  endTime: string
  /**
   *
   * @type {string}
   * @memberof ModelResultInput
   */
  scene: string
  /**
   * 排序方式，ASC (升序)，DESC (降序) sort order, ASC (ASCENDING) or DESC (DESCENDING);默认是降序DESC
   * @type {string}
   * @memberof ModelResultInput
   */
  orderBy?: string | null
}