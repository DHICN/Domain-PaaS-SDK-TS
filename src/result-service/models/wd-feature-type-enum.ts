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
 * 0-Link(管线) 1-Valve(阀门) 2-Node(节点) 3-Tank(水池)
 * @export
 * @enum {string}
 */

export const WdFeatureTypeEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const

export type WdFeatureTypeEnum = (typeof WdFeatureTypeEnum)[keyof typeof WdFeatureTypeEnum]
