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
 * @interface PipeResult
 */
export interface PipeResult {
  /**
   *
   * @type {string}
   * @memberof PipeResult
   */
  pipeID?: string | null
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  diameter?: number
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  length?: number
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  absFlow?: number
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  headloss?: number
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  velocityMax?: number
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  velocityChange?: number
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  shearStress?: number
  /**
   *
   * @type {string}
   * @memberof PipeResult
   */
  criteriaType?: string | null
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  criteriaValue?: number
  /**
   *
   * @type {string}
   * @memberof PipeResult
   */
  criteriaPct?: string | null
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  flushingTime?: number
  /**
   *
   * @type {number}
   * @memberof PipeResult
   */
  flushingPct?: number
  /**
   *
   * @type {string}
   * @memberof PipeResult
   */
  comment?: string | null
}
