/* eslint-disable */
/**
 * 模型编辑服务
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
 * @interface AddFlushingParaDto
 */
export interface AddFlushingParaDto {
  /**
   * 模型中管道ID pipe muid
   * @type {string}
   * @memberof AddFlushingParaDto
   */
  pipeModelId?: string | null
  /**
   * 流入节点 flush from node
   * @type {string}
   * @memberof AddFlushingParaDto
   */
  fromNode?: string | null
  /**
   * 流出节点 flush to node
   * @type {string}
   * @memberof AddFlushingParaDto
   */
  toNode?: string | null
  /**
   * 目标流速 target velocity
   * @type {number}
   * @memberof AddFlushingParaDto
   */
  targetVelocity?: number
  /**
   * 冲洗流量 flushing demand
   * @type {number}
   * @memberof AddFlushingParaDto
   */
  flushingDemand?: number
  /**
   * 冲洗时长 flushing time
   * @type {number}
   * @memberof AddFlushingParaDto
   */
  flushingTime?: number
}
