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
import { ValveDto } from './valve-dto'
// May contain unused imports in some cases
// @ts-ignore
import { WdEventDetailInput } from './wd-event-detail-input'

/**
 *
 * @export
 * @interface SavePipeBurstInfoInputV2
 */
export interface SavePipeBurstInfoInputV2 {
  /**
   * 事故名称
   * @type {string}
   * @memberof SavePipeBurstInfoInputV2
   */
  accidentName?: string | null
  /**
   * 方案id
   * @type {string}
   * @memberof SavePipeBurstInfoInputV2
   */
  scenarioId?: string
  /**
   * 爆管或关阀事件列表，同一个事故下面可能会有多个事件，例如：一个爆管事故通常会包含一个爆管泄水事件和关阀事件
   * @type {Array<WdEventDetailInput>}
   * @memberof SavePipeBurstInfoInputV2
   */
  pipeBurstEvents?: Array<WdEventDetailInput> | null
  /**
   * 需要关闭的阀门
   * @type {Array<ValveDto>}
   * @memberof SavePipeBurstInfoInputV2
   */
  closeValveList?: Array<ValveDto> | null
}
