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

// May contain unused imports in some cases
// @ts-ignore
import { FlushingResultItemDto } from './flushing-result-item-dto'

/**
 *
 * @export
 * @interface FlushingResultDto
 */
export interface FlushingResultDto {
  /**
   * 冲洗次数
   * @type {number}
   * @memberof FlushingResultDto
   */
  flushingCount?: number
  /**
   * 最低压力保障
   * @type {number}
   * @memberof FlushingResultDto
   */
  lowestPressure?: number
  /**
   * 起点
   * @type {string}
   * @memberof FlushingResultDto
   */
  startNode?: string | null
  /**
   * 起点水头值
   * @type {number}
   * @memberof FlushingResultDto
   */
  startNodeHead?: number
  /**
   * 终点
   * @type {string}
   * @memberof FlushingResultDto
   */
  endNode?: string | null
  /**
   * 终点水头值
   * @type {number}
   * @memberof FlushingResultDto
   */
  endNodeHead?: number
  /**
   * 冲洗时刻
   * @type {string}
   * @memberof FlushingResultDto
   */
  flushingTime?: string
  /**
   * 冲洗时长（h）
   * @type {number}
   * @memberof FlushingResultDto
   */
  totalDuration?: number
  /**
   * 冲洗流量
   * @type {number}
   * @memberof FlushingResultDto
   */
  flushingFlow?: number
  /**
   *
   * @type {Array<FlushingResultItemDto>}
   * @memberof FlushingResultDto
   */
  flushingResultItems?: Array<FlushingResultItemDto> | null
}
