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
import { MqttDeviceIndicatorRelInfo } from '../models'
/**
 * MqttApi - axios parameter creator
 * @export
 */
export const MqttApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary /api/v1/iot/mqtt/delete
     * @param {string} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotMqttDeletePost: async (
      id?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/iot/mqtt/delete`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
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
     *
     * @summary /api/v1/iot/mqtt/import
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotMqttImportPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/iot/mqtt/import`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
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
     * @summary /api/v1/iot/mqtt/list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotMqttListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/iot/mqtt/list`
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
  }
}

/**
 * MqttApi - functional programming interface
 * @export
 */
export const MqttApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MqttApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary /api/v1/iot/mqtt/delete
     * @param {string} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1IotMqttDeletePost(
      id?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1IotMqttDeletePost(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary /api/v1/iot/mqtt/import
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1IotMqttImportPost(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1IotMqttImportPost(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary /api/v1/iot/mqtt/list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1IotMqttListGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MqttDeviceIndicatorRelInfo>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1IotMqttListGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * MqttApi - factory interface
 * @export
 */
export const MqttApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = MqttApiFp(configuration)
  return {
    /**
     *
     * @summary /api/v1/iot/mqtt/delete
     * @param {string} [id]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotMqttDeletePost(id?: string, options?: any): AxiosPromise<boolean> {
      return localVarFp
        .apiV1IotMqttDeletePost(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary /api/v1/iot/mqtt/import
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotMqttImportPost(options?: any): AxiosPromise<Array<string>> {
      return localVarFp.apiV1IotMqttImportPost(options).then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary /api/v1/iot/mqtt/list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotMqttListGet(options?: any): AxiosPromise<Array<MqttDeviceIndicatorRelInfo>> {
      return localVarFp.apiV1IotMqttListGet(options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * MqttApi - object-oriented interface
 * @export
 * @class MqttApi
 * @extends {BaseAPI}
 */
export class MqttApi extends BaseAPI {
  /**
   *
   * @summary /api/v1/iot/mqtt/delete
   * @param {string} [id]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MqttApi
   */
  public apiV1IotMqttDeletePost(id?: string, options?: AxiosRequestConfig) {
    return MqttApiFp(this.configuration)
      .apiV1IotMqttDeletePost(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary /api/v1/iot/mqtt/import
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MqttApi
   */
  public apiV1IotMqttImportPost(options?: AxiosRequestConfig) {
    return MqttApiFp(this.configuration)
      .apiV1IotMqttImportPost(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary /api/v1/iot/mqtt/list
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MqttApi
   */
  public apiV1IotMqttListGet(options?: AxiosRequestConfig) {
    return MqttApiFp(this.configuration)
      .apiV1IotMqttListGet(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
