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
 * @interface UpdateAssetInput
 */
export interface UpdateAssetInput {
  /**
   * 资产名称 asset name
   * @type {string}
   * @memberof UpdateAssetInput
   */
  name: string
  /**
   * 父资产
   * @type {string}
   * @memberof UpdateAssetInput
   */
  parentAssetName?: string | null
  /**
   * 资产类型（自定义） asset type (customized)
   * @type {string}
   * @memberof UpdateAssetInput
   */
  type: string
  /**
   * 资产标签 asset label
   * @type {string}
   * @memberof UpdateAssetInput
   */
  label?: string | null
  /**
   * 资产描述 asset description
   * @type {string}
   * @memberof UpdateAssetInput
   */
  description?: string | null
  /**
   * 资产自定义属性 asset customized attributes
   * @type {Array<StringStringKeyValue>}
   * @memberof UpdateAssetInput
   */
  attributes?: Array<StringStringKeyValue> | null
  /**
   * 资产Id asset Id
   * @type {string}
   * @memberof UpdateAssetInput
   */
  id: string
  /**
   * 创建时间 asset createtion time
   * @type {number}
   * @memberof UpdateAssetInput
   */
  createdTime?: number
}
