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
import { DosingStatisticMonthlysInOut } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * DosingStatisticMonthlyApi - axios parameter creator
 * @export
 */
export const DosingStatisticMonthlyApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加加药月统计信息 Add dosing monthly statistic data
     * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyAddDosingStatisticMonthlysPost: async (
      dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingStatisticMonthly/AddDosingStatisticMonthlys`
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
        dosingStatisticMonthlysInOut,
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
     * @summary 根据ID删除加药月统计信息 Delete dosing monthly statistic data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyDeleteDosingStatisticMonthlysPost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingStatisticMonthly/DeleteDosingStatisticMonthlys`
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
     * @summary 获取所有加药月统计信息 Get all dosing monthly statistic data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyGetAllDosingStatisticMonthlysGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingStatisticMonthly/GetAllDosingStatisticMonthlys`
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
     * @summary 通过药剂类型获取加药月统计信息 Get dosing monthly statistic data by dosage type
     * @param {number} [category] 药剂类型 dosage type
     * @param {string} [startTime] 开始时间 start time
     * @param {string} [endTime] 结束时间 end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyGetDosingStatisticMonthlysByCategoryGet: async (
      category?: number,
      startTime?: string,
      endTime?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingStatisticMonthly/GetDosingStatisticMonthlysByCategory`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (category !== undefined) {
        localVarQueryParameter['category'] = category
      }

      if (startTime !== undefined) {
        localVarQueryParameter['startTime'] = startTime
      }

      if (endTime !== undefined) {
        localVarQueryParameter['endTime'] = endTime
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
     * @summary 通过时间获取加药月统计信息 Get dosing monthly statistic data by time
     * @param {string} [time] 时间 time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyGetDosingStatisticMonthlysByDateGet: async (
      time?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingStatisticMonthly/GetDosingStatisticMonthlysByDate`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (time !== undefined) {
        localVarQueryParameter['time'] = time
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
     * @summary 更新加药月统计信息 Update dosing monthly statistic data
     * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyUpdateDosingStatisticMonthlysPost: async (
      dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingStatisticMonthly/UpdateDosingStatisticMonthlys`
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
        dosingStatisticMonthlysInOut,
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
 * DosingStatisticMonthlyApi - functional programming interface
 * @export
 */
export const DosingStatisticMonthlyApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DosingStatisticMonthlyApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加加药月统计信息 Add dosing monthly statistic data
     * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingStatisticMonthlyAddDosingStatisticMonthlysPost(
      dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingStatisticMonthlyAddDosingStatisticMonthlysPost(
          dosingStatisticMonthlysInOut,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据ID删除加药月统计信息 Delete dosing monthly statistic data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingStatisticMonthlyDeleteDosingStatisticMonthlysPost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingStatisticMonthlyDeleteDosingStatisticMonthlysPost(
          requestBody,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有加药月统计信息 Get all dosing monthly statistic data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingStatisticMonthlyGetAllDosingStatisticMonthlysGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<DosingStatisticMonthlysInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingStatisticMonthlyGetAllDosingStatisticMonthlysGet(
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过药剂类型获取加药月统计信息 Get dosing monthly statistic data by dosage type
     * @param {number} [category] 药剂类型 dosage type
     * @param {string} [startTime] 开始时间 start time
     * @param {string} [endTime] 结束时间 end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingStatisticMonthlyGetDosingStatisticMonthlysByCategoryGet(
      category?: number,
      startTime?: string,
      endTime?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<DosingStatisticMonthlysInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingStatisticMonthlyGetDosingStatisticMonthlysByCategoryGet(
          category,
          startTime,
          endTime,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过时间获取加药月统计信息 Get dosing monthly statistic data by time
     * @param {string} [time] 时间 time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingStatisticMonthlyGetDosingStatisticMonthlysByDateGet(
      time?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<DosingStatisticMonthlysInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingStatisticMonthlyGetDosingStatisticMonthlysByDateGet(
          time,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新加药月统计信息 Update dosing monthly statistic data
     * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingStatisticMonthlyUpdateDosingStatisticMonthlysPost(
      dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingStatisticMonthlyUpdateDosingStatisticMonthlysPost(
          dosingStatisticMonthlysInOut,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * DosingStatisticMonthlyApi - factory interface
 * @export
 */
export const DosingStatisticMonthlyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = DosingStatisticMonthlyApiFp(configuration)
  return {
    /**
     *
     * @summary 添加加药月统计信息 Add dosing monthly statistic data
     * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyAddDosingStatisticMonthlysPost(
      dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingStatisticMonthlyAddDosingStatisticMonthlysPost(
          dosingStatisticMonthlysInOut,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据ID删除加药月统计信息 Delete dosing monthly statistic data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyDeleteDosingStatisticMonthlysPost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingStatisticMonthlyDeleteDosingStatisticMonthlysPost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有加药月统计信息 Get all dosing monthly statistic data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyGetAllDosingStatisticMonthlysGet(
      options?: any,
    ): AxiosPromise<Array<DosingStatisticMonthlysInOut>> {
      return localVarFp
        .apiDosingStatisticMonthlyGetAllDosingStatisticMonthlysGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过药剂类型获取加药月统计信息 Get dosing monthly statistic data by dosage type
     * @param {number} [category] 药剂类型 dosage type
     * @param {string} [startTime] 开始时间 start time
     * @param {string} [endTime] 结束时间 end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyGetDosingStatisticMonthlysByCategoryGet(
      category?: number,
      startTime?: string,
      endTime?: string,
      options?: any,
    ): AxiosPromise<Array<DosingStatisticMonthlysInOut>> {
      return localVarFp
        .apiDosingStatisticMonthlyGetDosingStatisticMonthlysByCategoryGet(
          category,
          startTime,
          endTime,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过时间获取加药月统计信息 Get dosing monthly statistic data by time
     * @param {string} [time] 时间 time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyGetDosingStatisticMonthlysByDateGet(
      time?: string,
      options?: any,
    ): AxiosPromise<Array<DosingStatisticMonthlysInOut>> {
      return localVarFp
        .apiDosingStatisticMonthlyGetDosingStatisticMonthlysByDateGet(time, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新加药月统计信息 Update dosing monthly statistic data
     * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingStatisticMonthlyUpdateDosingStatisticMonthlysPost(
      dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingStatisticMonthlyUpdateDosingStatisticMonthlysPost(
          dosingStatisticMonthlysInOut,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * DosingStatisticMonthlyApi - object-oriented interface
 * @export
 * @class DosingStatisticMonthlyApi
 * @extends {BaseAPI}
 */
export class DosingStatisticMonthlyApi extends BaseAPI {
  /**
   *
   * @summary 添加加药月统计信息 Add dosing monthly statistic data
   * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingStatisticMonthlyApi
   */
  public apiDosingStatisticMonthlyAddDosingStatisticMonthlysPost(
    dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
    options?: AxiosRequestConfig,
  ) {
    return DosingStatisticMonthlyApiFp(this.configuration)
      .apiDosingStatisticMonthlyAddDosingStatisticMonthlysPost(
        dosingStatisticMonthlysInOut,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据ID删除加药月统计信息 Delete dosing monthly statistic data by ids
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingStatisticMonthlyApi
   */
  public apiDosingStatisticMonthlyDeleteDosingStatisticMonthlysPost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return DosingStatisticMonthlyApiFp(this.configuration)
      .apiDosingStatisticMonthlyDeleteDosingStatisticMonthlysPost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有加药月统计信息 Get all dosing monthly statistic data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingStatisticMonthlyApi
   */
  public apiDosingStatisticMonthlyGetAllDosingStatisticMonthlysGet(options?: AxiosRequestConfig) {
    return DosingStatisticMonthlyApiFp(this.configuration)
      .apiDosingStatisticMonthlyGetAllDosingStatisticMonthlysGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过药剂类型获取加药月统计信息 Get dosing monthly statistic data by dosage type
   * @param {number} [category] 药剂类型 dosage type
   * @param {string} [startTime] 开始时间 start time
   * @param {string} [endTime] 结束时间 end time
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingStatisticMonthlyApi
   */
  public apiDosingStatisticMonthlyGetDosingStatisticMonthlysByCategoryGet(
    category?: number,
    startTime?: string,
    endTime?: string,
    options?: AxiosRequestConfig,
  ) {
    return DosingStatisticMonthlyApiFp(this.configuration)
      .apiDosingStatisticMonthlyGetDosingStatisticMonthlysByCategoryGet(
        category,
        startTime,
        endTime,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过时间获取加药月统计信息 Get dosing monthly statistic data by time
   * @param {string} [time] 时间 time
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingStatisticMonthlyApi
   */
  public apiDosingStatisticMonthlyGetDosingStatisticMonthlysByDateGet(
    time?: string,
    options?: AxiosRequestConfig,
  ) {
    return DosingStatisticMonthlyApiFp(this.configuration)
      .apiDosingStatisticMonthlyGetDosingStatisticMonthlysByDateGet(time, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新加药月统计信息 Update dosing monthly statistic data
   * @param {Array<DosingStatisticMonthlysInOut>} [dosingStatisticMonthlysInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingStatisticMonthlyApi
   */
  public apiDosingStatisticMonthlyUpdateDosingStatisticMonthlysPost(
    dosingStatisticMonthlysInOut?: Array<DosingStatisticMonthlysInOut>,
    options?: AxiosRequestConfig,
  ) {
    return DosingStatisticMonthlyApiFp(this.configuration)
      .apiDosingStatisticMonthlyUpdateDosingStatisticMonthlysPost(
        dosingStatisticMonthlysInOut,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
