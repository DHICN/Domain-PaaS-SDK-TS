/* eslint-disable */
/**
 * wd-domain-service
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
import { GisValveInfo } from './gis-valve-info'
// May contain unused imports in some cases
// @ts-ignore
import { WdEventDetailInput } from './wd-event-detail-input'

/**
 *
 * @export
 * @interface SavePipeBurstInfoInput
 */
export interface SavePipeBurstInfoInput {
  /**
   * 事故名称
   * @type {string}
   * @memberof SavePipeBurstInfoInput
   */
  accidentName?: string | null
  /**
   * 方案id
   * @type {string}
   * @memberof SavePipeBurstInfoInput
   */
  scenarioId?: string
  /**
   * 爆管事件列表
   * @type {Array<WdEventDetailInput>}
   * @memberof SavePipeBurstInfoInput
   */
  pipeBurstEvents?: Array<WdEventDetailInput> | null
  /**
   * 阀门信息
   * @type {Array<GisValveInfo>}
   * @memberof SavePipeBurstInfoInput
   */
  gisValveInfoList?: Array<GisValveInfo> | null
}