/* eslint-disable */
/**
 * model-information-service
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
import { QueryInitialDataOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { SaveInitialDataInput } from '../models'
/**
 * InitialDataApi - axios parameter creator
 * @export
 */
export const InitialDataApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 删除方案的初始水位信息 Delete initial water level by scenario id
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationInitialDataDeletePost: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/initial-data/delete`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
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
    /**
     *
     * @summary 查询方案的初始水位信息 Get initial water level by scenario id
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationInitialDataQueryPost: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/initial-data/query`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
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
    /**
     *
     * @summary 保存方案的初始水位信息 Save initial water level by scenario id
     * @param {SaveInitialDataInput} [saveInitialDataInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationInitialDataSavePost: async (
      saveInitialDataInput?: SaveInitialDataInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/initial-data/save`
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
        saveInitialDataInput,
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
 * InitialDataApi - functional programming interface
 * @export
 */
export const InitialDataApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = InitialDataApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 删除方案的初始水位信息 Delete initial water level by scenario id
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationInitialDataDeletePost(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationInitialDataDeletePost(
          scenarioId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 查询方案的初始水位信息 Get initial water level by scenario id
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationInitialDataQueryPost(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryInitialDataOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationInitialDataQueryPost(
          scenarioId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存方案的初始水位信息 Save initial water level by scenario id
     * @param {SaveInitialDataInput} [saveInitialDataInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationInitialDataSavePost(
      saveInitialDataInput?: SaveInitialDataInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationInitialDataSavePost(
          saveInitialDataInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * InitialDataApi - factory interface
 * @export
 */
export const InitialDataApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = InitialDataApiFp(configuration)
  return {
    /**
     *
     * @summary 删除方案的初始水位信息 Delete initial water level by scenario id
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationInitialDataDeletePost(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelInformationInitialDataDeletePost(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 查询方案的初始水位信息 Get initial water level by scenario id
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationInitialDataQueryPost(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<QueryInitialDataOutput> {
      return localVarFp
        .apiV1ModelInformationInitialDataQueryPost(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存方案的初始水位信息 Save initial water level by scenario id
     * @param {SaveInitialDataInput} [saveInitialDataInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationInitialDataSavePost(
      saveInitialDataInput?: SaveInitialDataInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelInformationInitialDataSavePost(saveInitialDataInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * InitialDataApi - object-oriented interface
 * @export
 * @class InitialDataApi
 * @extends {BaseAPI}
 */
export class InitialDataApi extends BaseAPI {
  /**
   *
   * @summary 删除方案的初始水位信息 Delete initial water level by scenario id
   * @param {string} [scenarioId] 方案ID scenario id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InitialDataApi
   */
  public apiV1ModelInformationInitialDataDeletePost(
    scenarioId?: string,
    options?: AxiosRequestConfig,
  ) {
    return InitialDataApiFp(this.configuration)
      .apiV1ModelInformationInitialDataDeletePost(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 查询方案的初始水位信息 Get initial water level by scenario id
   * @param {string} [scenarioId] 方案ID scenario id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InitialDataApi
   */
  public apiV1ModelInformationInitialDataQueryPost(
    scenarioId?: string,
    options?: AxiosRequestConfig,
  ) {
    return InitialDataApiFp(this.configuration)
      .apiV1ModelInformationInitialDataQueryPost(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存方案的初始水位信息 Save initial water level by scenario id
   * @param {SaveInitialDataInput} [saveInitialDataInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InitialDataApi
   */
  public apiV1ModelInformationInitialDataSavePost(
    saveInitialDataInput?: SaveInitialDataInput,
    options?: AxiosRequestConfig,
  ) {
    return InitialDataApiFp(this.configuration)
      .apiV1ModelInformationInitialDataSavePost(saveInitialDataInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
