/* eslint-disable */
/**
 * digital-twin-service
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
import { Geometry } from './geometry'
// May contain unused imports in some cases
// @ts-ignore
import { ModelPointAttributeOutput } from './model-point-attribute-output'

/**
 *
 * @export
 * @interface ModelPointOutput
 */
export interface ModelPointOutput {
  /**
   * 模型点位ID model point id
   * @type {string}
   * @memberof ModelPointOutput
   */
  id?: string
  /**
   * 模型类型 model type
   * @type {string}
   * @memberof ModelPointOutput
   */
  modelType?: string | null
  /**
   * 模型点位类型 model point type
   * @type {string}
   * @memberof ModelPointOutput
   */
  modelPointType?: string | null
  /**
   * 模型中对应的ID model muid
   * @type {string}
   * @memberof ModelPointOutput
   */
  modelId?: string | null
  /**
   * 点位类型名称 model point type name
   * @type {string}
   * @memberof ModelPointOutput
   */
  name?: string | null
  /**
   * 模型点位属性信息 model point attributes
   * @type {Array<ModelPointAttributeOutput>}
   * @memberof ModelPointOutput
   */
  attributes?: Array<ModelPointAttributeOutput> | null
  /**
   *
   * @type {Geometry}
   * @memberof ModelPointOutput
   */
  geoMeth?: Geometry
}
