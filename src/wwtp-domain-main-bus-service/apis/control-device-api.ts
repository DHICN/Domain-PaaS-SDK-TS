/* eslint-disable */
/**
 * 污水业务中台领域服务-v4
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
import { ControlDeviceInputOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * ControlDeviceApi - axios parameter creator
 * @export
 */
export const ControlDeviceApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 删除租户下所有的设备自动模型状态信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ControlDevicesDeleteAllPost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/control/devices/delete/all`
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
     * @summary 获取设备的自动模式状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ControlDevicesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/control/devices`
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
     * @summary 保存设备的自动模式状态
     * @param {Array<ControlDeviceInputOutput>} [controlDeviceInputOutput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ControlDevicesSavePost: async (
      controlDeviceInputOutput?: Array<ControlDeviceInputOutput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/control/devices/save`
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
        controlDeviceInputOutput,
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
 * ControlDeviceApi - functional programming interface
 * @export
 */
export const ControlDeviceApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ControlDeviceApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 删除租户下所有的设备自动模型状态信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ControlDevicesDeleteAllPost(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ControlDevicesDeleteAllPost(
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取设备的自动模式状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ControlDevicesGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ControlDeviceInputOutput>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ControlDevicesGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存设备的自动模式状态
     * @param {Array<ControlDeviceInputOutput>} [controlDeviceInputOutput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ControlDevicesSavePost(
      controlDeviceInputOutput?: Array<ControlDeviceInputOutput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ControlDevicesSavePost(
        controlDeviceInputOutput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ControlDeviceApi - factory interface
 * @export
 */
export const ControlDeviceApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ControlDeviceApiFp(configuration)
  return {
    /**
     *
     * @summary 删除租户下所有的设备自动模型状态信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ControlDevicesDeleteAllPost(options?: any): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ControlDevicesDeleteAllPost(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取设备的自动模式状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ControlDevicesGet(options?: any): AxiosPromise<Array<ControlDeviceInputOutput>> {
      return localVarFp.apiV1ControlDevicesGet(options).then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存设备的自动模式状态
     * @param {Array<ControlDeviceInputOutput>} [controlDeviceInputOutput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ControlDevicesSavePost(
      controlDeviceInputOutput?: Array<ControlDeviceInputOutput>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ControlDevicesSavePost(controlDeviceInputOutput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ControlDeviceApi - object-oriented interface
 * @export
 * @class ControlDeviceApi
 * @extends {BaseAPI}
 */
export class ControlDeviceApi extends BaseAPI {
  /**
   *
   * @summary 删除租户下所有的设备自动模型状态信息
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ControlDeviceApi
   */
  public apiV1ControlDevicesDeleteAllPost(options?: AxiosRequestConfig) {
    return ControlDeviceApiFp(this.configuration)
      .apiV1ControlDevicesDeleteAllPost(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取设备的自动模式状态
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ControlDeviceApi
   */
  public apiV1ControlDevicesGet(options?: AxiosRequestConfig) {
    return ControlDeviceApiFp(this.configuration)
      .apiV1ControlDevicesGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存设备的自动模式状态
   * @param {Array<ControlDeviceInputOutput>} [controlDeviceInputOutput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ControlDeviceApi
   */
  public apiV1ControlDevicesSavePost(
    controlDeviceInputOutput?: Array<ControlDeviceInputOutput>,
    options?: AxiosRequestConfig,
  ) {
    return ControlDeviceApiFp(this.configuration)
      .apiV1ControlDevicesSavePost(controlDeviceInputOutput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
