/* eslint-disable */
/**
 * 模型配置服务
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
import { LibraryInfo } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { SaveAutoForecastConfigInput } from '../models'
/**
 * AutoForecastApi - axios parameter creator
 * @export
 */
export const AutoForecastApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 新增一条配置
     * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastAddConfigPost: async (
      saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/autoforecast/add-config`
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
        saveAutoForecastConfigInput,
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
     * @summary 获取所有的滚动预报配置 Get all the auto forecast configs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastListGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/autoforecast/list`
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
     * @summary 保存默认的滚动预报配置 Save default auto forecast config
     * @param {string} [tenantId]
     * @param {Array<LibraryInfo>} [libraryInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastSaveDefaultConfigPost: async (
      tenantId?: string,
      libraryInfo?: Array<LibraryInfo>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/autoforecast/save-default-config`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantId !== undefined) {
        localVarQueryParameter['tenantId'] = tenantId
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
        libraryInfo,
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
     * @summary 保存一条滚动预报配置 Save an auto forecast config
     * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastSaveconfigPost: async (
      saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/autoforecast/saveconfig`
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
        saveAutoForecastConfigInput,
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
     * @summary 更新预报配置
     * @param {Array<SaveAutoForecastConfigInput>} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastUpdateConfigPost: async (
      saveAutoForecastConfigInput?: Array<SaveAutoForecastConfigInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/autoforecast/update-config`
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
        saveAutoForecastConfigInput,
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
 * AutoForecastApi - functional programming interface
 * @export
 */
export const AutoForecastApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AutoForecastApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 新增一条配置
     * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationAutoforecastAddConfigPost(
      saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationAutoforecastAddConfigPost(
          saveAutoForecastConfigInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有的滚动预报配置 Get all the auto forecast configs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationAutoforecastListGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SaveAutoForecastConfigInput>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationAutoforecastListGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存默认的滚动预报配置 Save default auto forecast config
     * @param {string} [tenantId]
     * @param {Array<LibraryInfo>} [libraryInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationAutoforecastSaveDefaultConfigPost(
      tenantId?: string,
      libraryInfo?: Array<LibraryInfo>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationAutoforecastSaveDefaultConfigPost(
          tenantId,
          libraryInfo,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存一条滚动预报配置 Save an auto forecast config
     * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationAutoforecastSaveconfigPost(
      saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationAutoforecastSaveconfigPost(
          saveAutoForecastConfigInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新预报配置
     * @param {Array<SaveAutoForecastConfigInput>} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationAutoforecastUpdateConfigPost(
      saveAutoForecastConfigInput?: Array<SaveAutoForecastConfigInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationAutoforecastUpdateConfigPost(
          saveAutoForecastConfigInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * AutoForecastApi - factory interface
 * @export
 */
export const AutoForecastApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AutoForecastApiFp(configuration)
  return {
    /**
     *
     * @summary 新增一条配置
     * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastAddConfigPost(
      saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV1ModelConfigurationAutoforecastAddConfigPost(saveAutoForecastConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有的滚动预报配置 Get all the auto forecast configs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastListGet(
      options?: any,
    ): AxiosPromise<Array<SaveAutoForecastConfigInput>> {
      return localVarFp
        .apiV1ModelConfigurationAutoforecastListGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存默认的滚动预报配置 Save default auto forecast config
     * @param {string} [tenantId]
     * @param {Array<LibraryInfo>} [libraryInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastSaveDefaultConfigPost(
      tenantId?: string,
      libraryInfo?: Array<LibraryInfo>,
      options?: any,
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .apiV1ModelConfigurationAutoforecastSaveDefaultConfigPost(tenantId, libraryInfo, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存一条滚动预报配置 Save an auto forecast config
     * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastSaveconfigPost(
      saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV1ModelConfigurationAutoforecastSaveconfigPost(saveAutoForecastConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新预报配置
     * @param {Array<SaveAutoForecastConfigInput>} [saveAutoForecastConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationAutoforecastUpdateConfigPost(
      saveAutoForecastConfigInput?: Array<SaveAutoForecastConfigInput>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelConfigurationAutoforecastUpdateConfigPost(saveAutoForecastConfigInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AutoForecastApi - object-oriented interface
 * @export
 * @class AutoForecastApi
 * @extends {BaseAPI}
 */
export class AutoForecastApi extends BaseAPI {
  /**
   *
   * @summary 新增一条配置
   * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AutoForecastApi
   */
  public apiV1ModelConfigurationAutoforecastAddConfigPost(
    saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
    options?: AxiosRequestConfig,
  ) {
    return AutoForecastApiFp(this.configuration)
      .apiV1ModelConfigurationAutoforecastAddConfigPost(saveAutoForecastConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有的滚动预报配置 Get all the auto forecast configs
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AutoForecastApi
   */
  public apiV1ModelConfigurationAutoforecastListGet(options?: AxiosRequestConfig) {
    return AutoForecastApiFp(this.configuration)
      .apiV1ModelConfigurationAutoforecastListGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存默认的滚动预报配置 Save default auto forecast config
   * @param {string} [tenantId]
   * @param {Array<LibraryInfo>} [libraryInfo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AutoForecastApi
   */
  public apiV1ModelConfigurationAutoforecastSaveDefaultConfigPost(
    tenantId?: string,
    libraryInfo?: Array<LibraryInfo>,
    options?: AxiosRequestConfig,
  ) {
    return AutoForecastApiFp(this.configuration)
      .apiV1ModelConfigurationAutoforecastSaveDefaultConfigPost(tenantId, libraryInfo, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存一条滚动预报配置 Save an auto forecast config
   * @param {SaveAutoForecastConfigInput} [saveAutoForecastConfigInput]
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof AutoForecastApi
   */
  public apiV1ModelConfigurationAutoforecastSaveconfigPost(
    saveAutoForecastConfigInput?: SaveAutoForecastConfigInput,
    options?: AxiosRequestConfig,
  ) {
    return AutoForecastApiFp(this.configuration)
      .apiV1ModelConfigurationAutoforecastSaveconfigPost(saveAutoForecastConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新预报配置
   * @param {Array<SaveAutoForecastConfigInput>} [saveAutoForecastConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AutoForecastApi
   */
  public apiV1ModelConfigurationAutoforecastUpdateConfigPost(
    saveAutoForecastConfigInput?: Array<SaveAutoForecastConfigInput>,
    options?: AxiosRequestConfig,
  ) {
    return AutoForecastApiFp(this.configuration)
      .apiV1ModelConfigurationAutoforecastUpdateConfigPost(saveAutoForecastConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
