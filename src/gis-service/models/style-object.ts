/* eslint-disable */
/**
 * GIS服务
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
import { Layer } from './layer'
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata'

/**
 *
 * @export
 * @interface StyleObject
 */
export interface StyleObject {
  /**
   *
   * @type {number}
   * @memberof StyleObject
   */
  version?: number
  /**
   *
   * @type {string}
   * @memberof StyleObject
   */
  name?: string | null
  /**
   *
   * @type {Metadata}
   * @memberof StyleObject
   */
  metadata?: Metadata
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof StyleObject
   */
  sources?: { [key: string]: object } | null
  /**
   *
   * @type {string}
   * @memberof StyleObject
   */
  sprite?: string | null
  /**
   *
   * @type {string}
   * @memberof StyleObject
   */
  glyphs?: string | null
  /**
   *
   * @type {Array<Layer>}
   * @memberof StyleObject
   */
  layers?: Array<Layer> | null
  /**
   *
   * @type {string}
   * @memberof StyleObject
   */
  id?: string | null
}
