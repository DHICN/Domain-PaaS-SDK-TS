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

/**
 *
 * @export
 * @interface SubAssetInfoV11
 */
export interface SubAssetInfoV11 {
  /**
   * 资产名称
   * @type {string}
   * @memberof SubAssetInfoV11
   */
  asset?: string | null
  /**
   * 资产显示名称
   * @type {string}
   * @memberof SubAssetInfoV11
   */
  assetShowName?: string | null
  /**
   * 资产类型
   * @type {string}
   * @memberof SubAssetInfoV11
   */
  assetType?: string | null
  /**
   * 0-TENANT_PROFILE(租户配置实体) 1-TENANT(租户实体) 2-CUSTOMER(客户实体) 3-DEVICE(设备实体) 4-ASSET(资产实体) 5-DEVICE_PROFILE(资产实体)
   * @type {number}
   * @memberof SubAssetInfoV11
   */
  entityType?: SubAssetInfoV11EntityTypeEnum
  /**
   * 子资产
   * @type {Array<SubAssetInfoV11>}
   * @memberof SubAssetInfoV11
   */
  subAssets?: Array<SubAssetInfoV11> | null
  /**
   * 查询深度
   * @type {number}
   * @memberof SubAssetInfoV11
   */
  deep?: number
}

export const SubAssetInfoV11EntityTypeEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
} as const

export type SubAssetInfoV11EntityTypeEnum =
  (typeof SubAssetInfoV11EntityTypeEnum)[keyof typeof SubAssetInfoV11EntityTypeEnum]
