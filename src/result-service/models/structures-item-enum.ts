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
 * 0-WaterLevel(泵前池水位) 1-Discharge(流量) 2-WaterDepth(水深) 3-ValveOpening(阀门开度)
 * @export
 * @enum {string}
 */

export const StructuresItemEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const

export type StructuresItemEnum = (typeof StructuresItemEnum)[keyof typeof StructuresItemEnum]