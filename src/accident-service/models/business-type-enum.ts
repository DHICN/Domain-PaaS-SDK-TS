/* eslint-disable */
/**
 * accident-manager-service
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
 * 0-Undefined 1-WD 2-WQ 3-UrbanFlooding
 * @export
 * @enum {string}
 */

export const BusinessTypeEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
} as const

export type BusinessTypeEnum = (typeof BusinessTypeEnum)[keyof typeof BusinessTypeEnum]
