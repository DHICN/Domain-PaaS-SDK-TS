/* eslint-disable */
/**
 * 模型映射服务
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
 * @interface ModelBoundaryConfigFormatOutput
 */
export interface ModelBoundaryConfigFormatOutput {
  /**
   * 配置项ID configuration id
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  id?: string
  /**
   * 模型点位ID model point id
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  modelPointId?: string
  /**
   * 边界显示名称 bounary show name
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  showName?: string | null
  /**
   * 边界时间序列数据dfs0文件的相对路径 Dfs0 file path
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  dfs0File?: string | null
  /**
   * 边界时间序列数据Dfs0文件中的数据项名称 Dfs0 data item
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  dataItem?: string | null
  /**
   * 对应的设备指标信息，采用灵活的JSON格式 corresponding device indicators in json format
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  pointJson?: string | null
  /**
   * 实测数据处理的表达式 measure data process expression
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  measureExpression?: string | null
  /**
   * 预报数据处理的表达式 forecast data process expression
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  forecastExpression?: string | null
  /**
   * 模板方案Id template scenario id
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  templateId?: string
  /**
   * 模型边界ID boundary id
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  boundaryId?: string | null
  /**
   * 1-Rainfall 2-Air_Temperature 3-Evapo_Transpiration 4-Catchment_discharge 5-Catchment_discharge_per_area 6-Catchment_discharge_per_PE 7-Load_point_discharge 8-Load_point_discharge_per_unit 9-Inflow_to_Node 10-Inflow_to_Link 11-Inflow_from_Result_File 12-Outlet_Water_Level 13-Exfiltration_from_node 14-Exfiltration_from_link 15-StormWater_load_surface 16-StormWater_load_RDII 17-Open_Inflow_To_River 18-Source_Inflow_To_River 19-River_Water_Level 20-River_QH_Relation 21-Free_River_Outflow 22-Closed_River_Boundary 30-CS_Pump 31-CS_Valve 32-River_Pump 33-River_Gate 34-CS_Orifice 41-Pollutant_concentration 42-Pollutant_load 43-Sediment_concentration 44-Sediment_load 45-Microorganisms 46-Temperature 47-Salinity 48-PH 49-Wate_Age 50-Wate_Blend 51-WD_Pattern 52-WD_Curve 53-WD_Pump 54-WD_Valve 999-Other -1-Undefined
   * @type {number}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  boundaryType?: ModelBoundaryConfigFormatOutputBoundaryTypeEnum
  /**
   * 数据类型（主要针对结构物） data type, mainly for structures
   * @type {string}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  dataType?: string | null
  /**
   * 排序
   * @type {number}
   * @memberof ModelBoundaryConfigFormatOutput
   */
  sort?: number
}

export const ModelBoundaryConfigFormatOutputBoundaryTypeEnum = {
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
  '5': 5 as number,
  '6': 6 as number,
  '7': 7 as number,
  '8': 8 as number,
  '9': 9 as number,
  '10': 10 as number,
  '11': 11 as number,
  '12': 12 as number,
  '13': 13 as number,
  '14': 14 as number,
  '15': 15 as number,
  '16': 16 as number,
  '17': 17 as number,
  '18': 18 as number,
  '19': 19 as number,
  '20': 20 as number,
  '21': 21 as number,
  '22': 22 as number,
  '30': 30 as number,
  '31': 31 as number,
  '32': 32 as number,
  '33': 33 as number,
  '34': 34 as number,
  '41': 41 as number,
  '42': 42 as number,
  '43': 43 as number,
  '44': 44 as number,
  '45': 45 as number,
  '46': 46 as number,
  '47': 47 as number,
  '48': 48 as number,
  '49': 49 as number,
  '50': 50 as number,
  '51': 51 as number,
  '52': 52 as number,
  '53': 53 as number,
  '54': 54 as number,
  '999': 999 as number,
  '-1': -1 as number,
} as const

export type ModelBoundaryConfigFormatOutputBoundaryTypeEnum =
  (typeof ModelBoundaryConfigFormatOutputBoundaryTypeEnum)[keyof typeof ModelBoundaryConfigFormatOutputBoundaryTypeEnum]
