/* eslint-disable */
/**
 * identity-service
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
 * @interface QueryOrganizationOutput
 */
export interface QueryOrganizationOutput {
  /**
   *
   * @type {string}
   * @memberof QueryOrganizationOutput
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof QueryOrganizationOutput
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryOrganizationOutput
   */
  levelCode?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryOrganizationOutput
   */
  parentLevelCode?: string | null
  /**
   *
   * @type {boolean}
   * @memberof QueryOrganizationOutput
   */
  isHasChildren?: boolean
  /**
   *
   * @type {Array<QueryOrganizationOutput>}
   * @memberof QueryOrganizationOutput
   */
  children?: Array<QueryOrganizationOutput> | null
}