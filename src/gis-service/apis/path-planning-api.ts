/* eslint-disable */
/**
 * GIS服务
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
import { QueryShortestPathArgs } from '../models'
/**
 * PathPlanningApi - axios parameter creator
 * @export
 */
export const PathPlanningApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取通路的最短路径上的节点
     * @param {QueryShortestPathArgs} [queryShortestPathArgs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGisV1PathPlanningShortestPathNodesPost: async (
      queryShortestPathArgs?: QueryShortestPathArgs,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/gis/v1/path-planning/shortest-path-nodes`
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
        queryShortestPathArgs,
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
     * @summary 获取通路的最短路径
     * @param {QueryShortestPathArgs} [queryShortestPathArgs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGisV1PathPlanningShortestPathPost: async (
      queryShortestPathArgs?: QueryShortestPathArgs,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/gis/v1/path-planning/shortest-path`
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
        queryShortestPathArgs,
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
 * PathPlanningApi - functional programming interface
 * @export
 */
export const PathPlanningApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = PathPlanningApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取通路的最短路径上的节点
     * @param {QueryShortestPathArgs} [queryShortestPathArgs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGisV1PathPlanningShortestPathNodesPost(
      queryShortestPathArgs?: QueryShortestPathArgs,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGisV1PathPlanningShortestPathNodesPost(
          queryShortestPathArgs,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取通路的最短路径
     * @param {QueryShortestPathArgs} [queryShortestPathArgs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiGisV1PathPlanningShortestPathPost(
      queryShortestPathArgs?: QueryShortestPathArgs,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiGisV1PathPlanningShortestPathPost(
          queryShortestPathArgs,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * PathPlanningApi - factory interface
 * @export
 */
export const PathPlanningApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = PathPlanningApiFp(configuration)
  return {
    /**
     *
     * @summary 获取通路的最短路径上的节点
     * @param {QueryShortestPathArgs} [queryShortestPathArgs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGisV1PathPlanningShortestPathNodesPost(
      queryShortestPathArgs?: QueryShortestPathArgs,
      options?: any,
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .apiGisV1PathPlanningShortestPathNodesPost(queryShortestPathArgs, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取通路的最短路径
     * @param {QueryShortestPathArgs} [queryShortestPathArgs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiGisV1PathPlanningShortestPathPost(
      queryShortestPathArgs?: QueryShortestPathArgs,
      options?: any,
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .apiGisV1PathPlanningShortestPathPost(queryShortestPathArgs, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * PathPlanningApi - object-oriented interface
 * @export
 * @class PathPlanningApi
 * @extends {BaseAPI}
 */
export class PathPlanningApi extends BaseAPI {
  /**
   *
   * @summary 获取通路的最短路径上的节点
   * @param {QueryShortestPathArgs} [queryShortestPathArgs]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PathPlanningApi
   */
  public apiGisV1PathPlanningShortestPathNodesPost(
    queryShortestPathArgs?: QueryShortestPathArgs,
    options?: AxiosRequestConfig,
  ) {
    return PathPlanningApiFp(this.configuration)
      .apiGisV1PathPlanningShortestPathNodesPost(queryShortestPathArgs, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取通路的最短路径
   * @param {QueryShortestPathArgs} [queryShortestPathArgs]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PathPlanningApi
   */
  public apiGisV1PathPlanningShortestPathPost(
    queryShortestPathArgs?: QueryShortestPathArgs,
    options?: AxiosRequestConfig,
  ) {
    return PathPlanningApiFp(this.configuration)
      .apiGisV1PathPlanningShortestPathPost(queryShortestPathArgs, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
