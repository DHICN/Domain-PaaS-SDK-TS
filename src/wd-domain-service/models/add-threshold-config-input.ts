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

/**
 *
 * @export
 * @interface AddThresholdConfigInput
 */
export interface AddThresholdConfigInput {
  /**
   * 阈值类型
   * @type {number}
   * @memberof AddThresholdConfigInput
   */
  thresholdType?: AddThresholdConfigInputThresholdTypeEnum
  /**
   * 数值类型
   * @type {string}
   * @memberof AddThresholdConfigInput
   */
  type?: string | null
  /**
   * 类型-中文显示
   * @type {string}
   * @memberof AddThresholdConfigInput
   */
  typeName?: string | null
  /**
   * 阈值
   * @type {number}
   * @memberof AddThresholdConfigInput
   */
  threshold?: number
  /**
   * 单位
   * @type {string}
   * @memberof AddThresholdConfigInput
   */
  unit?: string | null
  /**
   * 描述
   * @type {string}
   * @memberof AddThresholdConfigInput
   */
  description?: string | null
  /**
   * 备注
   * @type {string}
   * @memberof AddThresholdConfigInput
   */
  remark?: string | null
}

export const AddThresholdConfigInputThresholdTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
} as const

export type AddThresholdConfigInputThresholdTypeEnum =
  (typeof AddThresholdConfigInputThresholdTypeEnum)[keyof typeof AddThresholdConfigInputThresholdTypeEnum]