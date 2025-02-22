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
import { RemoteServiceErrorResponse } from '../models'
/**
 * RpcOperApi - axios parameter creator
 * @export
 */
export const RpcOperApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 热更新角色权限信息 Hot update role permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshRolePersPost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/rpcOper/refreshRolePers`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
     * @summary 热更新角色权限信息 Hot update role permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshRolePersPost_1: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/rpcOper/refreshRolePers`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
     * @summary 热更新微服务信息 Hot update microservice information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshServicesPost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/rpcOper/refreshServices`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
     * @summary 热更新微服务信息 Hot update microservice information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshServicesPost_2: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/rpcOper/refreshServices`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
 * RpcOperApi - functional programming interface
 * @export
 */
export const RpcOperApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = RpcOperApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 热更新角色权限信息 Hot update role permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRpcOperRefreshRolePersPost(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRpcOperRefreshRolePersPost(
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 热更新角色权限信息 Hot update role permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRpcOperRefreshRolePersPost_1(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRpcOperRefreshRolePersPost_1(
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 热更新微服务信息 Hot update microservice information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRpcOperRefreshServicesPost(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRpcOperRefreshServicesPost(
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 热更新微服务信息 Hot update microservice information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRpcOperRefreshServicesPost_2(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRpcOperRefreshServicesPost_2(
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * RpcOperApi - factory interface
 * @export
 */
export const RpcOperApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = RpcOperApiFp(configuration)
  return {
    /**
     *
     * @summary 热更新角色权限信息 Hot update role permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshRolePersPost(options?: any): AxiosPromise<boolean> {
      return localVarFp
        .apiAppRpcOperRefreshRolePersPost(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 热更新角色权限信息 Hot update role permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshRolePersPost_1(options?: any): AxiosPromise<boolean> {
      return localVarFp
        .apiAppRpcOperRefreshRolePersPost_1(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 热更新微服务信息 Hot update microservice information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshServicesPost(options?: any): AxiosPromise<boolean> {
      return localVarFp
        .apiAppRpcOperRefreshServicesPost(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 热更新微服务信息 Hot update microservice information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRpcOperRefreshServicesPost_2(options?: any): AxiosPromise<boolean> {
      return localVarFp
        .apiAppRpcOperRefreshServicesPost_2(options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * RpcOperApi - object-oriented interface
 * @export
 * @class RpcOperApi
 * @extends {BaseAPI}
 */
export class RpcOperApi extends BaseAPI {
  /**
   *
   * @summary 热更新角色权限信息 Hot update role permission information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RpcOperApi
   */
  public apiAppRpcOperRefreshRolePersPost(options?: AxiosRequestConfig) {
    return RpcOperApiFp(this.configuration)
      .apiAppRpcOperRefreshRolePersPost(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 热更新角色权限信息 Hot update role permission information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RpcOperApi
   */
  public apiAppRpcOperRefreshRolePersPost_1(options?: AxiosRequestConfig) {
    return RpcOperApiFp(this.configuration)
      .apiAppRpcOperRefreshRolePersPost_1(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 热更新微服务信息 Hot update microservice information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RpcOperApi
   */
  public apiAppRpcOperRefreshServicesPost(options?: AxiosRequestConfig) {
    return RpcOperApiFp(this.configuration)
      .apiAppRpcOperRefreshServicesPost(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 热更新微服务信息 Hot update microservice information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RpcOperApi
   */
  public apiAppRpcOperRefreshServicesPost_2(options?: AxiosRequestConfig) {
    return RpcOperApiFp(this.configuration)
      .apiAppRpcOperRefreshServicesPost_2(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
