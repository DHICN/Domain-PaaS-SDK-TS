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
 * @interface MinioFileObjectInfo
 */
export interface MinioFileObjectInfo {
  /**
   *
   * @type {string}
   * @memberof MinioFileObjectInfo
   */
  filePath?: string | null
  /**
   *
   * @type {string}
   * @memberof MinioFileObjectInfo
   */
  fileName?: string | null
  /**
   *
   * @type {string}
   * @memberof MinioFileObjectInfo
   */
  modifyDate?: string | null
  /**
   *
   * @type {string}
   * @memberof MinioFileObjectInfo
   */
  lastModified?: string | null
  /**
   *
   * @type {string}
   * @memberof MinioFileObjectInfo
   */
  fileTag?: string | null
  /**
   *
   * @type {number}
   * @memberof MinioFileObjectInfo
   */
  fileSize?: number
  /**
   *
   * @type {boolean}
   * @memberof MinioFileObjectInfo
   */
  operateFlag?: boolean
}
