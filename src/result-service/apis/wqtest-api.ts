/* eslint-disable */
/**
 * result-analysis-service
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
 * WQTestApi - axios parameter creator
 * @export
 */
export const WQTestApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 水环境
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultAnalysisTestTestWQGet: async (
      name?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/result-analysis/Test/TestWQ`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (name !== undefined) {
        localVarQueryParameter['name'] = name
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
 * WQTestApi - functional programming interface
 * @export
 */
export const WQTestApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = WQTestApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 水环境
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ResultAnalysisTestTestWQGet(
      name?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ResultAnalysisTestTestWQGet(
        name,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * WQTestApi - factory interface
 * @export
 */
export const WQTestApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = WQTestApiFp(configuration)
  return {
    /**
     *
     * @summary 水环境
     * @param {string} [name]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultAnalysisTestTestWQGet(name?: string, options?: any): AxiosPromise<string> {
      return localVarFp
        .apiV1ResultAnalysisTestTestWQGet(name, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * WQTestApi - object-oriented interface
 * @export
 * @class WQTestApi
 * @extends {BaseAPI}
 */
export class WQTestApi extends BaseAPI {
  /**
   *
   * @summary 水环境
   * @param {string} [name]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WQTestApi
   */
  public apiV1ResultAnalysisTestTestWQGet(name?: string, options?: AxiosRequestConfig) {
    return WQTestApiFp(this.configuration)
      .apiV1ResultAnalysisTestTestWQGet(name, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
