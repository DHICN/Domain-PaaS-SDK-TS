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
 * @interface ConfigItem
 */
export interface ConfigItem {
  /**
   * 配置项代码 config code
   * @type {number}
   * @memberof ConfigItem
   */
  configCode?: number
  /**
   * 配置项名称 config name
   * @type {string}
   * @memberof ConfigItem
   */
  configName?: string | null
  /**
   * 配置项描述 config description
   * @type {string}
   * @memberof ConfigItem
   */
  configDesc?: string | null
  /**
   * 是否被选中 if selected
   * @type {boolean}
   * @memberof ConfigItem
   */
  selected?: boolean
}
