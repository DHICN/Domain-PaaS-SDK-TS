/* eslint-disable */
/**
 * wd-domain-service
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
import { AccuracyConfigDto } from '../models'
// @ts-ignore
import { AddAccuracyConfigInput } from '../models'
// @ts-ignore
import { DeleteAccuracyConfigInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * AccuracyConfigApi - axios parameter creator
 * @export
 */
export const AccuracyConfigApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 批量新增精度配置信息
     * @param {Array<AddAccuracyConfigInput>} [addAccuracyConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyAddPost: async (
      addAccuracyConfigInput?: Array<AddAccuracyConfigInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/accuracy/add`
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
        addAccuracyConfigInput,
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
     * @summary 获取所有精度配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyAllGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/accuracy/all`
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
     * @summary 删除精度配置信息
     * @param {DeleteAccuracyConfigInput} [deleteAccuracyConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyDeletePost: async (
      deleteAccuracyConfigInput?: DeleteAccuracyConfigInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/accuracy/delete`
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
        deleteAccuracyConfigInput,
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
     * @summary 批量更新精度配置信息
     * @param {Array<AccuracyConfigDto>} [accuracyConfigDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyUpdatePost: async (
      accuracyConfigDto?: Array<AccuracyConfigDto>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/config/accuracy/update`
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
        accuracyConfigDto,
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
 * AccuracyConfigApi - functional programming interface
 * @export
 */
export const AccuracyConfigApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AccuracyConfigApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 批量新增精度配置信息
     * @param {Array<AddAccuracyConfigInput>} [addAccuracyConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAccuracyAddPost(
      addAccuracyConfigInput?: Array<AddAccuracyConfigInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdConfigAccuracyAddPost(
        addAccuracyConfigInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有精度配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAccuracyAllGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AccuracyConfigDto>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdConfigAccuracyAllGet(
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除精度配置信息
     * @param {DeleteAccuracyConfigInput} [deleteAccuracyConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAccuracyDeletePost(
      deleteAccuracyConfigInput?: DeleteAccuracyConfigInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdConfigAccuracyDeletePost(
          deleteAccuracyConfigInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 批量更新精度配置信息
     * @param {Array<AccuracyConfigDto>} [accuracyConfigDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdConfigAccuracyUpdatePost(
      accuracyConfigDto?: Array<AccuracyConfigDto>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdConfigAccuracyUpdatePost(
          accuracyConfigDto,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * AccuracyConfigApi - factory interface
 * @export
 */
export const AccuracyConfigApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AccuracyConfigApiFp(configuration)
  return {
    /**
     *
     * @summary 批量新增精度配置信息
     * @param {Array<AddAccuracyConfigInput>} [addAccuracyConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyAddPost(
      addAccuracyConfigInput?: Array<AddAccuracyConfigInput>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1DomainWdConfigAccuracyAddPost(addAccuracyConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有精度配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyAllGet(options?: any): AxiosPromise<Array<AccuracyConfigDto>> {
      return localVarFp
        .apiV1DomainWdConfigAccuracyAllGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除精度配置信息
     * @param {DeleteAccuracyConfigInput} [deleteAccuracyConfigInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyDeletePost(
      deleteAccuracyConfigInput?: DeleteAccuracyConfigInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1DomainWdConfigAccuracyDeletePost(deleteAccuracyConfigInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 批量更新精度配置信息
     * @param {Array<AccuracyConfigDto>} [accuracyConfigDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdConfigAccuracyUpdatePost(
      accuracyConfigDto?: Array<AccuracyConfigDto>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1DomainWdConfigAccuracyUpdatePost(accuracyConfigDto, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AccuracyConfigApi - object-oriented interface
 * @export
 * @class AccuracyConfigApi
 * @extends {BaseAPI}
 */
export class AccuracyConfigApi extends BaseAPI {
  /**
   *
   * @summary 批量新增精度配置信息
   * @param {Array<AddAccuracyConfigInput>} [addAccuracyConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccuracyConfigApi
   */
  public apiV1DomainWdConfigAccuracyAddPost(
    addAccuracyConfigInput?: Array<AddAccuracyConfigInput>,
    options?: AxiosRequestConfig,
  ) {
    return AccuracyConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAccuracyAddPost(addAccuracyConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有精度配置
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccuracyConfigApi
   */
  public apiV1DomainWdConfigAccuracyAllGet(options?: AxiosRequestConfig) {
    return AccuracyConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAccuracyAllGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除精度配置信息
   * @param {DeleteAccuracyConfigInput} [deleteAccuracyConfigInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccuracyConfigApi
   */
  public apiV1DomainWdConfigAccuracyDeletePost(
    deleteAccuracyConfigInput?: DeleteAccuracyConfigInput,
    options?: AxiosRequestConfig,
  ) {
    return AccuracyConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAccuracyDeletePost(deleteAccuracyConfigInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 批量更新精度配置信息
   * @param {Array<AccuracyConfigDto>} [accuracyConfigDto]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccuracyConfigApi
   */
  public apiV1DomainWdConfigAccuracyUpdatePost(
    accuracyConfigDto?: Array<AccuracyConfigDto>,
    options?: AxiosRequestConfig,
  ) {
    return AccuracyConfigApiFp(this.configuration)
      .apiV1DomainWdConfigAccuracyUpdatePost(accuracyConfigDto, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
