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
import { AssetInfoOutput } from './asset-info-output'

/**
 *
 * @export
 * @interface AssetInfoOutputPage
 */
export interface AssetInfoOutputPage {
  /**
   *
   * @type {number}
   * @memberof AssetInfoOutputPage
   */
  pageIndex?: number
  /**
   *
   * @type {number}
   * @memberof AssetInfoOutputPage
   */
  pageSize?: number
  /**
   *
   * @type {Array<AssetInfoOutput>}
   * @memberof AssetInfoOutputPage
   */
  list?: Array<AssetInfoOutput> | null
  /**
   *
   * @type {number}
   * @memberof AssetInfoOutputPage
   */
  totalCount?: number
  /**
   *
   * @type {number}
   * @memberof AssetInfoOutputPage
   */
  totalPages?: number
  /**
   *
   * @type {boolean}
   * @memberof AssetInfoOutputPage
   */
  haveNextPage?: boolean
}
