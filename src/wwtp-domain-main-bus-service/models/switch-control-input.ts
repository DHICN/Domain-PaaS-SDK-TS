/* eslint-disable */
/**
 * 香港污水厂项目测试
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
 * @interface SwitchControlInput
 */
export interface SwitchControlInput {
  /**
   * 控制模块名称 control module name
   * @type {string}
   * @memberof SwitchControlInput
   */
  moduleName?: string | null
  /**
   * 是否开启远程控制 if enable remote control
   * @type {boolean}
   * @memberof SwitchControlInput
   */
  ifControl?: boolean
}
