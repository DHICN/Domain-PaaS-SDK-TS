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
 * @interface GetTimeseriesValueInput
 */
export interface GetTimeseriesValueInput {
    /**
     * 资产名称 asset
     * @type {string}
     * @memberof GetTimeseriesValueInput
     */
    'asset': string;
    /**
     * 资产属性 attributeName
     * @type {string}
     * @memberof GetTimeseriesValueInput
     */
    'attributeName': string;
    /**
     * 查询开始时间 start time
     * @type {string}
     * @memberof GetTimeseriesValueInput
     */
    'startTs': string;
    /**
     * 查询结束时间 end time
     * @type {string}
     * @memberof GetTimeseriesValueInput
     */
    'endTs': string;
    /**
     * 排序方式,可空，ASC (升序)，DESC (降序) sort order, ASC (ASCENDING) or DESC (DESCENDING);默认是降序DESC
     * @type {string}
     * @memberof GetTimeseriesValueInput
     */
    'orderBy'?: string | null;
    /**
     * 抽样类型,可空,为空时代表不抽样,按:days hours year minutes years类型抽样
     * @type {string}
     * @memberof GetTimeseriesValueInput
     */
    'sample'?: string | null;
    /**
     * 抽样频率,可空,如:sample=minutes,interval=5,表示按照5分钟进行抽样
     * @type {number}
     * @memberof GetTimeseriesValueInput
     */
    'interval'?: number;
}

