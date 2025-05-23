/* eslint-disable */
/**
 * 供水业务中台领域服务
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
import { AddAlarmConfigInput } from '../models'
// @ts-ignore
import { AddListAlarmConfigInput } from '../models'
// @ts-ignore
import { AlarmConfigDto } from '../models'
// @ts-ignore
import { DeleteAlarmConfigInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * AlarmConfigApi - axios parameter creator
 * @export
 */
export const AlarmConfigApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 新增报警配置
     * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmAddPost: async (
      addAlarmConfigInput?: Array<AddAlarmConfigInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/add`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        addAlarmConfigInput,
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
     * @summary 获取所有报警配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmAllGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/all`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
     * @summary 删除报警配置
     * @param {DeleteAlarmConfigInput} [deleteAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmDeletePost: async (
      deleteAlarmConfigInput?: DeleteAlarmConfigInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/delete`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        deleteAlarmConfigInput,
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
     * @summary 根据类型获取报警配置
     * @param {0 | 1 | 2 | 3 | 4 | 5} [alarmDataType]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmGetByTypeGet: async (
      alarmDataType?: 0 | 1 | 2 | 3 | 4 | 5,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/get-by-type`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (alarmDataType !== undefined) {
        localVarQueryParameter['alarmDataType'] = alarmDataType
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
     * @summary 根据报警类型批量新增报警配置
     * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmListAddPost: async (
      addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/list-add`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        addListAlarmConfigInput,
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
     * @summary 按照类型保存报警配置，会从indicator表中读取指定类型的所有指标进行批量保存
     * @param {Array<object>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmSaveByTypePost: async (
      requestBody?: Array<object>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/save-by-type`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

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
     * @summary 保存设备名称报警配置,根据设备名和指标判断是新增还是更新
     * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmSavePost: async (
      addAlarmConfigInput?: Array<AddAlarmConfigInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/save`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        addAlarmConfigInput,
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
     * @summary 更新报警配置
     * @param {Array<AlarmConfigDto>} [alarmConfigDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmUpdatePost: async (
      alarmConfigDto?: Array<AlarmConfigDto>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/alarm/update`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        alarmConfigDto,
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
     * @summary 根据报警类型批量新增报警配置
     * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2DomainWdConfigAlarmListAddPost: async (
      addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/domain-wd/config/alarm/list-add`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        addListAlarmConfigInput,
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
 * AlarmConfigApi - functional programming interface
 * @export
 */
export const AlarmConfigApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AlarmConfigApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 新增报警配置
     * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmAddPost(
      addAlarmConfigInput?: Array<AddAlarmConfigInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmAddPost(
        addAlarmConfigInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有报警配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmAllGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AlarmConfigDto>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmAllGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除报警配置
     * @param {DeleteAlarmConfigInput} [deleteAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmDeletePost(
      deleteAlarmConfigInput?: DeleteAlarmConfigInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmDeletePost(
        deleteAlarmConfigInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据类型获取报警配置
     * @param {0 | 1 | 2 | 3 | 4 | 5} [alarmDataType]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmGetByTypeGet(
      alarmDataType?: 0 | 1 | 2 | 3 | 4 | 5,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AlarmConfigDto>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmGetByTypeGet(alarmDataType, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据报警类型批量新增报警配置
     * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmListAddPost(
      addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmListAddPost(
        addListAlarmConfigInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 按照类型保存报警配置，会从indicator表中读取指定类型的所有指标进行批量保存
     * @param {Array<object>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmSaveByTypePost(
      requestBody?: Array<object>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmSaveByTypePost(requestBody, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存设备名称报警配置,根据设备名和指标判断是新增还是更新
     * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmSavePost(
      addAlarmConfigInput?: Array<AddAlarmConfigInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmSavePost(
        addAlarmConfigInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新报警配置
     * @param {Array<AlarmConfigDto>} [alarmConfigDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAlarmUpdatePost(
      alarmConfigDto?: Array<AlarmConfigDto>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdConfigAlarmUpdatePost(
        alarmConfigDto,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据报警类型批量新增报警配置
     * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2DomainWdConfigAlarmListAddPost(
      addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2DomainWdConfigAlarmListAddPost(
        addListAlarmConfigInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * AlarmConfigApi - factory interface
 * @export
 */
export const AlarmConfigApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AlarmConfigApiFp(configuration)
  return {
    /**
     *
     * @summary 新增报警配置
     * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmAddPost(
      addAlarmConfigInput?: Array<AddAlarmConfigInput>,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .apiV1DomainWdConfigAlarmAddPost(addAlarmConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有报警配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmAllGet(options?: any): AxiosPromise<Array<AlarmConfigDto>> {
      return localVarFp
        .apiV1DomainWdConfigAlarmAllGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除报警配置
     * @param {DeleteAlarmConfigInput} [deleteAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmDeletePost(
      deleteAlarmConfigInput?: DeleteAlarmConfigInput,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .apiV1DomainWdConfigAlarmDeletePost(deleteAlarmConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据类型获取报警配置
     * @param {0 | 1 | 2 | 3 | 4 | 5} [alarmDataType]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmGetByTypeGet(
      alarmDataType?: 0 | 1 | 2 | 3 | 4 | 5,
      options?: any,
    ): AxiosPromise<Array<AlarmConfigDto>> {
      return localVarFp
        .apiV1DomainWdConfigAlarmGetByTypeGet(alarmDataType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据报警类型批量新增报警配置
     * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmListAddPost(
      addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .apiV1DomainWdConfigAlarmListAddPost(addListAlarmConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 按照类型保存报警配置，会从indicator表中读取指定类型的所有指标进行批量保存
     * @param {Array<object>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmSaveByTypePost(
      requestBody?: Array<object>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1DomainWdConfigAlarmSaveByTypePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存设备名称报警配置,根据设备名和指标判断是新增还是更新
     * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmSavePost(
      addAlarmConfigInput?: Array<AddAlarmConfigInput>,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .apiV1DomainWdConfigAlarmSavePost(addAlarmConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新报警配置
     * @param {Array<AlarmConfigDto>} [alarmConfigDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAlarmUpdatePost(
      alarmConfigDto?: Array<AlarmConfigDto>,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .apiV1DomainWdConfigAlarmUpdatePost(alarmConfigDto, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据报警类型批量新增报警配置
     * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2DomainWdConfigAlarmListAddPost(
      addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .apiV2DomainWdConfigAlarmListAddPost(addListAlarmConfigInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AlarmConfigApi - object-oriented interface
 * @export
 * @class AlarmConfigApi
 * @extends {BaseAPI}
 */
export class AlarmConfigApi extends BaseAPI {
  /**
   *
   * @summary 新增报警配置
   * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmAddPost(
    addAlarmConfigInput?: Array<AddAlarmConfigInput>,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmAddPost(addAlarmConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有报警配置
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmAllGet(options?: AxiosRequestConfig) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmAllGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除报警配置
   * @param {DeleteAlarmConfigInput} [deleteAlarmConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmDeletePost(
    deleteAlarmConfigInput?: DeleteAlarmConfigInput,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmDeletePost(deleteAlarmConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据类型获取报警配置
   * @param {0 | 1 | 2 | 3 | 4 | 5} [alarmDataType]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmGetByTypeGet(
    alarmDataType?: 0 | 1 | 2 | 3 | 4 | 5,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmGetByTypeGet(alarmDataType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据报警类型批量新增报警配置
   * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmListAddPost(
    addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmListAddPost(addListAlarmConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 按照类型保存报警配置，会从indicator表中读取指定类型的所有指标进行批量保存
   * @param {Array<object>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmSaveByTypePost(
    requestBody?: Array<object>,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmSaveByTypePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存设备名称报警配置,根据设备名和指标判断是新增还是更新
   * @param {Array<AddAlarmConfigInput>} [addAlarmConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmSavePost(
    addAlarmConfigInput?: Array<AddAlarmConfigInput>,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmSavePost(addAlarmConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新报警配置
   * @param {Array<AlarmConfigDto>} [alarmConfigDto]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV1DomainWdConfigAlarmUpdatePost(
    alarmConfigDto?: Array<AlarmConfigDto>,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAlarmUpdatePost(alarmConfigDto, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据报警类型批量新增报警配置
   * @param {Array<AddListAlarmConfigInput>} [addListAlarmConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AlarmConfigApi
   */
  public apiV2DomainWdConfigAlarmListAddPost(
    addListAlarmConfigInput?: Array<AddListAlarmConfigInput>,
    options?: AxiosRequestConfig,
  ) {
    return AlarmConfigApiFp(this.configuration)
      .apiV2DomainWdConfigAlarmListAddPost(addListAlarmConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
