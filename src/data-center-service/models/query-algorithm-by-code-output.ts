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
 * @interface QueryAlgorithmByCodeOutput
 */
export interface QueryAlgorithmByCodeOutput {
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  algorithmCode?: string | null
  /**
   * 算法名称
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  algorithmName?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  ip?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  port?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  scriptName?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  scriptFilePath?: string | null
  /**
   * 脚本启用状态：0停用，1启用
   * @type {number}
   * @memberof QueryAlgorithmByCodeOutput
   */
  status?: number
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  tenantId?: string | null
  /**
   * 算法运行url
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  algorithmRunUrl?: string | null
  /**
   * 备注
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  remark?: string | null
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  creationTime?: string
  /**
   *
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  lastModificationTime?: string | null
  /**
   * 脚本类型 ExportReport-导出报告，CleaningAlgorithm-清洗算法
   * @type {string}
   * @memberof QueryAlgorithmByCodeOutput
   */
  scriptType?: string | null
}
