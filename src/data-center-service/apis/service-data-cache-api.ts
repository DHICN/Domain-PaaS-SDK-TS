/* eslint-disable */
/**
 * 数据中台服务
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
import { PointMappingOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * ServiceDataCacheApi - axios parameter creator
 * @export
 */
export const ServiceDataCacheApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取租户下的点位映射拓扑关系
     * @param {string} [isForceRefresh]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDataCachePointMappingGet: async (
      isForceRefresh?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/data-cache/point/mapping`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (isForceRefresh !== undefined) {
        localVarQueryParameter['isForceRefresh'] = isForceRefresh
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
 * ServiceDataCacheApi - functional programming interface
 * @export
 */
export const ServiceDataCacheApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ServiceDataCacheApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取租户下的点位映射拓扑关系
     * @param {string} [isForceRefresh]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDataCachePointMappingGet(
      isForceRefresh?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PointMappingOutput>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiDataCachePointMappingGet(
        isForceRefresh,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ServiceDataCacheApi - factory interface
 * @export
 */
export const ServiceDataCacheApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ServiceDataCacheApiFp(configuration)
  return {
    /**
     *
     * @summary 获取租户下的点位映射拓扑关系
     * @param {string} [isForceRefresh]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDataCachePointMappingGet(
      isForceRefresh?: string,
      options?: any,
    ): AxiosPromise<PointMappingOutput> {
      return localVarFp
        .apiDataCachePointMappingGet(isForceRefresh, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ServiceDataCacheApi - object-oriented interface
 * @export
 * @class ServiceDataCacheApi
 * @extends {BaseAPI}
 */
export class ServiceDataCacheApi extends BaseAPI {
  /**
   *
   * @summary 获取租户下的点位映射拓扑关系
   * @param {string} [isForceRefresh]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ServiceDataCacheApi
   */
  public apiDataCachePointMappingGet(isForceRefresh?: string, options?: AxiosRequestConfig) {
    return ServiceDataCacheApiFp(this.configuration)
      .apiDataCachePointMappingGet(isForceRefresh, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
