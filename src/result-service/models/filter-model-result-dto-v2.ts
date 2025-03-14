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
import { CustomQueryField } from './custom-query-field'
// May contain unused imports in some cases
// @ts-ignore
import { FieldValue } from './field-value'
// May contain unused imports in some cases
// @ts-ignore
import { RelatedUser } from './related-user'

/**
 *
 * @export
 * @interface FilterModelResultDtoV2
 */
export interface FilterModelResultDtoV2 {
  /**
   *
   * @type {Array<CustomQueryField>}
   * @memberof FilterModelResultDtoV2
   */
  customQueryFields?: Array<CustomQueryField> | null
  /**
   *
   * @type {Array<FieldValue>}
   * @memberof FilterModelResultDtoV2
   */
  fieldValues?: Array<FieldValue> | null
  /**
   *
   * @type {Array<RelatedUser>}
   * @memberof FilterModelResultDtoV2
   */
  relatedUsers?: Array<RelatedUser> | null
}
