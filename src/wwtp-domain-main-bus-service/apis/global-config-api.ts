/* eslint-disable */
/**
 * 污水业务中台领域服务
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
import { GlobalConfigInOut } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * GlobalConfigApi - axios parameter creator
 * @export
 */
export const GlobalConfigApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加全局配置信息 Add global config data
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigAddGlobalConfigsPost: async (
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/GlobalConfig/AddGlobalConfigs`
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
        globalConfigInOut,
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
     * @summary 删除全局配置信息 Delete global config data
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigDeleteGlobalConfigsPost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/GlobalConfig/DeleteGlobalConfigs`
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
     * @summary 获取所有全局配置信息 Get all global config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetAllGlobalConfigsGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/GlobalConfig/GetAllGlobalConfigs`
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
     * @summary 通过配置类型获取全局配置信息 Get global config data by config type
     * @param {string} [configType] 配置类型 config type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetGlobalConfigByConfigTypeGet: async (
      configType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/GlobalConfig/GetGlobalConfigByConfigType`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (configType !== undefined) {
        localVarQueryParameter['configType'] = configType
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
     * @summary 更新全局配置信息 Update global config data
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigUpdateGlobalConfigsPost: async (
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/GlobalConfig/UpdateGlobalConfigs`
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
        globalConfigInOut,
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
 * GlobalConfigApi - functional programming interface
 * @export
 */
export const GlobalConfigApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = GlobalConfigApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加全局配置信息 Add global config data
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigAddGlobalConfigsPost(
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiGlobalConfigAddGlobalConfigsPost(
        globalConfigInOut,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除全局配置信息 Delete global config data
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigDeleteGlobalConfigsPost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigDeleteGlobalConfigsPost(requestBody, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有全局配置信息 Get all global config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigGetAllGlobalConfigsGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GlobalConfigInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigGetAllGlobalConfigsGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过配置类型获取全局配置信息 Get global config data by config type
     * @param {string} [configType] 配置类型 config type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigGetGlobalConfigByConfigTypeGet(
      configType?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GlobalConfigInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigGetGlobalConfigByConfigTypeGet(
          configType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新全局配置信息 Update global config data
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigUpdateGlobalConfigsPost(
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigUpdateGlobalConfigsPost(
          globalConfigInOut,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * GlobalConfigApi - factory interface
 * @export
 */
export const GlobalConfigApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = GlobalConfigApiFp(configuration)
  return {
    /**
     *
     * @summary 添加全局配置信息 Add global config data
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigAddGlobalConfigsPost(
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiGlobalConfigAddGlobalConfigsPost(globalConfigInOut, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除全局配置信息 Delete global config data
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigDeleteGlobalConfigsPost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiGlobalConfigDeleteGlobalConfigsPost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有全局配置信息 Get all global config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetAllGlobalConfigsGet(options?: any): AxiosPromise<Array<GlobalConfigInOut>> {
      return localVarFp
        .apiGlobalConfigGetAllGlobalConfigsGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过配置类型获取全局配置信息 Get global config data by config type
     * @param {string} [configType] 配置类型 config type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetGlobalConfigByConfigTypeGet(
      configType?: string,
      options?: any,
    ): AxiosPromise<Array<GlobalConfigInOut>> {
      return localVarFp
        .apiGlobalConfigGetGlobalConfigByConfigTypeGet(configType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新全局配置信息 Update global config data
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigUpdateGlobalConfigsPost(
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiGlobalConfigUpdateGlobalConfigsPost(globalConfigInOut, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * GlobalConfigApi - object-oriented interface
 * @export
 * @class GlobalConfigApi
 * @extends {BaseAPI}
 */
export class GlobalConfigApi extends BaseAPI {
  /**
   *
   * @summary 添加全局配置信息 Add global config data
   * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigAddGlobalConfigsPost(
    globalConfigInOut?: Array<GlobalConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigAddGlobalConfigsPost(globalConfigInOut, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除全局配置信息 Delete global config data
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigDeleteGlobalConfigsPost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigDeleteGlobalConfigsPost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有全局配置信息 Get all global config data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigGetAllGlobalConfigsGet(options?: AxiosRequestConfig) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigGetAllGlobalConfigsGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过配置类型获取全局配置信息 Get global config data by config type
   * @param {string} [configType] 配置类型 config type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigGetGlobalConfigByConfigTypeGet(
    configType?: string,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigGetGlobalConfigByConfigTypeGet(configType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新全局配置信息 Update global config data
   * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigUpdateGlobalConfigsPost(
    globalConfigInOut?: Array<GlobalConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigUpdateGlobalConfigsPost(globalConfigInOut, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
