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
import { SmartWellValveTsData } from './smart-well-valve-ts-data';

/**
 * 智能分流井运行统计
 * @export
 * @interface ModelResultPipeSmartWellStatisticOutput
 */
export interface ModelResultPipeSmartWellStatisticOutput {
    /**
     * 管网排河阀排污阀统计列表 statistical list of valves of pipe network
     * @type {Array<SmartWellValveTsData>}
     * @memberof ModelResultPipeSmartWellStatisticOutput
     */
    'smartWellValveTS'?: Array<SmartWellValveTsData> | null;
}

