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
import { Paint } from './paint'

/**
 *
 * @export
 * @interface Layer
 */
export interface Layer {
  /**
   *
   * @type {Array<string>}
   * @memberof Layer
   */
  filter?: Array<string> | null
  /**
   *
   * @type {string}
   * @memberof Layer
   */
  id?: string | null
  /**
   *
   * @type {Paint}
   * @memberof Layer
   */
  paint?: Paint
  /**
   *
   * @type {string}
   * @memberof Layer
   */
  source?: string | null
  /**
   *
   * @type {string}
   * @memberof Layer
   */
  sourcelayer?: string | null
  /**
   *
   * @type {string}
   * @memberof Layer
   */
  type?: string | null
}
