/* eslint-disable */
/**
 * digital-twin-service
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
 * @interface SaveDaConfigsInput
 */
export interface SaveDaConfigsInput {
  /**
   * 实时校正点显示名称 DA point name
   * @type {string}
   * @memberof SaveDaConfigsInput
   */
  showName?: string | null
  /**
   * 河道名 branch name
   * @type {string}
   * @memberof SaveDaConfigsInput
   */
  branchName: string
  /**
   * 里程数 chainage
   * @type {number}
   * @memberof SaveDaConfigsInput
   */
  chainage: number
  /**
   * 0-WaterLevel(water level) 1-Discharge(discharge) 2-Concentration(concentration)
   * @type {number}
   * @memberof SaveDaConfigsInput
   */
  variableType: SaveDaConfigsInputVariableTypeEnum
  /**
   * 水质项序号 component number
   * @type {number}
   * @memberof SaveDaConfigsInput
   */
  component?: number
  /**
   * dfs0文件相对路径 dfs0 file path
   * @type {string}
   * @memberof SaveDaConfigsInput
   */
  file: string
  /**
   * dfs0文件中项的序号 dfs0 data item number
   * @type {number}
   * @memberof SaveDaConfigsInput
   */
  fileNum: number
  /**
   * 指标Id device indicator id
   * @type {string}
   * @memberof SaveDaConfigsInput
   */
  indicatorId?: string | null
  /**
   * 模板方案Id template scenario id
   * @type {string}
   * @memberof SaveDaConfigsInput
   */
  templateId: string
}

export const SaveDaConfigsInputVariableTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type SaveDaConfigsInputVariableTypeEnum =
  (typeof SaveDaConfigsInputVariableTypeEnum)[keyof typeof SaveDaConfigsInputVariableTypeEnum]