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
import { FloodSensitivePointInfo } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * FloodSensitivePointApi - axios parameter creator
 * @export
 */
export const FloodSensitivePointApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加一个易涝点 Add a flood sensitive point
     * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointAddPost: async (
      floodSensitivePointInfo?: FloodSensitivePointInfo,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/sensitive-point/add`
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
        floodSensitivePointInfo,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 根据模板方案的ID，查询所有的易涝点信息列表 Get all the flood sensitive points by template scenario id.
     * @summary 获取所有的易涝点信息列表 Get all the flood sensitive points
     * @param {string} [scenarioId] 模板方案ID template scenario\&#39;s id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointListGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/sensitive-point/list`
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
    /**
     * 根据ID删除一个易涝点信息 Delete a flood sensitive point by Id.
     * @summary 删除一个易涝点 Remove a flood sensitive point
     * @param {string} [id] flood sensitive point id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointRemoveDelete: async (
      id?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/sensitive-point/remove`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (id !== undefined) {
        localVarQueryParameter['Id'] = id
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
     * 根据ID更新一个易涝点信息 Update a flood sensitive point by Id.
     * @summary 更新一个易涝点信息 Update a flood sensitive point
     * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointUpdatePut: async (
      floodSensitivePointInfo?: FloodSensitivePointInfo,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/sensitive-point/update`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
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
        floodSensitivePointInfo,
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
 * FloodSensitivePointApi - functional programming interface
 * @export
 */
export const FloodSensitivePointApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = FloodSensitivePointApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加一个易涝点 Add a flood sensitive point
     * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationSensitivePointAddPost(
      floodSensitivePointInfo?: FloodSensitivePointInfo,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationSensitivePointAddPost(
          floodSensitivePointInfo,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据模板方案的ID，查询所有的易涝点信息列表 Get all the flood sensitive points by template scenario id.
     * @summary 获取所有的易涝点信息列表 Get all the flood sensitive points
     * @param {string} [scenarioId] 模板方案ID template scenario\&#39;s id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationSensitivePointListGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FloodSensitivePointInfo>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationSensitivePointListGet(
          scenarioId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据ID删除一个易涝点信息 Delete a flood sensitive point by Id.
     * @summary 删除一个易涝点 Remove a flood sensitive point
     * @param {string} [id] flood sensitive point id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationSensitivePointRemoveDelete(
      id?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationSensitivePointRemoveDelete(
          id,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据ID更新一个易涝点信息 Update a flood sensitive point by Id.
     * @summary 更新一个易涝点信息 Update a flood sensitive point
     * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationSensitivePointUpdatePut(
      floodSensitivePointInfo?: FloodSensitivePointInfo,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationSensitivePointUpdatePut(
          floodSensitivePointInfo,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * FloodSensitivePointApi - factory interface
 * @export
 */
export const FloodSensitivePointApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = FloodSensitivePointApiFp(configuration)
  return {
    /**
     *
     * @summary 添加一个易涝点 Add a flood sensitive point
     * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointAddPost(
      floodSensitivePointInfo?: FloodSensitivePointInfo,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV1ModelConfigurationSensitivePointAddPost(floodSensitivePointInfo, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据模板方案的ID，查询所有的易涝点信息列表 Get all the flood sensitive points by template scenario id.
     * @summary 获取所有的易涝点信息列表 Get all the flood sensitive points
     * @param {string} [scenarioId] 模板方案ID template scenario\&#39;s id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointListGet(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<Array<FloodSensitivePointInfo>> {
      return localVarFp
        .apiV1ModelConfigurationSensitivePointListGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据ID删除一个易涝点信息 Delete a flood sensitive point by Id.
     * @summary 删除一个易涝点 Remove a flood sensitive point
     * @param {string} [id] flood sensitive point id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointRemoveDelete(
      id?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelConfigurationSensitivePointRemoveDelete(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据ID更新一个易涝点信息 Update a flood sensitive point by Id.
     * @summary 更新一个易涝点信息 Update a flood sensitive point
     * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationSensitivePointUpdatePut(
      floodSensitivePointInfo?: FloodSensitivePointInfo,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelConfigurationSensitivePointUpdatePut(floodSensitivePointInfo, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FloodSensitivePointApi - object-oriented interface
 * @export
 * @class FloodSensitivePointApi
 * @extends {BaseAPI}
 */
export class FloodSensitivePointApi extends BaseAPI {
  /**
   *
   * @summary 添加一个易涝点 Add a flood sensitive point
   * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodSensitivePointApi
   */
  public apiV1ModelConfigurationSensitivePointAddPost(
    floodSensitivePointInfo?: FloodSensitivePointInfo,
    options?: AxiosRequestConfig,
  ) {
    return FloodSensitivePointApiFp(this.configuration)
      .apiV1ModelConfigurationSensitivePointAddPost(floodSensitivePointInfo, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据模板方案的ID，查询所有的易涝点信息列表 Get all the flood sensitive points by template scenario id.
   * @summary 获取所有的易涝点信息列表 Get all the flood sensitive points
   * @param {string} [scenarioId] 模板方案ID template scenario\&#39;s id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodSensitivePointApi
   */
  public apiV1ModelConfigurationSensitivePointListGet(
    scenarioId?: string,
    options?: AxiosRequestConfig,
  ) {
    return FloodSensitivePointApiFp(this.configuration)
      .apiV1ModelConfigurationSensitivePointListGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据ID删除一个易涝点信息 Delete a flood sensitive point by Id.
   * @summary 删除一个易涝点 Remove a flood sensitive point
   * @param {string} [id] flood sensitive point id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodSensitivePointApi
   */
  public apiV1ModelConfigurationSensitivePointRemoveDelete(
    id?: string,
    options?: AxiosRequestConfig,
  ) {
    return FloodSensitivePointApiFp(this.configuration)
      .apiV1ModelConfigurationSensitivePointRemoveDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据ID更新一个易涝点信息 Update a flood sensitive point by Id.
   * @summary 更新一个易涝点信息 Update a flood sensitive point
   * @param {FloodSensitivePointInfo} [floodSensitivePointInfo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodSensitivePointApi
   */
  public apiV1ModelConfigurationSensitivePointUpdatePut(
    floodSensitivePointInfo?: FloodSensitivePointInfo,
    options?: AxiosRequestConfig,
  ) {
    return FloodSensitivePointApiFp(this.configuration)
      .apiV1ModelConfigurationSensitivePointUpdatePut(floodSensitivePointInfo, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
