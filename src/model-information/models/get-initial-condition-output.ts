/* eslint-disable */
/**
 * 模型编辑服务
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
 * @interface GetInitialConditionOutput
 */
export interface GetInitialConditionOutput {
  /**
   * 热启动方案ID hotstart scenario ID
   * @type {string}
   * @memberof GetInitialConditionOutput
   */
  hotstartScenario?: string | null
  /**
   * 河道模型热启动文件 river hotstart file
   * @type {string}
   * @memberof GetInitialConditionOutput
   */
  riverHotstartFile?: string | null
  /**
   * 管网模型热启动文件 pipe hotstart file
   * @type {string}
   * @memberof GetInitialConditionOutput
   */
  pipeHotstartFile?: string | null
  /**
   * 二维模型热启动文件 2D hotstart file
   * @type {string}
   * @memberof GetInitialConditionOutput
   */
  m2DHotstartFile?: string | null
}
