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
import { OrganizationWithUserStatusInfo } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * UserStatusApi - axios parameter creator
 * @export
 */
export const UserStatusApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary /api/app/usersMnanger/status/get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerStatusGetAllGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/status/get-all`
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
 * UserStatusApi - functional programming interface
 * @export
 */
export const UserStatusApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserStatusApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary /api/app/usersMnanger/status/get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerStatusGetAllGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<OrganizationWithUserStatusInfo>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppUsersMnangerStatusGetAllGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * UserStatusApi - factory interface
 * @export
 */
export const UserStatusApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = UserStatusApiFp(configuration)
  return {
    /**
     *
     * @summary /api/app/usersMnanger/status/get-all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerStatusGetAllGet(
      options?: any,
    ): AxiosPromise<Array<OrganizationWithUserStatusInfo>> {
      return localVarFp
        .apiAppUsersMnangerStatusGetAllGet(options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * UserStatusApi - object-oriented interface
 * @export
 * @class UserStatusApi
 * @extends {BaseAPI}
 */
export class UserStatusApi extends BaseAPI {
  /**
   *
   * @summary /api/app/usersMnanger/status/get-all
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserStatusApi
   */
  public apiAppUsersMnangerStatusGetAllGet(options?: AxiosRequestConfig) {
    return UserStatusApiFp(this.configuration)
      .apiAppUsersMnangerStatusGetAllGet(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
