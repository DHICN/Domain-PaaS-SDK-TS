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
/**
 * NotifyApi - axios parameter creator
 * @export
 */
export const NotifyApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary /api/v1/iot/notify
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotNotifyPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/iot/notify`
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
  }
}

/**
 * NotifyApi - functional programming interface
 * @export
 */
export const NotifyApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = NotifyApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary /api/v1/iot/notify
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1IotNotifyPost(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1IotNotifyPost(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * NotifyApi - factory interface
 * @export
 */
export const NotifyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = NotifyApiFp(configuration)
  return {
    /**
     *
     * @summary /api/v1/iot/notify
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotNotifyPost(options?: any): AxiosPromise<object> {
      return localVarFp.apiV1IotNotifyPost(options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * NotifyApi - object-oriented interface
 * @export
 * @class NotifyApi
 * @extends {BaseAPI}
 */
export class NotifyApi extends BaseAPI {
  /**
   *
   * @summary /api/v1/iot/notify
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotifyApi
   */
  public apiV1IotNotifyPost(options?: AxiosRequestConfig) {
    return NotifyApiFp(this.configuration)
      .apiV1IotNotifyPost(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
