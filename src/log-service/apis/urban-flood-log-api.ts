/* eslint-disable */
/**
 * 日志服务
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
import { AddOnlineDataCleanResultLogInput } from '../models'
// @ts-ignore
import { GetOnlineDataCleanResultLogOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UrbanFloodForecastWarningLogInputOutput } from '../models'
/**
 * UrbanFloodLogApi - axios parameter creator
 * @export
 */
export const UrbanFloodLogApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Add clean result log information of online data into postgreSQL
     * @summary Add clean result log information of online data
     * @param {AddOnlineDataCleanResultLogInput} [addOnlineDataCleanResultLogInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogOnlineDataCleaningAddPost: async (
      addOnlineDataCleanResultLogInput?: AddOnlineDataCleanResultLogInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/log/online-data-cleaning/add`
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
        addOnlineDataCleanResultLogInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get clean result logs of online data
     * @summary Get clean result logs of online data
     * @param {string} [startTime] data clean start time
     * @param {string} [endTime] data clean end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogOnlineDataCleaningGet: async (
      startTime?: string,
      endTime?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/log/online-data-cleaning`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

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
     * Add model forecast warning logs into postgreSQL
     * @summary Add model forecast warning logs
     * @param {Array<UrbanFloodForecastWarningLogInputOutput>} [urbanFloodForecastWarningLogInputOutput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogUrbanFloodingWarningAddPost: async (
      urbanFloodForecastWarningLogInputOutput?: Array<UrbanFloodForecastWarningLogInputOutput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/log/urban-flooding/warning/add`
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
        urbanFloodForecastWarningLogInputOutput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get model forecast warning logs
     * @summary Get model forecast warning logs
     * @param {string} [startTime] start time
     * @param {string} [endTime] end time
     * @param {string} [pointCode] point code
     * @param {number} [warningLevel] warning level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogUrbanFloodingWarningGet: async (
      startTime?: string,
      endTime?: string,
      pointCode?: string,
      warningLevel?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/log/urban-flooding/warning`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (startTime !== undefined) {
        localVarQueryParameter['startTime'] = startTime
      }

      if (endTime !== undefined) {
        localVarQueryParameter['endTime'] = endTime
      }

      if (pointCode !== undefined) {
        localVarQueryParameter['pointCode'] = pointCode
      }

      if (warningLevel !== undefined) {
        localVarQueryParameter['warningLevel'] = warningLevel
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
  }
}

/**
 * UrbanFloodLogApi - functional programming interface
 * @export
 */
export const UrbanFloodLogApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UrbanFloodLogApiAxiosParamCreator(configuration)
  return {
    /**
     * Add clean result log information of online data into postgreSQL
     * @summary Add clean result log information of online data
     * @param {AddOnlineDataCleanResultLogInput} [addOnlineDataCleanResultLogInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1LogOnlineDataCleaningAddPost(
      addOnlineDataCleanResultLogInput?: AddOnlineDataCleanResultLogInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1LogOnlineDataCleaningAddPost(
        addOnlineDataCleanResultLogInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Get clean result logs of online data
     * @summary Get clean result logs of online data
     * @param {string} [startTime] data clean start time
     * @param {string} [endTime] data clean end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1LogOnlineDataCleaningGet(
      startTime?: string,
      endTime?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<GetOnlineDataCleanResultLogOutput>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1LogOnlineDataCleaningGet(
        startTime,
        endTime,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Add model forecast warning logs into postgreSQL
     * @summary Add model forecast warning logs
     * @param {Array<UrbanFloodForecastWarningLogInputOutput>} [urbanFloodForecastWarningLogInputOutput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1LogUrbanFloodingWarningAddPost(
      urbanFloodForecastWarningLogInputOutput?: Array<UrbanFloodForecastWarningLogInputOutput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1LogUrbanFloodingWarningAddPost(
        urbanFloodForecastWarningLogInputOutput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Get model forecast warning logs
     * @summary Get model forecast warning logs
     * @param {string} [startTime] start time
     * @param {string} [endTime] end time
     * @param {string} [pointCode] point code
     * @param {number} [warningLevel] warning level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1LogUrbanFloodingWarningGet(
      startTime?: string,
      endTime?: string,
      pointCode?: string,
      warningLevel?: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<UrbanFloodForecastWarningLogInputOutput>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1LogUrbanFloodingWarningGet(
        startTime,
        endTime,
        pointCode,
        warningLevel,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * UrbanFloodLogApi - factory interface
 * @export
 */
export const UrbanFloodLogApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = UrbanFloodLogApiFp(configuration)
  return {
    /**
     * Add clean result log information of online data into postgreSQL
     * @summary Add clean result log information of online data
     * @param {AddOnlineDataCleanResultLogInput} [addOnlineDataCleanResultLogInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogOnlineDataCleaningAddPost(
      addOnlineDataCleanResultLogInput?: AddOnlineDataCleanResultLogInput,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1LogOnlineDataCleaningAddPost(addOnlineDataCleanResultLogInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get clean result logs of online data
     * @summary Get clean result logs of online data
     * @param {string} [startTime] data clean start time
     * @param {string} [endTime] data clean end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogOnlineDataCleaningGet(
      startTime?: string,
      endTime?: string,
      options?: any,
    ): AxiosPromise<Array<GetOnlineDataCleanResultLogOutput>> {
      return localVarFp
        .apiV1LogOnlineDataCleaningGet(startTime, endTime, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Add model forecast warning logs into postgreSQL
     * @summary Add model forecast warning logs
     * @param {Array<UrbanFloodForecastWarningLogInputOutput>} [urbanFloodForecastWarningLogInputOutput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogUrbanFloodingWarningAddPost(
      urbanFloodForecastWarningLogInputOutput?: Array<UrbanFloodForecastWarningLogInputOutput>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1LogUrbanFloodingWarningAddPost(urbanFloodForecastWarningLogInputOutput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get model forecast warning logs
     * @summary Get model forecast warning logs
     * @param {string} [startTime] start time
     * @param {string} [endTime] end time
     * @param {string} [pointCode] point code
     * @param {number} [warningLevel] warning level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LogUrbanFloodingWarningGet(
      startTime?: string,
      endTime?: string,
      pointCode?: string,
      warningLevel?: number,
      options?: any,
    ): AxiosPromise<Array<UrbanFloodForecastWarningLogInputOutput>> {
      return localVarFp
        .apiV1LogUrbanFloodingWarningGet(startTime, endTime, pointCode, warningLevel, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * UrbanFloodLogApi - object-oriented interface
 * @export
 * @class UrbanFloodLogApi
 * @extends {BaseAPI}
 */
export class UrbanFloodLogApi extends BaseAPI {
  /**
   * Add clean result log information of online data into postgreSQL
   * @summary Add clean result log information of online data
   * @param {AddOnlineDataCleanResultLogInput} [addOnlineDataCleanResultLogInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrbanFloodLogApi
   */
  public apiV1LogOnlineDataCleaningAddPost(
    addOnlineDataCleanResultLogInput?: AddOnlineDataCleanResultLogInput,
    options?: AxiosRequestConfig,
  ) {
    return UrbanFloodLogApiFp(this.configuration)
      .apiV1LogOnlineDataCleaningAddPost(addOnlineDataCleanResultLogInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get clean result logs of online data
   * @summary Get clean result logs of online data
   * @param {string} [startTime] data clean start time
   * @param {string} [endTime] data clean end time
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrbanFloodLogApi
   */
  public apiV1LogOnlineDataCleaningGet(
    startTime?: string,
    endTime?: string,
    options?: AxiosRequestConfig,
  ) {
    return UrbanFloodLogApiFp(this.configuration)
      .apiV1LogOnlineDataCleaningGet(startTime, endTime, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Add model forecast warning logs into postgreSQL
   * @summary Add model forecast warning logs
   * @param {Array<UrbanFloodForecastWarningLogInputOutput>} [urbanFloodForecastWarningLogInputOutput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrbanFloodLogApi
   */
  public apiV1LogUrbanFloodingWarningAddPost(
    urbanFloodForecastWarningLogInputOutput?: Array<UrbanFloodForecastWarningLogInputOutput>,
    options?: AxiosRequestConfig,
  ) {
    return UrbanFloodLogApiFp(this.configuration)
      .apiV1LogUrbanFloodingWarningAddPost(urbanFloodForecastWarningLogInputOutput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get model forecast warning logs
   * @summary Get model forecast warning logs
   * @param {string} [startTime] start time
   * @param {string} [endTime] end time
   * @param {string} [pointCode] point code
   * @param {number} [warningLevel] warning level
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrbanFloodLogApi
   */
  public apiV1LogUrbanFloodingWarningGet(
    startTime?: string,
    endTime?: string,
    pointCode?: string,
    warningLevel?: number,
    options?: AxiosRequestConfig,
  ) {
    return UrbanFloodLogApiFp(this.configuration)
      .apiV1LogUrbanFloodingWarningGet(startTime, endTime, pointCode, warningLevel, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
