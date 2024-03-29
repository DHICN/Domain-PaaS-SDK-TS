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
import { HisDataSearchInput } from '../models'
// @ts-ignore
import { SearchOutput } from '../models'
/**
 * HisDataSearchApi - axios parameter creator
 * @export
 */
export const HisDataSearchApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 历史数据查询 / historical data query
     * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    apiV1HisDataSearchPost: async (
      hisDataSearchInput?: Array<HisDataSearchInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/his-data-search`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        hisDataSearchInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary 历史数据查询 / historical data query
     * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1HisDataSearchPost_1: async (
      hisDataSearchInput?: Array<HisDataSearchInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/his-data/search`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        hisDataSearchInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * HisDataSearchApi - functional programming interface
 * @export
 */
export const HisDataSearchApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = HisDataSearchApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 历史数据查询 / historical data query
     * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async apiV1HisDataSearchPost(
      hisDataSearchInput?: Array<HisDataSearchInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchOutput>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1HisDataSearchPost(
        hisDataSearchInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 历史数据查询 / historical data query
     * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1HisDataSearchPost_1(
      hisDataSearchInput?: Array<HisDataSearchInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchOutput>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1HisDataSearchPost_1(
        hisDataSearchInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * HisDataSearchApi - factory interface
 * @export
 */
export const HisDataSearchApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = HisDataSearchApiFp(configuration)
  return {
    /**
     *
     * @summary 历史数据查询 / historical data query
     * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    apiV1HisDataSearchPost(
      hisDataSearchInput?: Array<HisDataSearchInput>,
      options?: any,
    ): AxiosPromise<SearchOutput> {
      return localVarFp
        .apiV1HisDataSearchPost(hisDataSearchInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 历史数据查询 / historical data query
     * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1HisDataSearchPost_1(
      hisDataSearchInput?: Array<HisDataSearchInput>,
      options?: any,
    ): AxiosPromise<SearchOutput> {
      return localVarFp
        .apiV1HisDataSearchPost_1(hisDataSearchInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * HisDataSearchApi - object-oriented interface
 * @export
 * @class HisDataSearchApi
 * @extends {BaseAPI}
 */
export class HisDataSearchApi extends BaseAPI {
  /**
   *
   * @summary 历史数据查询 / historical data query
   * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof HisDataSearchApi
   */
  public apiV1HisDataSearchPost(
    hisDataSearchInput?: Array<HisDataSearchInput>,
    options?: AxiosRequestConfig,
  ) {
    return HisDataSearchApiFp(this.configuration)
      .apiV1HisDataSearchPost(hisDataSearchInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 历史数据查询 / historical data query
   * @param {Array<HisDataSearchInput>} [hisDataSearchInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HisDataSearchApi
   */
  public apiV1HisDataSearchPost_1(
    hisDataSearchInput?: Array<HisDataSearchInput>,
    options?: AxiosRequestConfig,
  ) {
    return HisDataSearchApiFp(this.configuration)
      .apiV1HisDataSearchPost_1(hisDataSearchInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
