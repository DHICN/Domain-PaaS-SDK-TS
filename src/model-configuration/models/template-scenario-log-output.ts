/* eslint-disable */
/**
 * model-configuration-service
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
 * @interface TemplateScenarioLogOutput
 */
export interface TemplateScenarioLogOutput {
  /**
   * 配置进度信息ID configuration progress id
   * @type {string}
   * @memberof TemplateScenarioLogOutput
   */
  id?: string
  /**
   * 模板方案ID template scenario id
   * @type {string}
   * @memberof TemplateScenarioLogOutput
   */
  scenarioId?: string
  /**
   * 配置步骤代码 configuration step code
   * @type {string}
   * @memberof TemplateScenarioLogOutput
   */
  code?: string | null
  /**
   * 配置步骤描述 configuration step description
   * @type {string}
   * @memberof TemplateScenarioLogOutput
   */
  description?: string | null
  /**
   * 是否配置成功 if the configuration step is successful
   * @type {boolean}
   * @memberof TemplateScenarioLogOutput
   */
  success?: boolean
  /**
   * 是否必需 if the configuration step is required
   * @type {boolean}
   * @memberof TemplateScenarioLogOutput
   */
  required?: boolean
  /**
   * 备注 remark
   * @type {string}
   * @memberof TemplateScenarioLogOutput
   */
  remark?: string | null
  /**
   * 最后一次修改时间 last modify time
   * @type {string}
   * @memberof TemplateScenarioLogOutput
   */
  lastModificationTime?: string | null
}
