/* eslint-disable */
/**
 * wwtp-paas-main-bus-service
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
import { BuildCalcDosageConfigInOut } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * BuildCalcDosageConfigApi - axios parameter creator
 * @export
 */
export const BuildCalcDosageConfigApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加加药配置信息 Add dosing algorithm parameters config data
     * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigAddDosingSysIdConfigsPost: async (
      buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingSysIdConfig/AddDosingSysIdConfigs`
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
        buildCalcDosageConfigInOut,
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
     * @summary 根据ID删除加药配置信息 Delete dosing algorithm parameters config data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigDeleteDosingSysIdConfigsPost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingSysIdConfig/DeleteDosingSysIdConfigs`
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
        requestBody,
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
     * @summary 获取所有加药配置 Get all the dosing algorithm parameters config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigGetAllDosingSysIdConfigsGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingSysIdConfig/GetAllDosingSysIdConfigs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

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
     * @summary 更新加药配置信息 Update dosing algorithm parameters config data
     * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigUpdateDosingSysIdConfigsPost: async (
      buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingSysIdConfig/UpdateDosingSysIdConfigs`
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
        buildCalcDosageConfigInOut,
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
 * BuildCalcDosageConfigApi - functional programming interface
 * @export
 */
export const BuildCalcDosageConfigApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = BuildCalcDosageConfigApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加加药配置信息 Add dosing algorithm parameters config data
     * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingSysIdConfigAddDosingSysIdConfigsPost(
      buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingSysIdConfigAddDosingSysIdConfigsPost(
          buildCalcDosageConfigInOut,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据ID删除加药配置信息 Delete dosing algorithm parameters config data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingSysIdConfigDeleteDosingSysIdConfigsPost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingSysIdConfigDeleteDosingSysIdConfigsPost(
          requestBody,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有加药配置 Get all the dosing algorithm parameters config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingSysIdConfigGetAllDosingSysIdConfigsGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BuildCalcDosageConfigInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingSysIdConfigGetAllDosingSysIdConfigsGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新加药配置信息 Update dosing algorithm parameters config data
     * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingSysIdConfigUpdateDosingSysIdConfigsPost(
      buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingSysIdConfigUpdateDosingSysIdConfigsPost(
          buildCalcDosageConfigInOut,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * BuildCalcDosageConfigApi - factory interface
 * @export
 */
export const BuildCalcDosageConfigApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = BuildCalcDosageConfigApiFp(configuration)
  return {
    /**
     *
     * @summary 添加加药配置信息 Add dosing algorithm parameters config data
     * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigAddDosingSysIdConfigsPost(
      buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingSysIdConfigAddDosingSysIdConfigsPost(buildCalcDosageConfigInOut, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据ID删除加药配置信息 Delete dosing algorithm parameters config data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigDeleteDosingSysIdConfigsPost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingSysIdConfigDeleteDosingSysIdConfigsPost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有加药配置 Get all the dosing algorithm parameters config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigGetAllDosingSysIdConfigsGet(
      options?: any,
    ): AxiosPromise<Array<BuildCalcDosageConfigInOut>> {
      return localVarFp
        .apiDosingSysIdConfigGetAllDosingSysIdConfigsGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新加药配置信息 Update dosing algorithm parameters config data
     * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingSysIdConfigUpdateDosingSysIdConfigsPost(
      buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingSysIdConfigUpdateDosingSysIdConfigsPost(buildCalcDosageConfigInOut, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * BuildCalcDosageConfigApi - object-oriented interface
 * @export
 * @class BuildCalcDosageConfigApi
 * @extends {BaseAPI}
 */
export class BuildCalcDosageConfigApi extends BaseAPI {
  /**
   *
   * @summary 添加加药配置信息 Add dosing algorithm parameters config data
   * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildCalcDosageConfigApi
   */
  public apiDosingSysIdConfigAddDosingSysIdConfigsPost(
    buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return BuildCalcDosageConfigApiFp(this.configuration)
      .apiDosingSysIdConfigAddDosingSysIdConfigsPost(buildCalcDosageConfigInOut, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据ID删除加药配置信息 Delete dosing algorithm parameters config data by ids
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildCalcDosageConfigApi
   */
  public apiDosingSysIdConfigDeleteDosingSysIdConfigsPost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return BuildCalcDosageConfigApiFp(this.configuration)
      .apiDosingSysIdConfigDeleteDosingSysIdConfigsPost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有加药配置 Get all the dosing algorithm parameters config data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildCalcDosageConfigApi
   */
  public apiDosingSysIdConfigGetAllDosingSysIdConfigsGet(options?: AxiosRequestConfig) {
    return BuildCalcDosageConfigApiFp(this.configuration)
      .apiDosingSysIdConfigGetAllDosingSysIdConfigsGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新加药配置信息 Update dosing algorithm parameters config data
   * @param {Array<BuildCalcDosageConfigInOut>} [buildCalcDosageConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BuildCalcDosageConfigApi
   */
  public apiDosingSysIdConfigUpdateDosingSysIdConfigsPost(
    buildCalcDosageConfigInOut?: Array<BuildCalcDosageConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return BuildCalcDosageConfigApiFp(this.configuration)
      .apiDosingSysIdConfigUpdateDosingSysIdConfigsPost(buildCalcDosageConfigInOut, options)
      .then((request) => request(this.axios, this.basePath))
  }
}