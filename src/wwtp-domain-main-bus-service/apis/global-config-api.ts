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
     * @param {string} [tenantId]
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigAddGlobalConfigsPost: async (
      tenantId?: string,
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

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
      }

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
     * @param {string} [tenantId]
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigDeleteGlobalConfigsPost: async (
      tenantId?: string,
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

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
      }

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
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetAllGlobalConfigsGet: async (
      tenantId?: string,
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

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
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
     * @summary 通过配置类型获取全局配置信息 Get global config data by config type
     * @param {string} [configType] 配置类型 config type
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetGlobalConfigByConfigTypeGet: async (
      configType?: string,
      tenantId?: string,
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

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
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
     * @param {string} [tenantId]
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigUpdateGlobalConfigsPost: async (
      tenantId?: string,
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

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
      }

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
     * @param {string} [tenantId]
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigAddGlobalConfigsPost(
      tenantId?: string,
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiGlobalConfigAddGlobalConfigsPost(
        tenantId,
        globalConfigInOut,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除全局配置信息 Delete global config data
     * @param {string} [tenantId]
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigDeleteGlobalConfigsPost(
      tenantId?: string,
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigDeleteGlobalConfigsPost(
          tenantId,
          requestBody,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有全局配置信息 Get all global config data
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigGetAllGlobalConfigsGet(
      tenantId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GlobalConfigInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigGetAllGlobalConfigsGet(tenantId, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过配置类型获取全局配置信息 Get global config data by config type
     * @param {string} [configType] 配置类型 config type
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigGetGlobalConfigByConfigTypeGet(
      configType?: string,
      tenantId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GlobalConfigInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigGetGlobalConfigByConfigTypeGet(
          configType,
          tenantId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新全局配置信息 Update global config data
     * @param {string} [tenantId]
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGlobalConfigUpdateGlobalConfigsPost(
      tenantId?: string,
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGlobalConfigUpdateGlobalConfigsPost(
          tenantId,
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
     * @param {string} [tenantId]
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigAddGlobalConfigsPost(
      tenantId?: string,
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiGlobalConfigAddGlobalConfigsPost(tenantId, globalConfigInOut, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除全局配置信息 Delete global config data
     * @param {string} [tenantId]
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigDeleteGlobalConfigsPost(
      tenantId?: string,
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiGlobalConfigDeleteGlobalConfigsPost(tenantId, requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有全局配置信息 Get all global config data
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetAllGlobalConfigsGet(
      tenantId?: string,
      options?: any,
    ): AxiosPromise<Array<GlobalConfigInOut>> {
      return localVarFp
        .apiGlobalConfigGetAllGlobalConfigsGet(tenantId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过配置类型获取全局配置信息 Get global config data by config type
     * @param {string} [configType] 配置类型 config type
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigGetGlobalConfigByConfigTypeGet(
      configType?: string,
      tenantId?: string,
      options?: any,
    ): AxiosPromise<Array<GlobalConfigInOut>> {
      return localVarFp
        .apiGlobalConfigGetGlobalConfigByConfigTypeGet(configType, tenantId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新全局配置信息 Update global config data
     * @param {string} [tenantId]
     * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGlobalConfigUpdateGlobalConfigsPost(
      tenantId?: string,
      globalConfigInOut?: Array<GlobalConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiGlobalConfigUpdateGlobalConfigsPost(tenantId, globalConfigInOut, options)
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
   * @param {string} [tenantId]
   * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigAddGlobalConfigsPost(
    tenantId?: string,
    globalConfigInOut?: Array<GlobalConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigAddGlobalConfigsPost(tenantId, globalConfigInOut, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除全局配置信息 Delete global config data
   * @param {string} [tenantId]
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigDeleteGlobalConfigsPost(
    tenantId?: string,
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigDeleteGlobalConfigsPost(tenantId, requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有全局配置信息 Get all global config data
   * @param {string} [tenantId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigGetAllGlobalConfigsGet(tenantId?: string, options?: AxiosRequestConfig) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigGetAllGlobalConfigsGet(tenantId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过配置类型获取全局配置信息 Get global config data by config type
   * @param {string} [configType] 配置类型 config type
   * @param {string} [tenantId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigGetGlobalConfigByConfigTypeGet(
    configType?: string,
    tenantId?: string,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigGetGlobalConfigByConfigTypeGet(configType, tenantId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新全局配置信息 Update global config data
   * @param {string} [tenantId]
   * @param {Array<GlobalConfigInOut>} [globalConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GlobalConfigApi
   */
  public apiGlobalConfigUpdateGlobalConfigsPost(
    tenantId?: string,
    globalConfigInOut?: Array<GlobalConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return GlobalConfigApiFp(this.configuration)
      .apiGlobalConfigUpdateGlobalConfigsPost(tenantId, globalConfigInOut, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
