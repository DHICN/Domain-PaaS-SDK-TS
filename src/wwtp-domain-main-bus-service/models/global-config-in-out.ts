/* eslint-disable */
/**
 * 污水业务中台领域服务
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
 * @interface GlobalConfigInOut
 */
export interface GlobalConfigInOut {
  /**
   * 配置ID config id
   * @type {string}
   * @memberof GlobalConfigInOut
   */
  id?: string
  /**
   * 配置类型 config type
   * @type {string}
   * @memberof GlobalConfigInOut
   */
  configType?: string | null
  /**
   * 配置描述 config description
   * @type {string}
   * @memberof GlobalConfigInOut
   */
  description?: string | null
  /**
   * 值 value
   * @type {number}
   * @memberof GlobalConfigInOut
   */
  value?: number
}
