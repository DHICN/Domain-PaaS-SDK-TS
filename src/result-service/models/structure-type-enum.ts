/* eslint-disable */
/**
 * result-analysis-service
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
 * 0-CS_Pump(管网泵) 1-CS_Valve(管网阀) 10-River_Pump(河网泵) 11-River_Gate(河网闸) 12-River_Weir(河网堰(坝))
 * @export
 * @enum {string}
 */

export const StructureTypeEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_10: 10,
  NUMBER_11: 11,
  NUMBER_12: 12,
} as const

export type StructureTypeEnum = (typeof StructureTypeEnum)[keyof typeof StructureTypeEnum]