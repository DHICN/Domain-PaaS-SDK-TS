/* eslint-disable */
/**
 * model-information-service
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
import { AddPipeInput } from '../models'
// @ts-ignore
import { DeleteInput } from '../models'
// @ts-ignore
import { QueryPipeDto } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UpdatePipeInput } from '../models'
/**
 * WDPipeApi - axios parameter creator
 * @export
 */
export const WDPipeApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 新增管段要素编辑信息 Add pipe information
     * @param {AddPipeInput} [addPipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeAddPost: async (
      addPipeInput?: AddPipeInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/domain-wd/pipe/add`
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
        addPipeInput,
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
     * @summary 获取该方案下所有的管段要素信息 Get all pipes information of a scenario
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeAllGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/domain-wd/pipe/all`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (scenarioId !== undefined) {
        localVarQueryParameter['scenarioId'] = scenarioId
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
     * @summary 删除管段要素编辑信息 Delete pipe information
     * @param {DeleteInput} [deleteInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeDeletePost: async (
      deleteInput?: DeleteInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/domain-wd/pipe/delete`
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
        deleteInput,
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
     * @summary 获取该方案下指定muids的管段要素信息 Get pipes information of a scenario by muids
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {Array<string>} [muids] 模型中管段ID列表 pipe muids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeListGet: async (
      scenarioId?: string,
      muids?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/domain-wd/pipe/list`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (scenarioId !== undefined) {
        localVarQueryParameter['scenarioId'] = scenarioId
      }

      if (muids !== undefined) {
        localVarQueryParameter['muids'] = muids
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
     * @summary 保存管段要素信息，原有管段信息会被删除 Save pipe information, old pipe information will be deleted
     * @param {AddPipeInput} [addPipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeResavePost: async (
      addPipeInput?: AddPipeInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/domain-wd/pipe/resave`
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
        addPipeInput,
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
     * @summary 修改管段要素信息 Update pipe information
     * @param {UpdatePipeInput} [updatePipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeUpdatePost: async (
      updatePipeInput?: UpdatePipeInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/domain-wd/pipe/update`
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
        updatePipeInput,
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
 * WDPipeApi - functional programming interface
 * @export
 */
export const WDPipeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = WDPipeApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 新增管段要素编辑信息 Add pipe information
     * @param {AddPipeInput} [addPipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationDomainWdPipeAddPost(
      addPipeInput?: AddPipeInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationDomainWdPipeAddPost(
          addPipeInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取该方案下所有的管段要素信息 Get all pipes information of a scenario
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationDomainWdPipeAllGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<QueryPipeDto>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationDomainWdPipeAllGet(scenarioId, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除管段要素编辑信息 Delete pipe information
     * @param {DeleteInput} [deleteInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationDomainWdPipeDeletePost(
      deleteInput?: DeleteInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationDomainWdPipeDeletePost(
          deleteInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取该方案下指定muids的管段要素信息 Get pipes information of a scenario by muids
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {Array<string>} [muids] 模型中管段ID列表 pipe muids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationDomainWdPipeListGet(
      scenarioId?: string,
      muids?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<QueryPipeDto>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationDomainWdPipeListGet(
          scenarioId,
          muids,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存管段要素信息，原有管段信息会被删除 Save pipe information, old pipe information will be deleted
     * @param {AddPipeInput} [addPipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationDomainWdPipeResavePost(
      addPipeInput?: AddPipeInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationDomainWdPipeResavePost(
          addPipeInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 修改管段要素信息 Update pipe information
     * @param {UpdatePipeInput} [updatePipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationDomainWdPipeUpdatePost(
      updatePipeInput?: UpdatePipeInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationDomainWdPipeUpdatePost(
          updatePipeInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * WDPipeApi - factory interface
 * @export
 */
export const WDPipeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = WDPipeApiFp(configuration)
  return {
    /**
     *
     * @summary 新增管段要素编辑信息 Add pipe information
     * @param {AddPipeInput} [addPipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeAddPost(
      addPipeInput?: AddPipeInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelInformationDomainWdPipeAddPost(addPipeInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取该方案下所有的管段要素信息 Get all pipes information of a scenario
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeAllGet(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<Array<QueryPipeDto>> {
      return localVarFp
        .apiV1ModelInformationDomainWdPipeAllGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除管段要素编辑信息 Delete pipe information
     * @param {DeleteInput} [deleteInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeDeletePost(
      deleteInput?: DeleteInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelInformationDomainWdPipeDeletePost(deleteInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取该方案下指定muids的管段要素信息 Get pipes information of a scenario by muids
     * @param {string} [scenarioId] 方案ID scenario id
     * @param {Array<string>} [muids] 模型中管段ID列表 pipe muids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeListGet(
      scenarioId?: string,
      muids?: Array<string>,
      options?: any,
    ): AxiosPromise<Array<QueryPipeDto>> {
      return localVarFp
        .apiV1ModelInformationDomainWdPipeListGet(scenarioId, muids, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存管段要素信息，原有管段信息会被删除 Save pipe information, old pipe information will be deleted
     * @param {AddPipeInput} [addPipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeResavePost(
      addPipeInput?: AddPipeInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelInformationDomainWdPipeResavePost(addPipeInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 修改管段要素信息 Update pipe information
     * @param {UpdatePipeInput} [updatePipeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationDomainWdPipeUpdatePost(
      updatePipeInput?: UpdatePipeInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelInformationDomainWdPipeUpdatePost(updatePipeInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * WDPipeApi - object-oriented interface
 * @export
 * @class WDPipeApi
 * @extends {BaseAPI}
 */
export class WDPipeApi extends BaseAPI {
  /**
   *
   * @summary 新增管段要素编辑信息 Add pipe information
   * @param {AddPipeInput} [addPipeInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WDPipeApi
   */
  public apiV1ModelInformationDomainWdPipeAddPost(
    addPipeInput?: AddPipeInput,
    options?: AxiosRequestConfig,
  ) {
    return WDPipeApiFp(this.configuration)
      .apiV1ModelInformationDomainWdPipeAddPost(addPipeInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取该方案下所有的管段要素信息 Get all pipes information of a scenario
   * @param {string} [scenarioId] 方案ID scenario id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WDPipeApi
   */
  public apiV1ModelInformationDomainWdPipeAllGet(
    scenarioId?: string,
    options?: AxiosRequestConfig,
  ) {
    return WDPipeApiFp(this.configuration)
      .apiV1ModelInformationDomainWdPipeAllGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除管段要素编辑信息 Delete pipe information
   * @param {DeleteInput} [deleteInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WDPipeApi
   */
  public apiV1ModelInformationDomainWdPipeDeletePost(
    deleteInput?: DeleteInput,
    options?: AxiosRequestConfig,
  ) {
    return WDPipeApiFp(this.configuration)
      .apiV1ModelInformationDomainWdPipeDeletePost(deleteInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取该方案下指定muids的管段要素信息 Get pipes information of a scenario by muids
   * @param {string} [scenarioId] 方案ID scenario id
   * @param {Array<string>} [muids] 模型中管段ID列表 pipe muids
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WDPipeApi
   */
  public apiV1ModelInformationDomainWdPipeListGet(
    scenarioId?: string,
    muids?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return WDPipeApiFp(this.configuration)
      .apiV1ModelInformationDomainWdPipeListGet(scenarioId, muids, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存管段要素信息，原有管段信息会被删除 Save pipe information, old pipe information will be deleted
   * @param {AddPipeInput} [addPipeInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WDPipeApi
   */
  public apiV1ModelInformationDomainWdPipeResavePost(
    addPipeInput?: AddPipeInput,
    options?: AxiosRequestConfig,
  ) {
    return WDPipeApiFp(this.configuration)
      .apiV1ModelInformationDomainWdPipeResavePost(addPipeInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 修改管段要素信息 Update pipe information
   * @param {UpdatePipeInput} [updatePipeInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WDPipeApi
   */
  public apiV1ModelInformationDomainWdPipeUpdatePost(
    updatePipeInput?: UpdatePipeInput,
    options?: AxiosRequestConfig,
  ) {
    return WDPipeApiFp(this.configuration)
      .apiV1ModelInformationDomainWdPipeUpdatePost(updatePipeInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
