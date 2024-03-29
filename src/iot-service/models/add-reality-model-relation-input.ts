/* eslint-disable */
/**
 * IoT服务
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { DataTypeMappingItem } from './data-type-mapping-item'

/**
 *
 * @export
 * @interface AddRealityModelRelationInput
 */
export interface AddRealityModelRelationInput {
  /**
   * 模板方案ID template scenario id
   * @type {string}
   * @memberof AddRealityModelRelationInput
   */
  templateId?: string
  /**
   * 模型点位ID model point id
   * @type {string}
   * @memberof AddRealityModelRelationInput
   */
  modelPointId?: string
  /**
   * 资产/设备ID asset/device id
   * @type {string}
   * @memberof AddRealityModelRelationInput
   */
  entityId?: string
  /**
   * 实体类型，资产或设备 entity type, Asset or Device
   * @type {string}
   * @memberof AddRealityModelRelationInput
   */
  entityType?: string | null
  /**
   * 模型点位数据类型与设备指标之间的映射关系 mapping relations of model point data type and device indicator
   * @type {Array<DataTypeMappingItem>}
   * @memberof AddRealityModelRelationInput
   */
  dataTypeMapping?: Array<DataTypeMappingItem> | null
}
