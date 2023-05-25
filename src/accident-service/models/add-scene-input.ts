/* eslint-disable */
/**
 * accident-manager-service
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
 *
 * @export
 * @interface AddSceneInput
 */
export interface AddSceneInput {
  /**
   * 关联事故Id accident id
   * @type {string}
   * @memberof AddSceneInput
   */
  accidentId?: string
  /**
   * 情景名 scene name
   * @type {string}
   * @memberof AddSceneInput
   */
  name?: string | null
  /**
   * 备注 scene remark
   * @type {string}
   * @memberof AddSceneInput
   */
  remark?: string | null
}