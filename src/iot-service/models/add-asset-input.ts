/* eslint-disable */
/**
 * IoT服务
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
import { StringStringKeyValue } from './string-string-key-value'

/**
 *
 * @export
 * @interface AddAssetInput
 */
export interface AddAssetInput {
  /**
   * 资产名称 asset name
   * @type {string}
   * @memberof AddAssetInput
   */
  name: string
  /**
   * 父资产
   * @type {string}
   * @memberof AddAssetInput
   */
  parentAssetName?: string | null
  /**
   * 资产类型（自定义） asset type (customized)
   * @type {string}
   * @memberof AddAssetInput
   */
  type: string
  /**
   * 资产标签 asset label
   * @type {string}
   * @memberof AddAssetInput
   */
  label?: string | null
  /**
   * 资产描述 asset description
   * @type {string}
   * @memberof AddAssetInput
   */
  description?: string | null
  /**
   * 资产自定义属性 asset customized attributes
   * @type {Array<StringStringKeyValue>}
   * @memberof AddAssetInput
   */
  attributes?: Array<StringStringKeyValue> | null
}
