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
 * Library
 * @export
 * @interface Library
 */
export interface Library {
  /**
   * 方案库的ID，唯一性标识
   * @type {string}
   * @memberof Library
   */
  id: string
  /**
   * 租户ID
   * @type {string}
   * @memberof Library
   */
  tenantId?: string | null
  /**
   * 方案库所关联的方案组ID
   * @type {string}
   * @memberof Library
   */
  scenariogroup: string
  /**
   * 方案库的名称
   * @type {string}
   * @memberof Library
   */
  name: string
  /**
   * 方案库的类型，枚举参考LibraryTypeEnum，目前已存在0-19种定义，包括0：未定义；1：自动预报库；2：人工预报库；3：预报库；4：调度库；5：经验库；6：情景模拟库；7：突发水污染事故库；8：在线水动力库（供水）；9：水锤库（供水）；10：管道充满度库；11：爆管库（供水）；12：污染事故响应库；13：规划库；14：管道冲洗库（供水）；15：污染事故库（供水）；16：关阀库（供水）；17：在线滚动预报库（污水厂）；18：在线滚动优化库（污水厂）；19：模拟实验室库（污水厂）
   * @type {number}
   * @memberof Library
   */
  type?: number
  /**
   * 方案库的业务类型，枚举参考BusinessTypeEnum，目前已存在0-6种定义，包括0：未定义；1：水环境；2：内涝；3：供水；4：流域洪水；5：污水厂；6：排水
   * @type {number}
   * @memberof Library
   */
  businessType?: number
  /**
   * 是否只读，0代表可读写，1代表只读
   * @type {number}
   * @memberof Library
   */
  readonly?: number
  /**
   * 是否直接绑定模板方案，1表示该方案库直接绑定一个模板方案，0表示不直接绑定，而是采用BindType和BindBusinessType所对应的那个方案库下的模板方案，属于间接绑定
   * @type {number}
   * @memberof Library
   */
  bindTemplate?: number
  /**
   * 当BindTemplate为0，此项表示该方案库采用的模板方案所对应的方案库的类型，枚举参考LibraryTypeEnum
   * @type {number}
   * @memberof Library
   */
  bindType?: number
  /**
   * 当BindTemplate为0，此项表示该方案库采用的模板方案所对应的方案库的业务类型，枚举参考BusinessTypeEnum
   * @type {number}
   * @memberof Library
   */
  bindBusinessType?: number
  /**
   * 是否支持绑定多个启用的模板方案，0表示只能绑定单个启用的模板方案，1表示可以绑定多个启用的模板方案
   * @type {number}
   * @memberof Library
   */
  enableMultiTemplate?: number | null
  /**
   * 方案库的描述信息
   * @type {string}
   * @memberof Library
   */
  description?: string | null
}
