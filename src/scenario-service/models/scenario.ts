/* tslint:disable */
/* eslint-disable */
/**
 * 方案管理服务
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
   * 方案ID，唯一性标识
   * @type {string}
   * @memberof Scenario
   */
  id: string
  /**
   * 方案代码，创建方案时自动生成
   * @type {string}
   * @memberof Scenario
   */
  scenarioCode: string
  /**
   * 方案名称
   * @type {string}
   * @memberof Scenario
   */
  scenarioName?: string | null
  /**
   * 方案对应的模型类型，枚举参考ModelTypeEnum，目前已存在的定义包括MIKE11Model、MIKEBASINModel、MIKE21Model、MIKE21FMModel、MIKE3FMModel、MIKEFloodModel、MIKESHEModel、MIKEUrbanCSModel、MIKEUrbanWDModel、HydroBasinModel、InpWDModel、XAJ11Model、FeflowModel、WestModel、SWMMModel、EFDCModel、WaterForecastModel、HydroBasinOptimModel、MIKEUrbanCSPlusModel、MIKEUrbanWDPlusModel、HammerModel、MIKEPlusFloodModel、MIKEPlusWDModel、EPANET、Unknown
   * @type {string}
   * @memberof Scenario
   */
  modelType?: string | null
  /**
   * 方案子类型，枚举参考enumSubType，目前已存在的定义包括ManualSchedule、EconomicSchedule、OptimizeSchedule、UnprocessedWater、DataAssimilation、EmerResponse、Forecast、EmerMnt、Scenario、Incident、ParaOptimi、SourceAnalysis、WQEvaluation、SpatialTime、Planning、OilSpill、Year、Month、TenDays、PumpShutdown、PipeBurst、Unknown，如果以上枚举项都不符合，也可以完全自定义
   * @type {string}
   * @memberof Scenario
   */
  modelSubType?: string | null
  /**
   * 是否是模板方案，1表示模板方案，0表示非模板方案
   * @type {number}
   * @memberof Scenario
   */
  template?: number
  /**
   * 父方案ID，如果方案是基于模板方案生成的，那它的父方案就是模板方案；如果方案是基于某个普通方案派生而来的，那它的父方案就是这个普通方案
   * @type {string}
   * @memberof Scenario
   */
  inheritedScenario?: string
  /**
   * 是否只读，1表示只读，0表示可读写
   * @type {number}
   * @memberof Scenario
   */
  readOnly?: number
  /**
   * （模板方案）是否启用，1表示启用，0表示不启用
   * @type {number}
   * @memberof Scenario
   */
  enabled?: number
  /**
   * 方案模型文件夹相对路径，但由于目前方案采用的是分布式文件系统，不在本地保存，因此该字段已无实际意义
   * @type {string}
   * @memberof Scenario
   */
  relativeFolder?: string | null
  /**
   * 模型文件名称，比如针对MIKE11模型，就是指模型文件夹中.sim11模型文件的名称
   * @type {string}
   * @memberof Scenario
   */
  projectFile?: string | null
  /**
   * 模型预报时刻，针对预报方案而言，预报时刻之前就是模型前算期，预报时刻之后就是预报期
   * @type {string}
   * @memberof Scenario
   */
  currentTime?: string
  /**
   * 模型开始时刻
   * @type {string}
   * @memberof Scenario
   */
  startTime?: string
  /**
   * 模型结束时刻
   * @type {string}
   * @memberof Scenario
   */
  endTime?: string
  /**
   * 方案创建时刻
   * @type {string}
   * @memberof Scenario
   */
  createTime?: string
  /**
   * 是否自动计算，但由于目前方案基于方案库进行管理，因此该字段已无实际意义
   * @type {number}
   * @memberof Scenario
   */
  autoCalculate?: number
  /**
   * 方案是否修改过，1表示修改过，0表示没有修改过
   * @type {number}
   * @memberof Scenario
   */
  modified?: number
  /**
   * 方案是否被选中，1表示被选中，0表示未被选中
   * @type {number}
   * @memberof Scenario
   */
  checked?: number
  /**
   * 方案是否计算完成，1表示计算完成，0表示未计算完成
   * @type {number}
   * @memberof Scenario
   */
  calculated?: number
  /**
   * 方案是否已经发布，1表示已发布，0表示未发布
   * @type {number}
   * @memberof Scenario
   */
  published?: number
  /**
   * 是否优先使用在线数据，目前数据接入均已自动化，因此该字段已无实际意义
   * @type {number}
   * @memberof Scenario
   */
  onlineFirst?: number
  /**
   * 是否自动修正数据，目前数据接入均已自动化，因此该字段已无实际意义
   * @type {number}
   * @memberof Scenario
   */
  autoAmend?: number
  /**
   * 方案的状态
   * @type {string}
   * @memberof Scenario
   */
  state?: string | null
  /**
   * 方案的描述
   * @type {string}
   * @memberof Scenario
   */
  description?: string | null
  /**
   * 方案版本信息
   * @type {string}
   * @memberof Scenario
   */
  version?: string
  /**
   * 租户ID
   * @type {string}
   * @memberof Scenario
   */
  tenantId?: string | null
  /**
   * 部分方案文件，比如模板方案的模型文件等需要上传到分布式文件系统去保存，这个字段代表方案文件在分布式文件系统上的存储路径
   * @type {string}
   * @memberof Scenario
   */
  minIOPath?: string | null
  /**
   * 方案文件在分布式文件系统上的存储桶
   * @type {string}
   * @memberof Scenario
   */
  minIOBucket?: string | null
  /**
   * 创建方案的用户账号
   * @type {string}
   * @memberof Scenario
   */
  creatorName?: string | null
  /**
   * 方案自定义列
   * @type {string}
   * @memberof Scenario
   */
  attributes?: string | null
  /**
   *
   * @type {string}
   * @memberof Scenario
   */
  name?: string | null
}
