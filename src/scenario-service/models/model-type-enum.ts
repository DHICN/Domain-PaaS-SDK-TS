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
 * 0-MIKE11Model(MIKE 11 model) 1-MIKEBASINModel(MIKE Basin model) 2-MIKE21Model(MIKE 21 model) 3-MIKE21FMModel(MIKE 21FM model) 4-MIKE3FMModel(MIKE 3FM model) 5-MIKEFloodModel(MIKE Flood model) 6-MIKESHEModel(MIKE SHE model) 7-MIKEUrbanCSModel(MIKE Urban CS model) 8-MIKEUrbanWDModel(MIKE Urban WD model) 9-HydroBasinModel(MIKE HYDRO Basin model) 10-InpWDModel(Inp model of WD) 11-XAJ11Model(Xin an jiang model) 12-FeflowModel(MIKE Feflow model) 13-WestModel(West model) 14-SWMMModel(SWMM model) 15-EFDCModel(EFDC model) 16-WaterForecastModel(Water forecast model of WD) 17-HydroBasinOptimModel(MIKE HYDRO Basin optimization model) 18-MIKEUrbanCSPlusModel(MIKE Urban Plus CS model) 19-MIKEUrbanWDPlusModel(MIKE Urban Plus WD model) 20-HammerModel(Hammer model of WD) 21-MIKEPlusFloodModel(MIKE Plus Flood model) 22-MIKEPlusWDModel(MIKE Plus WD model) 99-Unknown(Unknown)
 * @export
 * @enum {string}
 */

export const ModelTypeEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
  NUMBER_9: 9,
  NUMBER_10: 10,
  NUMBER_11: 11,
  NUMBER_12: 12,
  NUMBER_13: 13,
  NUMBER_14: 14,
  NUMBER_15: 15,
  NUMBER_16: 16,
  NUMBER_17: 17,
  NUMBER_18: 18,
  NUMBER_19: 19,
  NUMBER_20: 20,
  NUMBER_21: 21,
  NUMBER_22: 22,
  NUMBER_99: 99,
} as const

export type ModelTypeEnum = (typeof ModelTypeEnum)[keyof typeof ModelTypeEnum]
