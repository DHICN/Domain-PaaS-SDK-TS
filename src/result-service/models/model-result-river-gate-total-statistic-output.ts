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



/**
 * 河网闸门预报统计
 * @export
 * @interface ModelResultRiverGateTotalStatisticOutput
 */
export interface ModelResultRiverGateTotalStatisticOutput {
    /**
     * 闸id gate id
     * @type {string}
     * @memberof ModelResultRiverGateTotalStatisticOutput
     */
    'assetID'?: string | null;
    /**
     * 闸名称 gate name
     * @type {string}
     * @memberof ModelResultRiverGateTotalStatisticOutput
     */
    'assetName'?: string | null;
    /**
     * 开启次数 opening times
     * @type {number}
     * @memberof ModelResultRiverGateTotalStatisticOutput
     */
    'openNum'?: number;
    /**
     * 开启时长，以分钟为单位 opening duration(unit:minute)
     * @type {number}
     * @memberof ModelResultRiverGateTotalStatisticOutput
     */
    'openMinutes'?: number;
}

