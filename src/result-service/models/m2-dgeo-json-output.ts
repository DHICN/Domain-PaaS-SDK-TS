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

// May contain unused imports in some cases
// @ts-ignore
import { GeoJsonOuput } from './geo-json-ouput'
// May contain unused imports in some cases
// @ts-ignore
import { GradeInfo } from './grade-info'

/**
 *
 * @export
 * @interface M2DGeoJsonOutput
 */
export interface M2DGeoJsonOutput {
  /**
   * 每个时刻对应的矢量等值面图结果数据 vector data of the contour map result of each time step
   * @type {Array<GeoJsonOuput>}
   * @memberof M2DGeoJsonOutput
   */
  geoJsons?: Array<GeoJsonOuput> | null
  /**
   * 每个等级对应的范围和颜色 value range and color of each grades
   * @type {Array<GradeInfo>}
   * @memberof M2DGeoJsonOutput
   */
  grades?: Array<GradeInfo> | null
}
