/* eslint-disable */
/**
 * 模型计算服务
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
 * 0-Computed 1-Waiting 2-Computing 3-UnCompute -3-Cancelling -2-Canceled -1-Failed
 * @export
 * @enum {string}
 */

export const EnumStatus = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_MINUS_3: -3,
  NUMBER_MINUS_2: -2,
  NUMBER_MINUS_1: -1,
} as const

export type EnumStatus = (typeof EnumStatus)[keyof typeof EnumStatus]
