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
 * 
 * @export
 * @interface ModelResultRiverWqInput
 */
export interface ModelResultRiverWqInput {
    /**
     * 方案id scenario id
     * @type {string}
     * @memberof ModelResultRiverWqInput
     */
    'scenarioId'?: string | null;
    /**
     * 水质 water quality
     * @type {string}
     * @memberof ModelResultRiverWqInput
     */
    'wqItem'?: string | null;
    /**
     * 频率 frequency
     * @type {number}
     * @memberof ModelResultRiverWqInput
     */
    'frequency'?: number;
    /**
     * 开始时间 start time
     * @type {string}
     * @memberof ModelResultRiverWqInput
     */
    'startTime'?: string;
    /**
     * 结束时间 end time
     * @type {string}
     * @memberof ModelResultRiverWqInput
     */
    'endTime'?: string;
}

