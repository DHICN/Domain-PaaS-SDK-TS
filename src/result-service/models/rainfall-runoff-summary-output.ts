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
import { RrSummaryPerCatchment } from './rr-summary-per-catchment'

/**
 *
 * @export
 * @interface RainfallRunoffSummaryOutput
 */
export interface RainfallRunoffSummaryOutput {
  /**
   * 初始水量 start Volume
   * @type {number}
   * @memberof RainfallRunoffSummaryOutput
   */
  startVolume?: number
  /**
   * 总入流量 total inflow
   * @type {number}
   * @memberof RainfallRunoffSummaryOutput
   */
  totalInflow?: number
  /**
   * 总降雨量 net rainfall
   * @type {number}
   * @memberof RainfallRunoffSummaryOutput
   */
  netRainfall?: number
  /**
   * 总流失量 total losses
   * @type {number}
   * @memberof RainfallRunoffSummaryOutput
   */
  totalLosses?: number
  /**
   * 汇水区的径流总量 total runoff discharge
   * @type {number}
   * @memberof RainfallRunoffSummaryOutput
   */
  runoffDischarge?: number
  /**
   * 终止水量 end volume
   * @type {number}
   * @memberof RainfallRunoffSummaryOutput
   */
  endVolume?: number
  /**
   * 每个汇水区的降雨径流统计结果 summary of each catchment
   * @type {Array<RrSummaryPerCatchment>}
   * @memberof RainfallRunoffSummaryOutput
   */
  summaryPerCatchment?: Array<RrSummaryPerCatchment> | null
}
