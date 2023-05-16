/* eslint-disable */
/**
 * scenario-manager-service
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
 * Scenario
 * @export
 * @interface Scenario
 */
export interface Scenario {
  /**
   * 方案ID scenario Id
   * @type {string}
   * @memberof Scenario
   */
  id: string
  /**
   * 方案代码 scenario code
   * @type {string}
   * @memberof Scenario
   */
  scenarioCode: string
  /**
   * 方案名称 scenario name
   * @type {string}
   * @memberof Scenario
   */
  scenarioName?: string | null
  /**
   * 模型类型，包括但不限于 model type, including but not limited to:  0-MIKE11Model(MIKE 11 model),  2-MIKE21Model(MIKE 21 model),  3-MIKE21FMModel(MIKE 21FM model),  4-MIKE3FMModel(MIKE 3FM model),  5-MIKEFloodModel(MIKE Flood model),  7-MIKEUrbanCSModel(MIKE Urban CS model),  8-MIKEUrbanWDModel(MIKE Urban WD model),  9-HydroBasinModel(MIKE HYDRO Basin model),  12-FeflowModel(MIKE Feflow model),  13-WestModel(West model),  20-HammerModel(Hammer model of WD),  21-MIKEPlusFloodModel(MIKE Plus Flood model),  22-MIKEPlusWDModel(MIKE Plus WD model),  99-Unknown(Unknown),
   * @type {string}
   * @memberof Scenario
   */
  modelType?: string | null
  /**
   * 方案子类型，包括但不限于 scenario subtype, including but not limited to:  0-ManualSchedule(Manual schedule),  2-OptimizeSchedule(Optimization schedule),  5-EmerResponse(Emergency response),  6-Forecast(Forecast and warning),  8-Scenario(Scenario simulation),  9-Incident(Accident),  12-WQEvaluation(Water quality evaluation),  14-Planning(Planning),  15-OilSpill(Oil spill accident),  19-PumpShutdown(Pump shut down scenario),  20-PipeBurst(Pipe burst scenario),  99-Unknown(Unknown),
   * @type {string}
   * @memberof Scenario
   */
  modelSubType?: string | null
  /**
   * 1表示模板方案，0表示非模板方案 1 or 0, indicating if the scenario is a template or not
   * @type {number}
   * @memberof Scenario
   */
  template?: number
  /**
   * 父方案ID parent scenario Id
   * @type {string}
   * @memberof Scenario
   */
  inheritedScenario?: string
  /**
   * 1表示只读，0表示可读写 1 for readonly, 0 for not readonly
   * @type {number}
   * @memberof Scenario
   */
  readOnly?: number
  /**
   * 1表示启用，0表示不启用 1 for enabled, 0 for disabled
   * @type {number}
   * @memberof Scenario
   */
  enabled?: number
  /**
   * 方案文件夹相对于WorkFolder的路径 scenario\'s relative path to WorkFolder
   * @type {string}
   * @memberof Scenario
   */
  relativeFolder?: string | null
  /**
   * 模型文件名称 model file name
   * @type {string}
   * @memberof Scenario
   */
  projectFile?: string | null
  /**
   * 模型预报时刻 model current time or forecast time
   * @type {string}
   * @memberof Scenario
   */
  currentTime?: string
  /**
   * 模型开始时刻 model start time
   * @type {string}
   * @memberof Scenario
   */
  startTime?: string
  /**
   * 模型结束时刻 model end time
   * @type {string}
   * @memberof Scenario
   */
  endTime?: string
  /**
   * 方案创建时刻 scenario create time
   * @type {string}
   * @memberof Scenario
   */
  createTime?: string
  /**
   * 1表示自动计算，0表示非自动计算 1 for auto calculate, 0 for not auto calculate
   * @type {number}
   * @memberof Scenario
   */
  autoCalculate?: number
  /**
   * 1表示修改过，0表示没有修改过 1 for modified, 0 for not modified
   * @type {number}
   * @memberof Scenario
   */
  modified?: number
  /**
   * 1表示被选中，0表示未被选中 1 for checked, 0 for unchecked
   * @type {number}
   * @memberof Scenario
   */
  checked?: number
  /**
   * 1表示计算完成，0表示未计算完成 1 for calculated, 0 for not calculated
   * @type {number}
   * @memberof Scenario
   */
  calculated?: number
  /**
   * 1表示已发布，0表示未发布 1 for published, 0 for not published
   * @type {number}
   * @memberof Scenario
   */
  published?: number
  /**
   * 1表示优先使用在线数据，0表示非优先使用在线数据 1 for online first, 0 for not online first
   * @type {number}
   * @memberof Scenario
   */
  onlineFirst?: number
  /**
   * 1表示进行自动修改，0表示不进行自动修正 1 for auto amend, 0 for not auto amend
   * @type {number}
   * @memberof Scenario
   */
  autoAmend?: number
  /**
   * 方案的状态 scenario\'s status
   * @type {string}
   * @memberof Scenario
   */
  state?: string | null
  /**
   * 方案的描述 scenario description
   * @type {string}
   * @memberof Scenario
   */
  description?: string | null
  /**
   * 版本 version
   * @type {string}
   * @memberof Scenario
   */
  version?: string
  /**
   * 租户ID tenant Id
   * @type {string}
   * @memberof Scenario
   */
  tenantId?: string | null
  /**
   * 在分布式文件系统上的存储路径 store path on distributed file system
   * @type {string}
   * @memberof Scenario
   */
  minIOPath?: string | null
  /**
   * 在分布式文件系统上的存储桶 store bucket on distributed file system
   * @type {string}
   * @memberof Scenario
   */
  minIOBucket?: string | null
  /**
   *
   * @type {string}
   * @memberof Scenario
   */
  creatorName?: string | null
  /**
   *
   * @type {string}
   * @memberof Scenario
   */
  name?: string | null
}
