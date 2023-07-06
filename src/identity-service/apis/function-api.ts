/* eslint-disable */
/**
 * 用户认证管理服务
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
import { AddFunctionInput } from '../models'
// @ts-ignore
import { FunctionDto } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UpdateFunctionInput } from '../models'
/**
 * FunctionApi - axios parameter creator
 * @export
 */
export const FunctionApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加功能模块
     * @param {AddFunctionInput} [addFunctionInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1FunctionAddPost: async (
      addFunctionInput?: AddFunctionInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/function/add`
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
        addFunctionInput,
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
     * @summary 获取所有的功能
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1FunctionListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/function/list`
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
     * @summary 更新功能的name
     * @param {UpdateFunctionInput} [updateFunctionInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1FunctionUpdatePost: async (
      updateFunctionInput?: UpdateFunctionInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/function/update`
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
        updateFunctionInput,
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
 * FunctionApi - functional programming interface
 * @export
 */
export const FunctionApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = FunctionApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加功能模块
     * @param {AddFunctionInput} [addFunctionInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1FunctionAddPost(
      addFunctionInput?: AddFunctionInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FunctionDto>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1FunctionAddPost(
        addFunctionInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有的功能
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1FunctionListGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FunctionDto>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1FunctionListGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新功能的name
     * @param {UpdateFunctionInput} [updateFunctionInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1FunctionUpdatePost(
      updateFunctionInput?: UpdateFunctionInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FunctionDto>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1FunctionUpdatePost(
        updateFunctionInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * FunctionApi - factory interface
 * @export
 */
export const FunctionApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = FunctionApiFp(configuration)
  return {
    /**
     *
     * @summary 添加功能模块
     * @param {AddFunctionInput} [addFunctionInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1FunctionAddPost(
      addFunctionInput?: AddFunctionInput,
      options?: any,
    ): AxiosPromise<FunctionDto> {
      return localVarFp
        .apiV1FunctionAddPost(addFunctionInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有的功能
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1FunctionListGet(options?: any): AxiosPromise<Array<FunctionDto>> {
      return localVarFp.apiV1FunctionListGet(options).then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新功能的name
     * @param {UpdateFunctionInput} [updateFunctionInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1FunctionUpdatePost(
      updateFunctionInput?: UpdateFunctionInput,
      options?: any,
    ): AxiosPromise<FunctionDto> {
      return localVarFp
        .apiV1FunctionUpdatePost(updateFunctionInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FunctionApi - object-oriented interface
 * @export
 * @class FunctionApi
 * @extends {BaseAPI}
 */
export class FunctionApi extends BaseAPI {
  /**
   *
   * @summary 添加功能模块
   * @param {AddFunctionInput} [addFunctionInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FunctionApi
   */
  public apiV1FunctionAddPost(addFunctionInput?: AddFunctionInput, options?: AxiosRequestConfig) {
    return FunctionApiFp(this.configuration)
      .apiV1FunctionAddPost(addFunctionInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有的功能
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FunctionApi
   */
  public apiV1FunctionListGet(options?: AxiosRequestConfig) {
    return FunctionApiFp(this.configuration)
      .apiV1FunctionListGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新功能的name
   * @param {UpdateFunctionInput} [updateFunctionInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FunctionApi
   */
  public apiV1FunctionUpdatePost(
    updateFunctionInput?: UpdateFunctionInput,
    options?: AxiosRequestConfig,
  ) {
    return FunctionApiFp(this.configuration)
      .apiV1FunctionUpdatePost(updateFunctionInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}