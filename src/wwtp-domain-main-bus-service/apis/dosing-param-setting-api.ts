/* eslint-disable */
/**
 * 污水业务中台领域服务
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
import { DosingParamSettingDto } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * DosingParamSettingApi - axios parameter creator
 * @export
 */
export const DosingParamSettingApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加加药参数设置信息 Add dosing parameter setting data
     * @param {string} [tenantId]
     * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingAddDosingParamSettingsPost: async (
      tenantId?: string,
      dosingParamSettingDto?: Array<DosingParamSettingDto>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingParamSetting/AddDosingParamSettings`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
      }

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        dosingParamSettingDto,
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
     * @summary 根据ID删除加药参数设置信息 Delete dosing parameter setting data by ids
     * @param {string} [tenantId]
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingDeleteDosingParamSettingsPost: async (
      tenantId?: string,
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingParamSetting/DeleteDosingParamSettings`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
      }

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
     * @summary 获取所有加药参数设置信息 Get all dosing parameter setting data
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingGetAllDosingParamSettingsGet: async (
      tenantId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingParamSetting/GetAllDosingParamSettings`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
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
     * @summary 通过代码和工艺线查询加药参数设置信息 Get dosing parameter setting data by code and product line
     * @param {number} [codeEnum] 代码 code
     * @param {string} [productionLine] 工艺线代码 product line code
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingGetDosingParamSettingsByCodeGet: async (
      codeEnum?: number,
      productionLine?: string,
      tenantId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingParamSetting/GetDosingParamSettingsByCode`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (codeEnum !== undefined) {
        localVarQueryParameter['codeEnum'] = codeEnum
      }

      if (productionLine !== undefined) {
        localVarQueryParameter['productionLine'] = productionLine
      }

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
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
     * 通过加药类型、工艺线查询加药参数设置信息 Get dosing parameter setting data by dosage type and product line code
     * @summary 通过条件查询加药参数设置信息 Get dosing parameter setting data by condition
     * @param {number} [category] 加药类型 dosage type
     * @param {string} [productionLine] 生产线代码 product line code
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingGetDosingParamSettingsByConditionGet: async (
      category?: number,
      productionLine?: string,
      tenantId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingParamSetting/GetDosingParamSettingsByCondition`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (category !== undefined) {
        localVarQueryParameter['category'] = category
      }

      if (productionLine !== undefined) {
        localVarQueryParameter['productionLine'] = productionLine
      }

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
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
     * @summary 更新加药参数设置信息 Update dosing parameter setting data
     * @param {string} [tenantId]
     * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingUpdateDosingParamSettingsPost: async (
      tenantId?: string,
      dosingParamSettingDto?: Array<DosingParamSettingDto>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/DosingParamSetting/UpdateDosingParamSettings`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantId != null) {
        localVarHeaderParameter['tenantId'] = String(tenantId)
      }

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        dosingParamSettingDto,
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
 * DosingParamSettingApi - functional programming interface
 * @export
 */
export const DosingParamSettingApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DosingParamSettingApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加加药参数设置信息 Add dosing parameter setting data
     * @param {string} [tenantId]
     * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingParamSettingAddDosingParamSettingsPost(
      tenantId?: string,
      dosingParamSettingDto?: Array<DosingParamSettingDto>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingParamSettingAddDosingParamSettingsPost(
          tenantId,
          dosingParamSettingDto,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据ID删除加药参数设置信息 Delete dosing parameter setting data by ids
     * @param {string} [tenantId]
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingParamSettingDeleteDosingParamSettingsPost(
      tenantId?: string,
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingParamSettingDeleteDosingParamSettingsPost(
          tenantId,
          requestBody,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有加药参数设置信息 Get all dosing parameter setting data
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingParamSettingGetAllDosingParamSettingsGet(
      tenantId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DosingParamSettingDto>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingParamSettingGetAllDosingParamSettingsGet(
          tenantId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过代码和工艺线查询加药参数设置信息 Get dosing parameter setting data by code and product line
     * @param {number} [codeEnum] 代码 code
     * @param {string} [productionLine] 工艺线代码 product line code
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingParamSettingGetDosingParamSettingsByCodeGet(
      codeEnum?: number,
      productionLine?: string,
      tenantId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DosingParamSettingDto>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingParamSettingGetDosingParamSettingsByCodeGet(
          codeEnum,
          productionLine,
          tenantId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 通过加药类型、工艺线查询加药参数设置信息 Get dosing parameter setting data by dosage type and product line code
     * @summary 通过条件查询加药参数设置信息 Get dosing parameter setting data by condition
     * @param {number} [category] 加药类型 dosage type
     * @param {string} [productionLine] 生产线代码 product line code
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingParamSettingGetDosingParamSettingsByConditionGet(
      category?: number,
      productionLine?: string,
      tenantId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DosingParamSettingDto>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingParamSettingGetDosingParamSettingsByConditionGet(
          category,
          productionLine,
          tenantId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新加药参数设置信息 Update dosing parameter setting data
     * @param {string} [tenantId]
     * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiDosingParamSettingUpdateDosingParamSettingsPost(
      tenantId?: string,
      dosingParamSettingDto?: Array<DosingParamSettingDto>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiDosingParamSettingUpdateDosingParamSettingsPost(
          tenantId,
          dosingParamSettingDto,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * DosingParamSettingApi - factory interface
 * @export
 */
export const DosingParamSettingApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = DosingParamSettingApiFp(configuration)
  return {
    /**
     *
     * @summary 添加加药参数设置信息 Add dosing parameter setting data
     * @param {string} [tenantId]
     * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingAddDosingParamSettingsPost(
      tenantId?: string,
      dosingParamSettingDto?: Array<DosingParamSettingDto>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingParamSettingAddDosingParamSettingsPost(tenantId, dosingParamSettingDto, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据ID删除加药参数设置信息 Delete dosing parameter setting data by ids
     * @param {string} [tenantId]
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingDeleteDosingParamSettingsPost(
      tenantId?: string,
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingParamSettingDeleteDosingParamSettingsPost(tenantId, requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有加药参数设置信息 Get all dosing parameter setting data
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingGetAllDosingParamSettingsGet(
      tenantId?: string,
      options?: any,
    ): AxiosPromise<Array<DosingParamSettingDto>> {
      return localVarFp
        .apiDosingParamSettingGetAllDosingParamSettingsGet(tenantId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过代码和工艺线查询加药参数设置信息 Get dosing parameter setting data by code and product line
     * @param {number} [codeEnum] 代码 code
     * @param {string} [productionLine] 工艺线代码 product line code
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingGetDosingParamSettingsByCodeGet(
      codeEnum?: number,
      productionLine?: string,
      tenantId?: string,
      options?: any,
    ): AxiosPromise<Array<DosingParamSettingDto>> {
      return localVarFp
        .apiDosingParamSettingGetDosingParamSettingsByCodeGet(
          codeEnum,
          productionLine,
          tenantId,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * 通过加药类型、工艺线查询加药参数设置信息 Get dosing parameter setting data by dosage type and product line code
     * @summary 通过条件查询加药参数设置信息 Get dosing parameter setting data by condition
     * @param {number} [category] 加药类型 dosage type
     * @param {string} [productionLine] 生产线代码 product line code
     * @param {string} [tenantId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingGetDosingParamSettingsByConditionGet(
      category?: number,
      productionLine?: string,
      tenantId?: string,
      options?: any,
    ): AxiosPromise<Array<DosingParamSettingDto>> {
      return localVarFp
        .apiDosingParamSettingGetDosingParamSettingsByConditionGet(
          category,
          productionLine,
          tenantId,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新加药参数设置信息 Update dosing parameter setting data
     * @param {string} [tenantId]
     * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiDosingParamSettingUpdateDosingParamSettingsPost(
      tenantId?: string,
      dosingParamSettingDto?: Array<DosingParamSettingDto>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiDosingParamSettingUpdateDosingParamSettingsPost(
          tenantId,
          dosingParamSettingDto,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * DosingParamSettingApi - object-oriented interface
 * @export
 * @class DosingParamSettingApi
 * @extends {BaseAPI}
 */
export class DosingParamSettingApi extends BaseAPI {
  /**
   *
   * @summary 添加加药参数设置信息 Add dosing parameter setting data
   * @param {string} [tenantId]
   * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingParamSettingApi
   */
  public apiDosingParamSettingAddDosingParamSettingsPost(
    tenantId?: string,
    dosingParamSettingDto?: Array<DosingParamSettingDto>,
    options?: AxiosRequestConfig,
  ) {
    return DosingParamSettingApiFp(this.configuration)
      .apiDosingParamSettingAddDosingParamSettingsPost(tenantId, dosingParamSettingDto, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据ID删除加药参数设置信息 Delete dosing parameter setting data by ids
   * @param {string} [tenantId]
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingParamSettingApi
   */
  public apiDosingParamSettingDeleteDosingParamSettingsPost(
    tenantId?: string,
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return DosingParamSettingApiFp(this.configuration)
      .apiDosingParamSettingDeleteDosingParamSettingsPost(tenantId, requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有加药参数设置信息 Get all dosing parameter setting data
   * @param {string} [tenantId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingParamSettingApi
   */
  public apiDosingParamSettingGetAllDosingParamSettingsGet(
    tenantId?: string,
    options?: AxiosRequestConfig,
  ) {
    return DosingParamSettingApiFp(this.configuration)
      .apiDosingParamSettingGetAllDosingParamSettingsGet(tenantId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过代码和工艺线查询加药参数设置信息 Get dosing parameter setting data by code and product line
   * @param {number} [codeEnum] 代码 code
   * @param {string} [productionLine] 工艺线代码 product line code
   * @param {string} [tenantId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingParamSettingApi
   */
  public apiDosingParamSettingGetDosingParamSettingsByCodeGet(
    codeEnum?: number,
    productionLine?: string,
    tenantId?: string,
    options?: AxiosRequestConfig,
  ) {
    return DosingParamSettingApiFp(this.configuration)
      .apiDosingParamSettingGetDosingParamSettingsByCodeGet(
        codeEnum,
        productionLine,
        tenantId,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 通过加药类型、工艺线查询加药参数设置信息 Get dosing parameter setting data by dosage type and product line code
   * @summary 通过条件查询加药参数设置信息 Get dosing parameter setting data by condition
   * @param {number} [category] 加药类型 dosage type
   * @param {string} [productionLine] 生产线代码 product line code
   * @param {string} [tenantId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingParamSettingApi
   */
  public apiDosingParamSettingGetDosingParamSettingsByConditionGet(
    category?: number,
    productionLine?: string,
    tenantId?: string,
    options?: AxiosRequestConfig,
  ) {
    return DosingParamSettingApiFp(this.configuration)
      .apiDosingParamSettingGetDosingParamSettingsByConditionGet(
        category,
        productionLine,
        tenantId,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新加药参数设置信息 Update dosing parameter setting data
   * @param {string} [tenantId]
   * @param {Array<DosingParamSettingDto>} [dosingParamSettingDto]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DosingParamSettingApi
   */
  public apiDosingParamSettingUpdateDosingParamSettingsPost(
    tenantId?: string,
    dosingParamSettingDto?: Array<DosingParamSettingDto>,
    options?: AxiosRequestConfig,
  ) {
    return DosingParamSettingApiFp(this.configuration)
      .apiDosingParamSettingUpdateDosingParamSettingsPost(tenantId, dosingParamSettingDto, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
