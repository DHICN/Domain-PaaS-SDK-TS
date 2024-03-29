/* eslint-disable */
/**
 * 模型配置服务
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
 * @interface GetFloodingThresholdOutput
 */
export interface GetFloodingThresholdOutput {
  /**
   * 内涝风险等级配置ID flood risk level config id
   * @type {string}
   * @memberof GetFloodingThresholdOutput
   */
  id?: string
  /**
   * 最小积水深度 flood depth min value
   * @type {number}
   * @memberof GetFloodingThresholdOutput
   */
  floodRiskType?: number | null
  /**
   * 最小积水深度 flood depth min value
   * @type {number}
   * @memberof GetFloodingThresholdOutput
   */
  floodDepthMin?: number
  /**
   * 积水深度单位，默认米 the unit of water depth, default m
   * @type {string}
   * @memberof GetFloodingThresholdOutput
   */
  floodDepthUnit?: string | null
  /**
   * 最小积水时长 flood duration min value
   * @type {number}
   * @memberof GetFloodingThresholdOutput
   */
  rainTimeMin?: number
  /**
   * 积水时长单位，默认分钟 the unit of flood duration, default minute
   * @type {string}
   * @memberof GetFloodingThresholdOutput
   */
  rainTimeUnit?: string | null
  /**
   * 内涝风险等级 flood risk level
   * @type {number}
   * @memberof GetFloodingThresholdOutput
   */
  grade?: number
  /**
   * 内涝风险等级描述 flood risk level description
   * @type {string}
   * @memberof GetFloodingThresholdOutput
   */
  description?: string | null
}
