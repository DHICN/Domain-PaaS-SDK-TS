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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { URL } from '../../sdk-helper'
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseDynamicOutput } from '../models';
// @ts-ignore
import { BaseStaticOutput } from '../models';
// @ts-ignore
import { BaseTimeseriesOutput } from '../models';
// @ts-ignore
import { GateStatisticsOutput } from '../models';
// @ts-ignore
import { PumpStatisticsOutput } from '../models';
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models';
// @ts-ignore
import { RiverProfile } from '../models';
/**
 * RiverApi - axios parameter creator
 * @export
 */
export const RiverApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 获取河道水位、流量的动态变化结果 Get river dynamic results including water level, discharge of a scenario.
         * @summary 获取河道动态结果数据 Get 1D dynamic results of river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
         * @param {number} [frequency] 提取结果的时间频率 time frequency used to get result
         * @param {string} [startTime] 提取结果的开始时间 start time used to get result
         * @param {string} [endTime] 提取结果的结束时间 end time used to get result
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverDynamicGet: async (scenarioId: string, riverDataType?: string, frequency?: number, startTime?: string, endTime?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            assertParamExists('apiV1ResultRiverDynamicGet', 'scenarioId', scenarioId)
            const localVarPath = `/api/v1/result/river/dynamic`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (riverDataType !== undefined) {
                localVarQueryParameter['RiverDataType'] = riverDataType;
            }

            if (frequency !== undefined) {
                localVarQueryParameter['Frequency'] = frequency;
            }

            if (startTime !== undefined) {
                localVarQueryParameter['StartTime'] = startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['EndTime'] = endTime;
            }

            if (scenarioId !== undefined) {
                localVarQueryParameter['ScenarioId'] = scenarioId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 获取河道闸门的统计结果数据，包括累计开启时长等 Get river structure gates statistic results, including gate accumulated open time, etc. of a scenario.
         * @summary 获取河道闸门的统计结果 Get statistic result of river gates
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverGateStatisticsGet: async (scenarioId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            assertParamExists('apiV1ResultRiverGateStatisticsGet', 'scenarioId', scenarioId)
            const localVarPath = `/api/v1/result/river/gate-statistics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (scenarioId !== undefined) {
                localVarQueryParameter['ScenarioId'] = scenarioId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 获取指定河段上的剖面图数据 Get profile plot data of a river branch of a scenario.
         * @summary 获取河道剖面图数据 Get river profile plot data
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {Array<string>} [riverID] 河道ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverProfileTimeseriesGet: async (scenarioId: string, riverID?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            assertParamExists('apiV1ResultRiverProfileTimeseriesGet', 'scenarioId', scenarioId)
            const localVarPath = `/api/v1/result/river/profile-timeseries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (riverID !== undefined) {
                localVarQueryParameter['RiverID'] = riverID;
            }

            if (scenarioId !== undefined) {
                localVarQueryParameter['ScenarioId'] = scenarioId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 获取河道泵站的统计结果数据，包括累计流量、累计开启时长等 Get river structure pumps statistic results, including pump accumulated discharge, pump accumulated open time, etc. of a scenario.
         * @summary 获取河道泵站统计结果 Get statistic result of river pumps
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverPumpStatisticsGet: async (scenarioId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            assertParamExists('apiV1ResultRiverPumpStatisticsGet', 'scenarioId', scenarioId)
            const localVarPath = `/api/v1/result/river/pump-statistics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (scenarioId !== undefined) {
                localVarQueryParameter['ScenarioId'] = scenarioId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 获取河道泵站的水位、流量时间序列结果 Get water level or discharge time series result of a single river pump of a scenario.
         * @summary 获取河道泵站的时间序列结果 Get time-series result of river pumps
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [pumpID] 泵的ID pump ID
         * @param {string} [pumpDataType] 泵的数据类型 pump data type:  0-WaterLevel;  1-Discharge;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverPumpTimeseriesGet: async (scenarioId: string, pumpID?: string, pumpDataType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            assertParamExists('apiV1ResultRiverPumpTimeseriesGet', 'scenarioId', scenarioId)
            const localVarPath = `/api/v1/result/river/pump-timeseries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pumpID !== undefined) {
                localVarQueryParameter['PumpID'] = pumpID;
            }

            if (pumpDataType !== undefined) {
                localVarQueryParameter['PumpDataType'] = pumpDataType;
            }

            if (scenarioId !== undefined) {
                localVarQueryParameter['ScenarioId'] = scenarioId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 获取河道统计结果，包括最大水位、流量，最小水位、流量 Get river statistic results including maximum and minimum of water level, discharge of a scenario.
         * @summary 获取河道静态结果数据 Get 1D static results of river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge;
         * @param {string} [statisticType] 统计类型 statistic type:  0-Min;  1-Max
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverStaticGet: async (scenarioId: string, riverDataType?: string, statisticType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            assertParamExists('apiV1ResultRiverStaticGet', 'scenarioId', scenarioId)
            const localVarPath = `/api/v1/result/river/static`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (riverDataType !== undefined) {
                localVarQueryParameter['RiverDataType'] = riverDataType;
            }

            if (statisticType !== undefined) {
                localVarQueryParameter['StatisticType'] = statisticType;
            }

            if (scenarioId !== undefined) {
                localVarQueryParameter['ScenarioId'] = scenarioId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 获取指定河道计算点上的水位、流量时间序列结果数据 Get river water level or discharge time series result on a single river point of a scenario.
         * @summary 获取河道单点时间序列结果 Get single-point time-series result on the river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
         * @param {string} [riverId] 河道ID river ID
         * @param {number} [chainage] 河道计算点里程 river point chainage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverTimeseriesGet: async (scenarioId: string, riverDataType?: string, riverId?: string, chainage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scenarioId' is not null or undefined
            assertParamExists('apiV1ResultRiverTimeseriesGet', 'scenarioId', scenarioId)
            const localVarPath = `/api/v1/result/river/timeseries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (riverDataType !== undefined) {
                localVarQueryParameter['RiverDataType'] = riverDataType;
            }

            if (riverId !== undefined) {
                localVarQueryParameter['RiverId'] = riverId;
            }

            if (chainage !== undefined) {
                localVarQueryParameter['Chainage'] = chainage;
            }

            if (scenarioId !== undefined) {
                localVarQueryParameter['ScenarioId'] = scenarioId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RiverApi - functional programming interface
 * @export
 */
export const RiverApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RiverApiAxiosParamCreator(configuration)
    return {
        /**
         * 获取河道水位、流量的动态变化结果 Get river dynamic results including water level, discharge of a scenario.
         * @summary 获取河道动态结果数据 Get 1D dynamic results of river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
         * @param {number} [frequency] 提取结果的时间频率 time frequency used to get result
         * @param {string} [startTime] 提取结果的开始时间 start time used to get result
         * @param {string} [endTime] 提取结果的结束时间 end time used to get result
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ResultRiverDynamicGet(scenarioId: string, riverDataType?: string, frequency?: number, startTime?: string, endTime?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseDynamicOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultRiverDynamicGet(scenarioId, riverDataType, frequency, startTime, endTime, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 获取河道闸门的统计结果数据，包括累计开启时长等 Get river structure gates statistic results, including gate accumulated open time, etc. of a scenario.
         * @summary 获取河道闸门的统计结果 Get statistic result of river gates
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ResultRiverGateStatisticsGet(scenarioId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GateStatisticsOutput>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultRiverGateStatisticsGet(scenarioId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 获取指定河段上的剖面图数据 Get profile plot data of a river branch of a scenario.
         * @summary 获取河道剖面图数据 Get river profile plot data
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {Array<string>} [riverID] 河道ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ResultRiverProfileTimeseriesGet(scenarioId: string, riverID?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RiverProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultRiverProfileTimeseriesGet(scenarioId, riverID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 获取河道泵站的统计结果数据，包括累计流量、累计开启时长等 Get river structure pumps statistic results, including pump accumulated discharge, pump accumulated open time, etc. of a scenario.
         * @summary 获取河道泵站统计结果 Get statistic result of river pumps
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ResultRiverPumpStatisticsGet(scenarioId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PumpStatisticsOutput>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultRiverPumpStatisticsGet(scenarioId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 获取河道泵站的水位、流量时间序列结果 Get water level or discharge time series result of a single river pump of a scenario.
         * @summary 获取河道泵站的时间序列结果 Get time-series result of river pumps
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [pumpID] 泵的ID pump ID
         * @param {string} [pumpDataType] 泵的数据类型 pump data type:  0-WaterLevel;  1-Discharge;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ResultRiverPumpTimeseriesGet(scenarioId: string, pumpID?: string, pumpDataType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseTimeseriesOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultRiverPumpTimeseriesGet(scenarioId, pumpID, pumpDataType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 获取河道统计结果，包括最大水位、流量，最小水位、流量 Get river statistic results including maximum and minimum of water level, discharge of a scenario.
         * @summary 获取河道静态结果数据 Get 1D static results of river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge;
         * @param {string} [statisticType] 统计类型 statistic type:  0-Min;  1-Max
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ResultRiverStaticGet(scenarioId: string, riverDataType?: string, statisticType?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseStaticOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultRiverStaticGet(scenarioId, riverDataType, statisticType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 获取指定河道计算点上的水位、流量时间序列结果数据 Get river water level or discharge time series result on a single river point of a scenario.
         * @summary 获取河道单点时间序列结果 Get single-point time-series result on the river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
         * @param {string} [riverId] 河道ID river ID
         * @param {number} [chainage] 河道计算点里程 river point chainage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ResultRiverTimeseriesGet(scenarioId: string, riverDataType?: string, riverId?: string, chainage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseTimeseriesOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultRiverTimeseriesGet(scenarioId, riverDataType, riverId, chainage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RiverApi - factory interface
 * @export
 */
export const RiverApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RiverApiFp(configuration)
    return {
        /**
         * 获取河道水位、流量的动态变化结果 Get river dynamic results including water level, discharge of a scenario.
         * @summary 获取河道动态结果数据 Get 1D dynamic results of river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
         * @param {number} [frequency] 提取结果的时间频率 time frequency used to get result
         * @param {string} [startTime] 提取结果的开始时间 start time used to get result
         * @param {string} [endTime] 提取结果的结束时间 end time used to get result
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverDynamicGet(scenarioId: string, riverDataType?: string, frequency?: number, startTime?: string, endTime?: string, options?: any): AxiosPromise<BaseDynamicOutput> {
            return localVarFp.apiV1ResultRiverDynamicGet(scenarioId, riverDataType, frequency, startTime, endTime, options).then((request) => request(axios, basePath));
        },
        /**
         * 获取河道闸门的统计结果数据，包括累计开启时长等 Get river structure gates statistic results, including gate accumulated open time, etc. of a scenario.
         * @summary 获取河道闸门的统计结果 Get statistic result of river gates
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverGateStatisticsGet(scenarioId: string, options?: any): AxiosPromise<Array<GateStatisticsOutput>> {
            return localVarFp.apiV1ResultRiverGateStatisticsGet(scenarioId, options).then((request) => request(axios, basePath));
        },
        /**
         * 获取指定河段上的剖面图数据 Get profile plot data of a river branch of a scenario.
         * @summary 获取河道剖面图数据 Get river profile plot data
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {Array<string>} [riverID] 河道ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverProfileTimeseriesGet(scenarioId: string, riverID?: Array<string>, options?: any): AxiosPromise<RiverProfile> {
            return localVarFp.apiV1ResultRiverProfileTimeseriesGet(scenarioId, riverID, options).then((request) => request(axios, basePath));
        },
        /**
         * 获取河道泵站的统计结果数据，包括累计流量、累计开启时长等 Get river structure pumps statistic results, including pump accumulated discharge, pump accumulated open time, etc. of a scenario.
         * @summary 获取河道泵站统计结果 Get statistic result of river pumps
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverPumpStatisticsGet(scenarioId: string, options?: any): AxiosPromise<Array<PumpStatisticsOutput>> {
            return localVarFp.apiV1ResultRiverPumpStatisticsGet(scenarioId, options).then((request) => request(axios, basePath));
        },
        /**
         * 获取河道泵站的水位、流量时间序列结果 Get water level or discharge time series result of a single river pump of a scenario.
         * @summary 获取河道泵站的时间序列结果 Get time-series result of river pumps
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [pumpID] 泵的ID pump ID
         * @param {string} [pumpDataType] 泵的数据类型 pump data type:  0-WaterLevel;  1-Discharge;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverPumpTimeseriesGet(scenarioId: string, pumpID?: string, pumpDataType?: string, options?: any): AxiosPromise<BaseTimeseriesOutput> {
            return localVarFp.apiV1ResultRiverPumpTimeseriesGet(scenarioId, pumpID, pumpDataType, options).then((request) => request(axios, basePath));
        },
        /**
         * 获取河道统计结果，包括最大水位、流量，最小水位、流量 Get river statistic results including maximum and minimum of water level, discharge of a scenario.
         * @summary 获取河道静态结果数据 Get 1D static results of river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge;
         * @param {string} [statisticType] 统计类型 statistic type:  0-Min;  1-Max
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverStaticGet(scenarioId: string, riverDataType?: string, statisticType?: string, options?: any): AxiosPromise<BaseStaticOutput> {
            return localVarFp.apiV1ResultRiverStaticGet(scenarioId, riverDataType, statisticType, options).then((request) => request(axios, basePath));
        },
        /**
         * 获取指定河道计算点上的水位、流量时间序列结果数据 Get river water level or discharge time series result on a single river point of a scenario.
         * @summary 获取河道单点时间序列结果 Get single-point time-series result on the river
         * @param {string} scenarioId 方案的ID scenario’s ID
         * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
         * @param {string} [riverId] 河道ID river ID
         * @param {number} [chainage] 河道计算点里程 river point chainage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ResultRiverTimeseriesGet(scenarioId: string, riverDataType?: string, riverId?: string, chainage?: number, options?: any): AxiosPromise<BaseTimeseriesOutput> {
            return localVarFp.apiV1ResultRiverTimeseriesGet(scenarioId, riverDataType, riverId, chainage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RiverApi - object-oriented interface
 * @export
 * @class RiverApi
 * @extends {BaseAPI}
 */
export class RiverApi extends BaseAPI {
    /**
     * 获取河道水位、流量的动态变化结果 Get river dynamic results including water level, discharge of a scenario.
     * @summary 获取河道动态结果数据 Get 1D dynamic results of river
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
     * @param {number} [frequency] 提取结果的时间频率 time frequency used to get result
     * @param {string} [startTime] 提取结果的开始时间 start time used to get result
     * @param {string} [endTime] 提取结果的结束时间 end time used to get result
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RiverApi
     */
    public apiV1ResultRiverDynamicGet(scenarioId: string, riverDataType?: string, frequency?: number, startTime?: string, endTime?: string, options?: AxiosRequestConfig) {
        return RiverApiFp(this.configuration).apiV1ResultRiverDynamicGet(scenarioId, riverDataType, frequency, startTime, endTime, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 获取河道闸门的统计结果数据，包括累计开启时长等 Get river structure gates statistic results, including gate accumulated open time, etc. of a scenario.
     * @summary 获取河道闸门的统计结果 Get statistic result of river gates
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RiverApi
     */
    public apiV1ResultRiverGateStatisticsGet(scenarioId: string, options?: AxiosRequestConfig) {
        return RiverApiFp(this.configuration).apiV1ResultRiverGateStatisticsGet(scenarioId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 获取指定河段上的剖面图数据 Get profile plot data of a river branch of a scenario.
     * @summary 获取河道剖面图数据 Get river profile plot data
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {Array<string>} [riverID] 河道ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RiverApi
     */
    public apiV1ResultRiverProfileTimeseriesGet(scenarioId: string, riverID?: Array<string>, options?: AxiosRequestConfig) {
        return RiverApiFp(this.configuration).apiV1ResultRiverProfileTimeseriesGet(scenarioId, riverID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 获取河道泵站的统计结果数据，包括累计流量、累计开启时长等 Get river structure pumps statistic results, including pump accumulated discharge, pump accumulated open time, etc. of a scenario.
     * @summary 获取河道泵站统计结果 Get statistic result of river pumps
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RiverApi
     */
    public apiV1ResultRiverPumpStatisticsGet(scenarioId: string, options?: AxiosRequestConfig) {
        return RiverApiFp(this.configuration).apiV1ResultRiverPumpStatisticsGet(scenarioId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 获取河道泵站的水位、流量时间序列结果 Get water level or discharge time series result of a single river pump of a scenario.
     * @summary 获取河道泵站的时间序列结果 Get time-series result of river pumps
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {string} [pumpID] 泵的ID pump ID
     * @param {string} [pumpDataType] 泵的数据类型 pump data type:  0-WaterLevel;  1-Discharge;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RiverApi
     */
    public apiV1ResultRiverPumpTimeseriesGet(scenarioId: string, pumpID?: string, pumpDataType?: string, options?: AxiosRequestConfig) {
        return RiverApiFp(this.configuration).apiV1ResultRiverPumpTimeseriesGet(scenarioId, pumpID, pumpDataType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 获取河道统计结果，包括最大水位、流量，最小水位、流量 Get river statistic results including maximum and minimum of water level, discharge of a scenario.
     * @summary 获取河道静态结果数据 Get 1D static results of river
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge;
     * @param {string} [statisticType] 统计类型 statistic type:  0-Min;  1-Max
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RiverApi
     */
    public apiV1ResultRiverStaticGet(scenarioId: string, riverDataType?: string, statisticType?: string, options?: AxiosRequestConfig) {
        return RiverApiFp(this.configuration).apiV1ResultRiverStaticGet(scenarioId, riverDataType, statisticType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 获取指定河道计算点上的水位、流量时间序列结果数据 Get river water level or discharge time series result on a single river point of a scenario.
     * @summary 获取河道单点时间序列结果 Get single-point time-series result on the river
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {string} [riverDataType] 河道结果类型 river result type:  0-WaterLevel;  1-Discharge
     * @param {string} [riverId] 河道ID river ID
     * @param {number} [chainage] 河道计算点里程 river point chainage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RiverApi
     */
    public apiV1ResultRiverTimeseriesGet(scenarioId: string, riverDataType?: string, riverId?: string, chainage?: number, options?: AxiosRequestConfig) {
        return RiverApiFp(this.configuration).apiV1ResultRiverTimeseriesGet(scenarioId, riverDataType, riverId, chainage, options).then((request) => request(this.axios, this.basePath));
    }
}
