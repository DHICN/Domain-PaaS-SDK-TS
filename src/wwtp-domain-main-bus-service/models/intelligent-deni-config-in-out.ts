/* eslint-disable */
/**
 * 污水业务中台领域服务
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
 * @interface IntelligentDeniConfigInOut
 */
export interface IntelligentDeniConfigInOut {
  /**
   * 配置ID config id
   * @type {string}
   * @memberof IntelligentDeniConfigInOut
   */
  id?: string
  /**
   * 展示类型枚举 display type
   * @type {number}
   * @memberof IntelligentDeniConfigInOut
   */
  displayType?: number
  /**
   * 展示类型名称 display type name
   * @type {string}
   * @memberof IntelligentDeniConfigInOut
   */
  displayTypeName?: string | null
  /**
   * 系统点位编码，逗号分割 system point codes, seperated by comma
   * @type {string}
   * @memberof IntelligentDeniConfigInOut
   */
  codes?: string | null
  /**
   * 点位类型 point type
   * @type {string}
   * @memberof IntelligentDeniConfigInOut
   */
  subType?: string | null
  /**
   * 是否为输入点位 if it is an online point for input
   * @type {boolean}
   * @memberof IntelligentDeniConfigInOut
   */
  isInputPoint?: boolean
  /**
   * 扩展信息，生化池序号 extend information for biochemical pool index
   * @type {string}
   * @memberof IntelligentDeniConfigInOut
   */
  extInfo?: string | null
  /**
   * 生产线代码 product line code
   * @type {string}
   * @memberof IntelligentDeniConfigInOut
   */
  productLine?: string | null
  /**
   * 药剂投加类别
   * @type {number}
   * @memberof IntelligentDeniConfigInOut
   */
  category?: IntelligentDeniConfigInOutCategoryEnum
}

export const IntelligentDeniConfigInOutCategoryEnum = {
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
} as const

export type IntelligentDeniConfigInOutCategoryEnum =
  (typeof IntelligentDeniConfigInOutCategoryEnum)[keyof typeof IntelligentDeniConfigInOutCategoryEnum]
