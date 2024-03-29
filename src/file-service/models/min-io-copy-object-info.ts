/* eslint-disable */
/**
 * 文件服务
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
 * @interface MinIoCopyObjectInfo
 */
export interface MinIoCopyObjectInfo {
  /**
   *
   * @type {string}
   * @memberof MinIoCopyObjectInfo
   */
  userName: string
  /**
   *
   * @type {string}
   * @memberof MinIoCopyObjectInfo
   */
  projName: string
  /**
   *
   * @type {number}
   * @memberof MinIoCopyObjectInfo
   */
  userType: number
  /**
   *
   * @type {number}
   * @memberof MinIoCopyObjectInfo
   */
  accessProp: number
  /**
   *
   * @type {string}
   * @memberof MinIoCopyObjectInfo
   */
  sourceBucket: string
  /**
   *
   * @type {string}
   * @memberof MinIoCopyObjectInfo
   */
  destBucket?: string | null
  /**
   *
   * @type {string}
   * @memberof MinIoCopyObjectInfo
   */
  sourceFolder: string
  /**
   *
   * @type {string}
   * @memberof MinIoCopyObjectInfo
   */
  destFolder?: string | null
}
