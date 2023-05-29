/* eslint-disable */
/**
 * model-information-service
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
 * @interface FlushingParaDto
 */
export interface FlushingParaDto {
  /**
   * 模型中管道ID pipe muid
   * @type {string}
   * @memberof FlushingParaDto
   */
  pipeModelId?: string | null
  /**
   * 流入节点 flush from node
   * @type {string}
   * @memberof FlushingParaDto
   */
  fromNode?: string | null
  /**
   * 流出节点 flush to node
   * @type {string}
   * @memberof FlushingParaDto
   */
  toNode?: string | null
  /**
   * 目标流速 target velocity
   * @type {number}
   * @memberof FlushingParaDto
   */
  targetVelocity?: number
  /**
   * 冲洗流量 flushing demand
   * @type {number}
   * @memberof FlushingParaDto
   */
  flushingDemand?: number
  /**
   * 冲洗时长 flushing time
   * @type {number}
   * @memberof FlushingParaDto
   */
  flushingTime?: number
  /**
   * 管道冲洗参数ID pipe flushing parameter id
   * @type {string}
   * @memberof FlushingParaDto
   */
  id?: string
}
