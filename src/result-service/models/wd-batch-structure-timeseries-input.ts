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
import { WdCalculateTypeEnum } from './wd-calculate-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import { WdDataTypeEnum } from './wd-data-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import { WdFeatureTypeEnum } from './wd-feature-type-enum';

/**
 * 
 * @export
 * @interface WdBatchStructureTimeseriesInput
 */
export interface WdBatchStructureTimeseriesInput {
    /**
     * 方案的ID scenario’s ID
     * @type {string}
     * @memberof WdBatchStructureTimeseriesInput
     */
    'scenarioId': string;
    /**
     * 模型id列表
     * @type {Array<string>}
     * @memberof WdBatchStructureTimeseriesInput
     */
    'modelIds': Array<string>;
    /**
     * 
     * @type {WdCalculateTypeEnum}
     * @memberof WdBatchStructureTimeseriesInput
     */
    'wdCalculateType'?: WdCalculateTypeEnum;
    /**
     * 
     * @type {WdFeatureTypeEnum}
     * @memberof WdBatchStructureTimeseriesInput
     */
    'wdFeatureType'?: WdFeatureTypeEnum;
    /**
     * 
     * @type {WdDataTypeEnum}
     * @memberof WdBatchStructureTimeseriesInput
     */
    'wdDataType'?: WdDataTypeEnum;
}

