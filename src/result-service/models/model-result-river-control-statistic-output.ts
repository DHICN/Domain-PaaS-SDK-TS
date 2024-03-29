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
 * 河网补水量/调度统计
 * @export
 * @interface ModelResultRiverControlStatisticOutput
 */
export interface ModelResultRiverControlStatisticOutput {
  /**
   * 坝/闸/泵名称 control name
   * @type {string}
   * @memberof ModelResultRiverControlStatisticOutput
   */
  assetName?: string | null
  /**
   * 类型：pump 泵，dam 坝，gate闸 type:pump,dam,gate
   * @type {string}
   * @memberof ModelResultRiverControlStatisticOutput
   */
  nodeType?: string | null
  /**
   * 最高（低）控制水位/开停次数 开启时长/补水时长 补水总量  data type (maximum (low) control water level/number of starts and stops/Start duration/water make-up duration/Total water make-up)
   * @type {number}
   * @memberof ModelResultRiverControlStatisticOutput
   */
  dataItem?: number
  /**
   * 结果值 value
   * @type {number}
   * @memberof ModelResultRiverControlStatisticOutput
   */
  value?: number
}
