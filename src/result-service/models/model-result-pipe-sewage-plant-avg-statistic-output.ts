/* eslint-disable */
/**
 * 模型结果服务
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
import { WqInfoValue } from './wq-info-value';

/**
 * 污水处理厂平均浓度运行统计
 * @export
 * @interface ModelResultPipeSewagePlantAvgStatisticOutput
 */
export interface ModelResultPipeSewagePlantAvgStatisticOutput {
    /**
     * 资产id asset id
     * @type {string}
     * @memberof ModelResultPipeSewagePlantAvgStatisticOutput
     */
    'assetID'?: string | null;
    /**
     * 污水处理厂名称 asset name
     * @type {string}
     * @memberof ModelResultPipeSewagePlantAvgStatisticOutput
     */
    'assetName'?: string | null;
    /**
     * 污水处理厂进水总量 total water inflow
     * @type {number}
     * @memberof ModelResultPipeSewagePlantAvgStatisticOutput
     */
    'totalInflowVolume'?: number;
    /**
     * 水质平均浓度预估列表 estimated list of average concentration of water quality
     * @type {Array<WqInfoValue>}
     * @memberof ModelResultPipeSewagePlantAvgStatisticOutput
     */
    'wqConcInfos'?: Array<WqInfoValue> | null;
}

