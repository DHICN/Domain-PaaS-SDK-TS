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

/**
 *
 * @export
 * @interface GetAccuracyPara
 */
export interface GetAccuracyPara {
  /**
   * 方案id
   * @type {string}
   * @memberof GetAccuracyPara
   */
  scenarioId?: string
  /**
   * 数据类型
   * @type {Array<number>}
   * @memberof GetAccuracyPara
   */
  dataTypes?: Array<GetAccuracyParaDataTypesEnum>
  /**
   * 是否强制刷新缓存
   * @type {boolean}
   * @memberof GetAccuracyPara
   */
  bForceRefreshCache?: boolean
}

export const GetAccuracyParaDataTypesEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
  3: 3 as number,
  4: 4 as number,
  5: 5 as number,
  6: 6 as number,
  7: 7 as number,
  8: 8 as number,
  9: 9 as number,
} as const

export type GetAccuracyParaDataTypesEnum =
  (typeof GetAccuracyParaDataTypesEnum)[keyof typeof GetAccuracyParaDataTypesEnum]