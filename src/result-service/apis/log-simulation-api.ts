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
import { LogSimulationItem } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * LogSimulationApi - axios parameter creator
 * @export
 */
export const LogSimulationApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取方案计算的日志信息 Get model simulation log data
     * @param {string} [scenarioId] 方案ID scenario\&#39;s id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultLogListGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/result/log/list`
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
        localVarQueryParameter['scenarioId'] = scenarioId
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
 * LogSimulationApi - functional programming interface
 * @export
 */
export const LogSimulationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LogSimulationApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取方案计算的日志信息 Get model simulation log data
     * @param {string} [scenarioId] 方案ID scenario\&#39;s id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ResultLogListGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LogSimulationItem>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultLogListGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * LogSimulationApi - factory interface
 * @export
 */
export const LogSimulationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = LogSimulationApiFp(configuration)
  return {
    /**
     *
     * @summary 获取方案计算的日志信息 Get model simulation log data
     * @param {string} [scenarioId] 方案ID scenario\&#39;s id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultLogListGet(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<Array<LogSimulationItem>> {
      return localVarFp
        .apiV1ResultLogListGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * LogSimulationApi - object-oriented interface
 * @export
 * @class LogSimulationApi
 * @extends {BaseAPI}
 */
export class LogSimulationApi extends BaseAPI {
  /**
   *
   * @summary 获取方案计算的日志信息 Get model simulation log data
   * @param {string} [scenarioId] 方案ID scenario\&#39;s id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LogSimulationApi
   */
  public apiV1ResultLogListGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return LogSimulationApiFp(this.configuration)
      .apiV1ResultLogListGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
