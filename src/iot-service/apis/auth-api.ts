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
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 此接口用于动态创建租户，并自动在IoT服务中创建租户和租户管理员账户 This interface is used to dynamically create tenants and automatically generate tenant and tenant administrator accounts in IOT
     * @summary 启用租户的IoT功能 Enable tenant IOT function
     * @param {string} userManagerTenantId 用户管理系统租户ID tenant id in user management system
     * @param {string} tripartiteTenantName 第三方系统租户名称 tripartite tenant name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotTurnOnIotFuncGet: async (
      userManagerTenantId: string,
      tripartiteTenantName: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'userManagerTenantId' is not null or undefined
      assertParamExists('apiV1IotTurnOnIotFuncGet', 'userManagerTenantId', userManagerTenantId)
      // verify required parameter 'tripartiteTenantName' is not null or undefined
      assertParamExists('apiV1IotTurnOnIotFuncGet', 'tripartiteTenantName', tripartiteTenantName)
      const localVarPath = `/api/v1/iot/turn-on-iot-func`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (userManagerTenantId !== undefined) {
        localVarQueryParameter['UserManagerTenantId'] = userManagerTenantId
      }

      if (tripartiteTenantName !== undefined) {
        localVarQueryParameter['TripartiteTenantName'] = tripartiteTenantName
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
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
  return {
    /**
     * 此接口用于动态创建租户，并自动在IoT服务中创建租户和租户管理员账户 This interface is used to dynamically create tenants and automatically generate tenant and tenant administrator accounts in IOT
     * @summary 启用租户的IoT功能 Enable tenant IOT function
     * @param {string} userManagerTenantId 用户管理系统租户ID tenant id in user management system
     * @param {string} tripartiteTenantName 第三方系统租户名称 tripartite tenant name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1IotTurnOnIotFuncGet(
      userManagerTenantId: string,
      tripartiteTenantName: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1IotTurnOnIotFuncGet(
        userManagerTenantId,
        tripartiteTenantName,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AuthApiFp(configuration)
  return {
    /**
     * 此接口用于动态创建租户，并自动在IoT服务中创建租户和租户管理员账户 This interface is used to dynamically create tenants and automatically generate tenant and tenant administrator accounts in IOT
     * @summary 启用租户的IoT功能 Enable tenant IOT function
     * @param {string} userManagerTenantId 用户管理系统租户ID tenant id in user management system
     * @param {string} tripartiteTenantName 第三方系统租户名称 tripartite tenant name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1IotTurnOnIotFuncGet(
      userManagerTenantId: string,
      tripartiteTenantName: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1IotTurnOnIotFuncGet(userManagerTenantId, tripartiteTenantName, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
  /**
   * 此接口用于动态创建租户，并自动在IoT服务中创建租户和租户管理员账户 This interface is used to dynamically create tenants and automatically generate tenant and tenant administrator accounts in IOT
   * @summary 启用租户的IoT功能 Enable tenant IOT function
   * @param {string} userManagerTenantId 用户管理系统租户ID tenant id in user management system
   * @param {string} tripartiteTenantName 第三方系统租户名称 tripartite tenant name
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public apiV1IotTurnOnIotFuncGet(
    userManagerTenantId: string,
    tripartiteTenantName: string,
    options?: AxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .apiV1IotTurnOnIotFuncGet(userManagerTenantId, tripartiteTenantName, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
