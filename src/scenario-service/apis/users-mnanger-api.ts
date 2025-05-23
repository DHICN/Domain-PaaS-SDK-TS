/* eslint-disable */
/**
 * identity-service
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
import { AddSuperUserInput } from '../models'
// @ts-ignore
import { AddUserInput } from '../models'
// @ts-ignore
import { GetUserPersOutput } from '../models'
// @ts-ignore
import { QuerySuperUsersOutputPage } from '../models'
// @ts-ignore
import { QueryUsersInput } from '../models'
// @ts-ignore
import { QueryUsersOutputPage } from '../models'
// @ts-ignore
import { QueryUsersWithOrganziationOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { ResetPasswordInput } from '../models'
// @ts-ignore
import { UpdateSuperUserInput } from '../models'
// @ts-ignore
import { UpdateUserInput } from '../models'
// @ts-ignore
import { UserOperInput } from '../models'
/**
 * UsersMnangerApi - axios parameter creator
 * @export
 */
export const UsersMnangerApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 查询超级用户 Query super user
     * @param {QueryUsersInput} [queryUsersInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerQuerySuperUsersPost: async (
      queryUsersInput?: QueryUsersInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/querySuperUsers`
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
        queryUsersInput,
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
     * @summary 查询用户 Query user
     * @param {QueryUsersInput} [queryUsersInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerQueryUsersPost: async (
      queryUsersInput?: QueryUsersInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/queryUsers`
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
        queryUsersInput,
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
     * @summary 重置密码 Reset password
     * @param {ResetPasswordInput} [resetPasswordInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerResetPasswordPost: async (
      resetPasswordInput?: ResetPasswordInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/resetPassword`
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
        resetPasswordInput,
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
     * @summary 添加超级用户 Add super user
     * @param {AddSuperUserInput} [addSuperUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerSuperUserPost: async (
      addSuperUserInput?: AddSuperUserInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/superUser`
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
        addSuperUserInput,
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
     * @summary 更新超级用户 Update super user
     * @param {UpdateSuperUserInput} [updateSuperUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerSuperUserPut: async (
      updateSuperUserInput?: UpdateSuperUserInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/superUser`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
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
        updateSuperUserInput,
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
     * @summary 启用/停用用户 Enable / Disable users
     * @param {UserOperInput} [userOperInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserOperPost: async (
      userOperInput?: UserOperInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/userOper`
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
        userOperInput,
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
     * @summary 通过Token获取登录用户-权限信息 Obtain login user permission information through token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserPersGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/userPers`
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
     * @summary 添加用户 Add user
     * @param {AddUserInput} [addUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserPost: async (
      addUserInput?: AddUserInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/user`
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
        addUserInput,
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
     * @summary 更新用户 Update user
     * @param {UpdateUserInput} [updateUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserPut: async (
      updateUserInput?: UpdateUserInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/usersMnanger/user`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
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
        updateUserInput,
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
     * @summary 通过用户id获取用户信息 get user information by userid
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserUserIdGet: async (
      userId: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      assertParamExists('apiAppUsersMnangerUserUserIdGet', 'userId', userId)
      const localVarPath = `/api/app/usersMnanger/user/{userId}`.replace(
        `{${'userId'}}`,
        encodeURIComponent(String(userId)),
      )
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
     * @summary 删除用户 Delete user
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUsersDelete: async (
      ids: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'ids' is not null or undefined
      assertParamExists('apiAppUsersMnangerUsersDelete', 'ids', ids)
      const localVarPath = `/api/app/usersMnanger/users`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (ids !== undefined) {
        localVarQueryParameter['Ids'] = ids
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
 * UsersMnangerApi - functional programming interface
 * @export
 */
export const UsersMnangerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UsersMnangerApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 查询超级用户 Query super user
     * @param {QueryUsersInput} [queryUsersInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerQuerySuperUsersPost(
      queryUsersInput?: QueryUsersInput,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuerySuperUsersOutputPage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppUsersMnangerQuerySuperUsersPost(
          queryUsersInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 查询用户 Query user
     * @param {QueryUsersInput} [queryUsersInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerQueryUsersPost(
      queryUsersInput?: QueryUsersInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryUsersOutputPage>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerQueryUsersPost(
        queryUsersInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 重置密码 Reset password
     * @param {ResetPasswordInput} [resetPasswordInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerResetPasswordPost(
      resetPasswordInput?: ResetPasswordInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerResetPasswordPost(
        resetPasswordInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 添加超级用户 Add super user
     * @param {AddSuperUserInput} [addSuperUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerSuperUserPost(
      addSuperUserInput?: AddSuperUserInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerSuperUserPost(
        addSuperUserInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新超级用户 Update super user
     * @param {UpdateSuperUserInput} [updateSuperUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerSuperUserPut(
      updateSuperUserInput?: UpdateSuperUserInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerSuperUserPut(
        updateSuperUserInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 启用/停用用户 Enable / Disable users
     * @param {UserOperInput} [userOperInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerUserOperPost(
      userOperInput?: UserOperInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerUserOperPost(
        userOperInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过Token获取登录用户-权限信息 Obtain login user permission information through token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerUserPersGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserPersOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppUsersMnangerUserPersGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 添加用户 Add user
     * @param {AddUserInput} [addUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerUserPost(
      addUserInput?: AddUserInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerUserPost(
        addUserInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新用户 Update user
     * @param {UpdateUserInput} [updateUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerUserPut(
      updateUserInput?: UpdateUserInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerUserPut(
        updateUserInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过用户id获取用户信息 get user information by userid
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerUserUserIdGet(
      userId: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryUsersWithOrganziationOutput>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerUserUserIdGet(
        userId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除用户 Delete user
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppUsersMnangerUsersDelete(
      ids: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppUsersMnangerUsersDelete(
        ids,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * UsersMnangerApi - factory interface
 * @export
 */
export const UsersMnangerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = UsersMnangerApiFp(configuration)
  return {
    /**
     *
     * @summary 查询超级用户 Query super user
     * @param {QueryUsersInput} [queryUsersInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerQuerySuperUsersPost(
      queryUsersInput?: QueryUsersInput,
      options?: any,
    ): AxiosPromise<QuerySuperUsersOutputPage> {
      return localVarFp
        .apiAppUsersMnangerQuerySuperUsersPost(queryUsersInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 查询用户 Query user
     * @param {QueryUsersInput} [queryUsersInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerQueryUsersPost(
      queryUsersInput?: QueryUsersInput,
      options?: any,
    ): AxiosPromise<QueryUsersOutputPage> {
      return localVarFp
        .apiAppUsersMnangerQueryUsersPost(queryUsersInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 重置密码 Reset password
     * @param {ResetPasswordInput} [resetPasswordInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerResetPasswordPost(
      resetPasswordInput?: ResetPasswordInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppUsersMnangerResetPasswordPost(resetPasswordInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 添加超级用户 Add super user
     * @param {AddSuperUserInput} [addSuperUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerSuperUserPost(
      addSuperUserInput?: AddSuperUserInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppUsersMnangerSuperUserPost(addSuperUserInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新超级用户 Update super user
     * @param {UpdateSuperUserInput} [updateSuperUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerSuperUserPut(
      updateSuperUserInput?: UpdateSuperUserInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppUsersMnangerSuperUserPut(updateSuperUserInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 启用/停用用户 Enable / Disable users
     * @param {UserOperInput} [userOperInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserOperPost(
      userOperInput?: UserOperInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppUsersMnangerUserOperPost(userOperInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过Token获取登录用户-权限信息 Obtain login user permission information through token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserPersGet(options?: any): AxiosPromise<GetUserPersOutput> {
      return localVarFp
        .apiAppUsersMnangerUserPersGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 添加用户 Add user
     * @param {AddUserInput} [addUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserPost(addUserInput?: AddUserInput, options?: any): AxiosPromise<object> {
      return localVarFp
        .apiAppUsersMnangerUserPost(addUserInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新用户 Update user
     * @param {UpdateUserInput} [updateUserInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserPut(
      updateUserInput?: UpdateUserInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppUsersMnangerUserPut(updateUserInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过用户id获取用户信息 get user information by userid
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUserUserIdGet(
      userId: string,
      options?: any,
    ): AxiosPromise<QueryUsersWithOrganziationOutput> {
      return localVarFp
        .apiAppUsersMnangerUserUserIdGet(userId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除用户 Delete user
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppUsersMnangerUsersDelete(ids: Array<string>, options?: any): AxiosPromise<object> {
      return localVarFp
        .apiAppUsersMnangerUsersDelete(ids, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * UsersMnangerApi - object-oriented interface
 * @export
 * @class UsersMnangerApi
 * @extends {BaseAPI}
 */
export class UsersMnangerApi extends BaseAPI {
  /**
   *
   * @summary 查询超级用户 Query super user
   * @param {QueryUsersInput} [queryUsersInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerQuerySuperUsersPost(
    queryUsersInput?: QueryUsersInput,
    options?: AxiosRequestConfig,
  ) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerQuerySuperUsersPost(queryUsersInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 查询用户 Query user
   * @param {QueryUsersInput} [queryUsersInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerQueryUsersPost(
    queryUsersInput?: QueryUsersInput,
    options?: AxiosRequestConfig,
  ) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerQueryUsersPost(queryUsersInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 重置密码 Reset password
   * @param {ResetPasswordInput} [resetPasswordInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerResetPasswordPost(
    resetPasswordInput?: ResetPasswordInput,
    options?: AxiosRequestConfig,
  ) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerResetPasswordPost(resetPasswordInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 添加超级用户 Add super user
   * @param {AddSuperUserInput} [addSuperUserInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerSuperUserPost(
    addSuperUserInput?: AddSuperUserInput,
    options?: AxiosRequestConfig,
  ) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerSuperUserPost(addSuperUserInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新超级用户 Update super user
   * @param {UpdateSuperUserInput} [updateSuperUserInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerSuperUserPut(
    updateSuperUserInput?: UpdateSuperUserInput,
    options?: AxiosRequestConfig,
  ) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerSuperUserPut(updateSuperUserInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 启用/停用用户 Enable / Disable users
   * @param {UserOperInput} [userOperInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerUserOperPost(
    userOperInput?: UserOperInput,
    options?: AxiosRequestConfig,
  ) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerUserOperPost(userOperInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过Token获取登录用户-权限信息 Obtain login user permission information through token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerUserPersGet(options?: AxiosRequestConfig) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerUserPersGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 添加用户 Add user
   * @param {AddUserInput} [addUserInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerUserPost(addUserInput?: AddUserInput, options?: AxiosRequestConfig) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerUserPost(addUserInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新用户 Update user
   * @param {UpdateUserInput} [updateUserInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerUserPut(
    updateUserInput?: UpdateUserInput,
    options?: AxiosRequestConfig,
  ) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerUserPut(updateUserInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过用户id获取用户信息 get user information by userid
   * @param {string} userId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerUserUserIdGet(userId: string, options?: AxiosRequestConfig) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerUserUserIdGet(userId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除用户 Delete user
   * @param {Array<string>} ids ID列表 ids
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersMnangerApi
   */
  public apiAppUsersMnangerUsersDelete(ids: Array<string>, options?: AxiosRequestConfig) {
    return UsersMnangerApiFp(this.configuration)
      .apiAppUsersMnangerUsersDelete(ids, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
