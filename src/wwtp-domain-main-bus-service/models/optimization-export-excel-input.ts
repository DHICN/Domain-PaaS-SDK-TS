/* eslint-disable */
/**
 * 污水业务中台领域服务-v4
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
 * @interface OptimizationExportExcelInput
 */
export interface OptimizationExportExcelInput {
  /**
   * 开始时刻 start time
   * @type {string}
   * @memberof OptimizationExportExcelInput
   */
  startTime?: string
  /**
   * 结束时刻 end time
   * @type {string}
   * @memberof OptimizationExportExcelInput
   */
  endTime?: string
  /**
   * 模板模型名称 template model name
   * @type {string}
   * @memberof OptimizationExportExcelInput
   */
  modelName?: string | null
  /**
   * 工艺线编码 product line code
   * @type {string}
   * @memberof OptimizationExportExcelInput
   */
  productLine?: string | null
  /**
   * 控制对比枚举 control compare enum
   * @type {Array<number>}
   * @memberof OptimizationExportExcelInput
   */
  controlCompareSubEnums?: Array<OptimizationExportExcelInputControlCompareSubEnumsEnum>
}

export const OptimizationExportExcelInputControlCompareSubEnumsEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
} as const

export type OptimizationExportExcelInputControlCompareSubEnumsEnum =
  (typeof OptimizationExportExcelInputControlCompareSubEnumsEnum)[keyof typeof OptimizationExportExcelInputControlCompareSubEnumsEnum]