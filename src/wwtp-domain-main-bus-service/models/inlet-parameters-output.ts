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
 * @interface InletParametersOutput
 */
export interface InletParametersOutput {
  /**
   * 参数ID parameter id
   * @type {string}
   * @memberof InletParametersOutput
   */
  id?: string
  /**
   * 参数代码 parameter code
   * @type {string}
   * @memberof InletParametersOutput
   */
  inletComponent?: string | null
  /**
   * 参数描述 parameter description
   * @type {string}
   * @memberof InletParametersOutput
   */
  description?: string | null
  /**
   * 参数值 parameter value
   * @type {number}
   * @memberof InletParametersOutput
   */
  value?: number
}
