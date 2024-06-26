/* eslint-disable */
/**
 * 数据中台服务
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
 * @interface AddAlgorithmInstanceInput
 */
export interface AddAlgorithmInstanceInput {
  /**
   * 算法编码code
   * @type {string}
   * @memberof AddAlgorithmInstanceInput
   */
  algorithmCode: string
  /**
   * 算法id
   * @type {string}
   * @memberof AddAlgorithmInstanceInput
   */
  algorithmId?: string
  /**
   * 自定义端口映射
   * @type {Array<string>}
   * @memberof AddAlgorithmInstanceInput
   */
  customPortMap?: Array<string> | null
}
