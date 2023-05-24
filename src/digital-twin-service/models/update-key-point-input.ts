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
import { StringStringKeyValue } from './string-string-key-value'

/**
 *
 * @export
 * @interface UpdateKeyPointInput
 */
export interface UpdateKeyPointInput {
  /**
   * 重要点位ID key point id
   * @type {string}
   * @memberof UpdateKeyPointInput
   */
  id?: string
  /**
   * 重要点位显示名称 key point show name
   * @type {string}
   * @memberof UpdateKeyPointInput
   */
  showName?: string | null
  /**
   * 重要点位与模型点位对应关系的ID列表 mapping relation ids of key point and model point
   * @type {Array<string>}
   * @memberof UpdateKeyPointInput
   */
  keyPointDetails?: Array<string> | null
  /**
   * 重要点位属性信息 key point attributes
   * @type {Array<StringStringKeyValue>}
   * @memberof UpdateKeyPointInput
   */
  attributes?: Array<StringStringKeyValue> | null
}
