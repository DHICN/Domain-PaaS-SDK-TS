/* eslint-disable */
/**
 * 供水业务中台领域服务
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
import { SPoint } from './spoint'

/**
 *
 * @export
 * @interface PipeValvesItem
 */
export interface PipeValvesItem {
  /**
   * 管段muid
   * @type {string}
   * @memberof PipeValvesItem
   */
  pipeId?: string | null
  /**
   * 爆管的 gis id
   * @type {string}
   * @memberof PipeValvesItem
   */
  gisId?: string | null
  /**
   *
   * @type {SPoint}
   * @memberof PipeValvesItem
   */
  burstPoint?: SPoint
  /**
   * 是否过滤管段上的阀门
   * @type {boolean}
   * @memberof PipeValvesItem
   */
  isFilterValuesOnPipe?: boolean
}
