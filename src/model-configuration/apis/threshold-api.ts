/* eslint-disable */
/**
 * 模型配置服务
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
import { AddFloodingThresholdInput } from '../models'
// @ts-ignore
import { GetFloodingThresholdOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UpdateFloodingThresholdInput } from '../models'
/**
 * ThresholdApi - axios parameter creator
 * @export
 */
export const ThresholdApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 添加内涝风险等级与阈值配置信息，包括积水深度和积水历时等，风险等级阈值配置项的ID会返回 Add threshold information for flood risk level based on flood depth and flood duration, config item Id will be returned.
     * @summary 添加内涝风险等级阈值配置信息 Add flood risk level threshold config item
     * @param {AddFloodingThresholdInput} [addFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdAddPost: async (
      addFloodingThresholdInput?: AddFloodingThresholdInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/threshold/add`
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
        addFloodingThresholdInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {Array<UpdateFloodingThresholdInput>} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdBatchUpdatePost: async (
      updateFloodingThresholdInput?: Array<UpdateFloodingThresholdInput>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/threshold/batch-update`
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
        updateFloodingThresholdInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 获取所有的内涝风险等级阈值配置项 Get all the flood risk threshold config items.
     * @summary 获取内涝风险等级阈值配置信息 Get flood risk level threshold config items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdListGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/threshold/list`
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
     * 根据ID删除内涝风险等级阈值配置信息 Delete a flood risk level threshold config item by Id.
     * @summary 删除内涝风险等级阈值配置信息 Delete flood risk level threshold config item
     * @param {string} [id] 风险等级阈值配置项的ID config item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdRemoveDelete: async (
      id?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/threshold/remove`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (id !== undefined) {
        localVarQueryParameter['Id'] = id
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
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdUpdatePost: async (
      updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/threshold/update`
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
        updateFloodingThresholdInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdUpdatePut: async (
      updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/threshold/update`
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
        updateFloodingThresholdInput,
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
 * ThresholdApi - functional programming interface
 * @export
 */
export const ThresholdApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ThresholdApiAxiosParamCreator(configuration)
  return {
    /**
     * 添加内涝风险等级与阈值配置信息，包括积水深度和积水历时等，风险等级阈值配置项的ID会返回 Add threshold information for flood risk level based on flood depth and flood duration, config item Id will be returned.
     * @summary 添加内涝风险等级阈值配置信息 Add flood risk level threshold config item
     * @param {AddFloodingThresholdInput} [addFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationThresholdAddPost(
      addFloodingThresholdInput?: AddFloodingThresholdInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationThresholdAddPost(
          addFloodingThresholdInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {Array<UpdateFloodingThresholdInput>} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationThresholdBatchUpdatePost(
      updateFloodingThresholdInput?: Array<UpdateFloodingThresholdInput>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationThresholdBatchUpdatePost(
          updateFloodingThresholdInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 获取所有的内涝风险等级阈值配置项 Get all the flood risk threshold config items.
     * @summary 获取内涝风险等级阈值配置信息 Get flood risk level threshold config items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationThresholdListGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetFloodingThresholdOutput>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationThresholdListGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据ID删除内涝风险等级阈值配置信息 Delete a flood risk level threshold config item by Id.
     * @summary 删除内涝风险等级阈值配置信息 Delete flood risk level threshold config item
     * @param {string} [id] 风险等级阈值配置项的ID config item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationThresholdRemoveDelete(
      id?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationThresholdRemoveDelete(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationThresholdUpdatePost(
      updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFloodingThresholdOutput>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationThresholdUpdatePost(
          updateFloodingThresholdInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationThresholdUpdatePut(
      updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFloodingThresholdOutput>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationThresholdUpdatePut(
          updateFloodingThresholdInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ThresholdApi - factory interface
 * @export
 */
export const ThresholdApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ThresholdApiFp(configuration)
  return {
    /**
     * 添加内涝风险等级与阈值配置信息，包括积水深度和积水历时等，风险等级阈值配置项的ID会返回 Add threshold information for flood risk level based on flood depth and flood duration, config item Id will be returned.
     * @summary 添加内涝风险等级阈值配置信息 Add flood risk level threshold config item
     * @param {AddFloodingThresholdInput} [addFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdAddPost(
      addFloodingThresholdInput?: AddFloodingThresholdInput,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV1ModelConfigurationThresholdAddPost(addFloodingThresholdInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {Array<UpdateFloodingThresholdInput>} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdBatchUpdatePost(
      updateFloodingThresholdInput?: Array<UpdateFloodingThresholdInput>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelConfigurationThresholdBatchUpdatePost(updateFloodingThresholdInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 获取所有的内涝风险等级阈值配置项 Get all the flood risk threshold config items.
     * @summary 获取内涝风险等级阈值配置信息 Get flood risk level threshold config items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdListGet(
      options?: any,
    ): AxiosPromise<Array<GetFloodingThresholdOutput>> {
      return localVarFp
        .apiV1ModelConfigurationThresholdListGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据ID删除内涝风险等级阈值配置信息 Delete a flood risk level threshold config item by Id.
     * @summary 删除内涝风险等级阈值配置信息 Delete flood risk level threshold config item
     * @param {string} [id] 风险等级阈值配置项的ID config item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdRemoveDelete(id?: string, options?: any): AxiosPromise<object> {
      return localVarFp
        .apiV1ModelConfigurationThresholdRemoveDelete(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdUpdatePost(
      updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
      options?: any,
    ): AxiosPromise<GetFloodingThresholdOutput> {
      return localVarFp
        .apiV1ModelConfigurationThresholdUpdatePost(updateFloodingThresholdInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
     * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
     * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationThresholdUpdatePut(
      updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
      options?: any,
    ): AxiosPromise<GetFloodingThresholdOutput> {
      return localVarFp
        .apiV1ModelConfigurationThresholdUpdatePut(updateFloodingThresholdInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ThresholdApi - object-oriented interface
 * @export
 * @class ThresholdApi
 * @extends {BaseAPI}
 */
export class ThresholdApi extends BaseAPI {
  /**
   * 添加内涝风险等级与阈值配置信息，包括积水深度和积水历时等，风险等级阈值配置项的ID会返回 Add threshold information for flood risk level based on flood depth and flood duration, config item Id will be returned.
   * @summary 添加内涝风险等级阈值配置信息 Add flood risk level threshold config item
   * @param {AddFloodingThresholdInput} [addFloodingThresholdInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThresholdApi
   */
  public apiV1ModelConfigurationThresholdAddPost(
    addFloodingThresholdInput?: AddFloodingThresholdInput,
    options?: AxiosRequestConfig,
  ) {
    return ThresholdApiFp(this.configuration)
      .apiV1ModelConfigurationThresholdAddPost(addFloodingThresholdInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
   * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
   * @param {Array<UpdateFloodingThresholdInput>} [updateFloodingThresholdInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThresholdApi
   */
  public apiV1ModelConfigurationThresholdBatchUpdatePost(
    updateFloodingThresholdInput?: Array<UpdateFloodingThresholdInput>,
    options?: AxiosRequestConfig,
  ) {
    return ThresholdApiFp(this.configuration)
      .apiV1ModelConfigurationThresholdBatchUpdatePost(updateFloodingThresholdInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 获取所有的内涝风险等级阈值配置项 Get all the flood risk threshold config items.
   * @summary 获取内涝风险等级阈值配置信息 Get flood risk level threshold config items
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThresholdApi
   */
  public apiV1ModelConfigurationThresholdListGet(options?: AxiosRequestConfig) {
    return ThresholdApiFp(this.configuration)
      .apiV1ModelConfigurationThresholdListGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据ID删除内涝风险等级阈值配置信息 Delete a flood risk level threshold config item by Id.
   * @summary 删除内涝风险等级阈值配置信息 Delete flood risk level threshold config item
   * @param {string} [id] 风险等级阈值配置项的ID config item id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThresholdApi
   */
  public apiV1ModelConfigurationThresholdRemoveDelete(id?: string, options?: AxiosRequestConfig) {
    return ThresholdApiFp(this.configuration)
      .apiV1ModelConfigurationThresholdRemoveDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
   * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
   * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThresholdApi
   */
  public apiV1ModelConfigurationThresholdUpdatePost(
    updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
    options?: AxiosRequestConfig,
  ) {
    return ThresholdApiFp(this.configuration)
      .apiV1ModelConfigurationThresholdUpdatePost(updateFloodingThresholdInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据ID更新对应的内涝风险等级与阈值配置信息 Update flood risk level and threshold config item by id.
   * @summary 更新内涝风险等级阈值配置信息 Update flood risk level threshold config item
   * @param {UpdateFloodingThresholdInput} [updateFloodingThresholdInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ThresholdApi
   */
  public apiV1ModelConfigurationThresholdUpdatePut(
    updateFloodingThresholdInput?: UpdateFloodingThresholdInput,
    options?: AxiosRequestConfig,
  ) {
    return ThresholdApiFp(this.configuration)
      .apiV1ModelConfigurationThresholdUpdatePut(updateFloodingThresholdInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
