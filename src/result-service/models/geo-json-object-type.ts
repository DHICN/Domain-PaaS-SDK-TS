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
 * 0-Point  1-MultiPoint  2-LineString  3-MultiLineString  4-Polygon  5-MultiPolygon  6-GeometryCollection  7-Feature  8-FeatureCollection
 * @export
 * @enum {string}
 */

export const GeoJsonObjectType = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
} as const

export type GeoJsonObjectType = (typeof GeoJsonObjectType)[keyof typeof GeoJsonObjectType]