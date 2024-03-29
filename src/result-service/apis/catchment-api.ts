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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { Configuration } from '../configuration'
import { URL } from '../../sdk-helper'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base'
// @ts-ignore
import { RainfallRunoffSummaryOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * CatchmentApi - axios parameter creator
 * @export
 */
export const CatchmentApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 从summary.html中获取降雨径流的统计信息，包括总降雨量、总径流量等，同时返回每个汇水区的降雨径流统计数据 Get rainfall runoff summary data, including net rainfall, total runoff discharge, etc. as well as rainfall runoff statistic data of each catchment.
     * @summary 获取降雨径流的统计信息 Get rainfall runoff summary info
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultCatchmentRainfallRunoffGet: async (
      scenarioId: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'scenarioId' is not null or undefined
      assertParamExists('apiV1ResultCatchmentRainfallRunoffGet', 'scenarioId', scenarioId)
      const localVarPath = `/api/v1/result/catchment/rainfall-runoff`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (scenarioId !== undefined) {
        localVarQueryParameter['ScenarioId'] = scenarioId
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * CatchmentApi - functional programming interface
 * @export
 */
export const CatchmentApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CatchmentApiAxiosParamCreator(configuration)
  return {
    /**
     * 从summary.html中获取降雨径流的统计信息，包括总降雨量、总径流量等，同时返回每个汇水区的降雨径流统计数据 Get rainfall runoff summary data, including net rainfall, total runoff discharge, etc. as well as rainfall runoff statistic data of each catchment.
     * @summary 获取降雨径流的统计信息 Get rainfall runoff summary info
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ResultCatchmentRainfallRunoffGet(
      scenarioId: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<RainfallRunoffSummaryOutput>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ResultCatchmentRainfallRunoffGet(scenarioId, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * CatchmentApi - factory interface
 * @export
 */
export const CatchmentApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = CatchmentApiFp(configuration)
  return {
    /**
     * 从summary.html中获取降雨径流的统计信息，包括总降雨量、总径流量等，同时返回每个汇水区的降雨径流统计数据 Get rainfall runoff summary data, including net rainfall, total runoff discharge, etc. as well as rainfall runoff statistic data of each catchment.
     * @summary 获取降雨径流的统计信息 Get rainfall runoff summary info
     * @param {string} scenarioId 方案的ID scenario’s ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultCatchmentRainfallRunoffGet(
      scenarioId: string,
      options?: any,
    ): AxiosPromise<RainfallRunoffSummaryOutput> {
      return localVarFp
        .apiV1ResultCatchmentRainfallRunoffGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CatchmentApi - object-oriented interface
 * @export
 * @class CatchmentApi
 * @extends {BaseAPI}
 */
export class CatchmentApi extends BaseAPI {
  /**
   * 从summary.html中获取降雨径流的统计信息，包括总降雨量、总径流量等，同时返回每个汇水区的降雨径流统计数据 Get rainfall runoff summary data, including net rainfall, total runoff discharge, etc. as well as rainfall runoff statistic data of each catchment.
   * @summary 获取降雨径流的统计信息 Get rainfall runoff summary info
   * @param {string} scenarioId 方案的ID scenario’s ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CatchmentApi
   */
  public apiV1ResultCatchmentRainfallRunoffGet(scenarioId: string, options?: AxiosRequestConfig) {
    return CatchmentApiFp(this.configuration)
      .apiV1ResultCatchmentRainfallRunoffGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
