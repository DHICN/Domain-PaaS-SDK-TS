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

// May contain unused imports in some cases
// @ts-ignore
import { FeedBackTarget } from './feed-back-target'

/**
 *
 * @export
 * @interface ProduceNewCmdInput
 */
export interface ProduceNewCmdInput {
  /**
   * 控制设备名
   * @type {string}
   * @memberof ProduceNewCmdInput
   */
  controlDeviceName?: string | null
  /**
   * 控制指标
   * @type {string}
   * @memberof ProduceNewCmdInput
   */
  controlIndicator?: string | null
  /**
   * 控制值
   * @type {number}
   * @memberof ProduceNewCmdInput
   */
  controlValue?: number
  /**
   * 后馈目标（可能包含多个后馈目标）
   * @type {Array<FeedBackTarget>}
   * @memberof ProduceNewCmdInput
   */
  feedBackTarget?: Array<FeedBackTarget> | null
}