/* eslint-disable */
/**
 * 模型结果服务
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
import { ModelPointDetailInfo } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * ModelPointApi - axios parameter creator
 * @export
 */
export const ModelPointApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 根据属性获取模型点位信息
     * @param {string} templateScenarioId 模板方案ID template scenario id
     * @param {string} modelPointType 模型点位类型 model point type
     * @param {Array<string>} attributes 属性条件 Condition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppModelPointModelPointsByConditionGet: async (
      templateScenarioId: string,
      modelPointType: string,
      attributes: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'templateScenarioId' is not null or undefined
      assertParamExists(
        'apiAppModelPointModelPointsByConditionGet',
        'templateScenarioId',
        templateScenarioId,
      )
      // verify required parameter 'modelPointType' is not null or undefined
      assertParamExists(
        'apiAppModelPointModelPointsByConditionGet',
        'modelPointType',
        modelPointType,
      )
      // verify required parameter 'attributes' is not null or undefined
      assertParamExists('apiAppModelPointModelPointsByConditionGet', 'attributes', attributes)
      const localVarPath = `/api/app/model-point/model-points-by-condition`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (templateScenarioId !== undefined) {
        localVarQueryParameter['TemplateScenarioId'] = templateScenarioId
      }

      if (modelPointType !== undefined) {
        localVarQueryParameter['ModelPointType'] = modelPointType
      }

      if (attributes !== undefined) {
        localVarQueryParameter['Attributes'] = attributes
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
     * @summary 根据模型点位ID获取模型点位信息
     * @param {string} scenarioId
     * @param {Array<string>} [modelIds] 模型点位ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppModelPointModelPointsByModelIdScenarioIdGet: async (
      scenarioId: string,
      modelIds?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'scenarioId' is not null or undefined
      assertParamExists(
        'apiAppModelPointModelPointsByModelIdScenarioIdGet',
        'scenarioId',
        scenarioId,
      )
      const localVarPath = `/api/app/model-point/model-points-by-model-id/{scenarioId}`.replace(
        `{${'scenarioId'}}`,
        encodeURIComponent(String(scenarioId)),
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

      if (modelIds !== undefined) {
        localVarQueryParameter['modelIds'] = modelIds
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
     * @summary 根据点位类型获取模型点位信息
     * @param {string} templateId
     * @param {string} [modelPointType]
     * @param {number} [pageSize]
     * @param {string} [bForceRefreshCache]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppModelPointPageModelPointsByTypeTemplateIdGet: async (
      templateId: string,
      modelPointType?: string,
      pageSize?: number,
      bForceRefreshCache?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'templateId' is not null or undefined
      assertParamExists(
        'apiAppModelPointPageModelPointsByTypeTemplateIdGet',
        'templateId',
        templateId,
      )
      const localVarPath = `/api/app/model-point/page-model-points-by-type/{templateId}`.replace(
        `{${'templateId'}}`,
        encodeURIComponent(String(templateId)),
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

      if (modelPointType !== undefined) {
        localVarQueryParameter['modelPointType'] = modelPointType
      }

      if (pageSize !== undefined) {
        localVarQueryParameter['pageSize'] = pageSize
      }

      if (bForceRefreshCache !== undefined) {
        localVarQueryParameter['bForceRefreshCache'] = bForceRefreshCache
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
 * ModelPointApi - functional programming interface
 * @export
 */
export const ModelPointApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ModelPointApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 根据属性获取模型点位信息
     * @param {string} templateScenarioId 模板方案ID template scenario id
     * @param {string} modelPointType 模型点位类型 model point type
     * @param {Array<string>} attributes 属性条件 Condition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppModelPointModelPointsByConditionGet(
      templateScenarioId: string,
      modelPointType: string,
      attributes: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelPointDetailInfo>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppModelPointModelPointsByConditionGet(
          templateScenarioId,
          modelPointType,
          attributes,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据模型点位ID获取模型点位信息
     * @param {string} scenarioId
     * @param {Array<string>} [modelIds] 模型点位ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppModelPointModelPointsByModelIdScenarioIdGet(
      scenarioId: string,
      modelIds?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelPointDetailInfo>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppModelPointModelPointsByModelIdScenarioIdGet(
          scenarioId,
          modelIds,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据点位类型获取模型点位信息
     * @param {string} templateId
     * @param {string} [modelPointType]
     * @param {number} [pageSize]
     * @param {string} [bForceRefreshCache]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppModelPointPageModelPointsByTypeTemplateIdGet(
      templateId: string,
      modelPointType?: string,
      pageSize?: number,
      bForceRefreshCache?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelPointDetailInfo>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppModelPointPageModelPointsByTypeTemplateIdGet(
          templateId,
          modelPointType,
          pageSize,
          bForceRefreshCache,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ModelPointApi - factory interface
 * @export
 */
export const ModelPointApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ModelPointApiFp(configuration)
  return {
    /**
     *
     * @summary 根据属性获取模型点位信息
     * @param {string} templateScenarioId 模板方案ID template scenario id
     * @param {string} modelPointType 模型点位类型 model point type
     * @param {Array<string>} attributes 属性条件 Condition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppModelPointModelPointsByConditionGet(
      templateScenarioId: string,
      modelPointType: string,
      attributes: Array<string>,
      options?: any,
    ): AxiosPromise<Array<ModelPointDetailInfo>> {
      return localVarFp
        .apiAppModelPointModelPointsByConditionGet(
          templateScenarioId,
          modelPointType,
          attributes,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据模型点位ID获取模型点位信息
     * @param {string} scenarioId
     * @param {Array<string>} [modelIds] 模型点位ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppModelPointModelPointsByModelIdScenarioIdGet(
      scenarioId: string,
      modelIds?: Array<string>,
      options?: any,
    ): AxiosPromise<Array<ModelPointDetailInfo>> {
      return localVarFp
        .apiAppModelPointModelPointsByModelIdScenarioIdGet(scenarioId, modelIds, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据点位类型获取模型点位信息
     * @param {string} templateId
     * @param {string} [modelPointType]
     * @param {number} [pageSize]
     * @param {string} [bForceRefreshCache]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppModelPointPageModelPointsByTypeTemplateIdGet(
      templateId: string,
      modelPointType?: string,
      pageSize?: number,
      bForceRefreshCache?: string,
      options?: any,
    ): AxiosPromise<Array<ModelPointDetailInfo>> {
      return localVarFp
        .apiAppModelPointPageModelPointsByTypeTemplateIdGet(
          templateId,
          modelPointType,
          pageSize,
          bForceRefreshCache,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ModelPointApi - object-oriented interface
 * @export
 * @class ModelPointApi
 * @extends {BaseAPI}
 */
export class ModelPointApi extends BaseAPI {
  /**
   *
   * @summary 根据属性获取模型点位信息
   * @param {string} templateScenarioId 模板方案ID template scenario id
   * @param {string} modelPointType 模型点位类型 model point type
   * @param {Array<string>} attributes 属性条件 Condition
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelPointApi
   */
  public apiAppModelPointModelPointsByConditionGet(
    templateScenarioId: string,
    modelPointType: string,
    attributes: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return ModelPointApiFp(this.configuration)
      .apiAppModelPointModelPointsByConditionGet(
        templateScenarioId,
        modelPointType,
        attributes,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据模型点位ID获取模型点位信息
   * @param {string} scenarioId
   * @param {Array<string>} [modelIds] 模型点位ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelPointApi
   */
  public apiAppModelPointModelPointsByModelIdScenarioIdGet(
    scenarioId: string,
    modelIds?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return ModelPointApiFp(this.configuration)
      .apiAppModelPointModelPointsByModelIdScenarioIdGet(scenarioId, modelIds, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据点位类型获取模型点位信息
   * @param {string} templateId
   * @param {string} [modelPointType]
   * @param {number} [pageSize]
   * @param {string} [bForceRefreshCache]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelPointApi
   */
  public apiAppModelPointPageModelPointsByTypeTemplateIdGet(
    templateId: string,
    modelPointType?: string,
    pageSize?: number,
    bForceRefreshCache?: string,
    options?: AxiosRequestConfig,
  ) {
    return ModelPointApiFp(this.configuration)
      .apiAppModelPointPageModelPointsByTypeTemplateIdGet(
        templateId,
        modelPointType,
        pageSize,
        bForceRefreshCache,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
