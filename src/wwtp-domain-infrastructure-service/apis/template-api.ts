/* eslint-disable */
/**
 * 污水业务中台基础服务
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
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { TemplateOutput } from '../models'
/**
 * TemplateApi - axios parameter creator
 * @export
 */
export const TemplateApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 删除模型模板压缩文件（.zip, .7z），并删除模板方案 Delete model template compressed file with extension .zip or .7z, and delete the existing template scenario
     * @summary 删除模型模板并删除模板方案 Delete model template file and delete the template scenario
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateDeletePost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-config/template/delete`
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
     * @summary 获取下载模型模板文件的url Get url for downloading the template file
     * @param {string} [templateScenarioId] 模板方案ID template scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateDownloadGet: async (
      templateScenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-config/template/download`
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
        localVarQueryParameter['templateScenarioId'] = templateScenarioId
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
     * @summary 获取模板方案列表 Get all the template scenarios
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateGetAllGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-config/template/get-all`
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
     * 上传模型模板压缩文件（.zip, .7z），保存到minIO，并创建模板方案 Upload model template compressed file with extension .zip or .7z, upload to minio and create a new template scenario
     * @summary 上传模型模板并创建模板方案 Upload model template file and create a template scenario
     * @param {string} [modelName] 模型名称 model name
     * @param {number} [modelType] 模型类型 model type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateUploadCreatePost: async (
      modelName?: string,
      modelType?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-config/template/upload-create`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (modelName !== undefined) {
        localVarQueryParameter['modelName'] = modelName
      }

      if (modelType !== undefined) {
        localVarQueryParameter['modelType'] = modelType
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
     * 重新上传模型模板压缩文件（.zip, .7z），保存到minIO，并更新模板方案 Re-upload model template compressed file with extension .zip or .7z, upload to minio and update the existing template scenario
     * @summary 上传模型模板并更新模板方案 Upload model template file and update the template scenario
     * @param {string} [templateScenarioId] 模板方案ID template scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateUploadUpdatePost: async (
      templateScenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-config/template/upload-update`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (templateScenarioId !== undefined) {
        localVarQueryParameter['templateScenarioId'] = templateScenarioId
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
 * TemplateApi - functional programming interface
 * @export
 */
export const TemplateApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TemplateApiAxiosParamCreator(configuration)
  return {
    /**
     * 删除模型模板压缩文件（.zip, .7z），并删除模板方案 Delete model template compressed file with extension .zip or .7z, and delete the existing template scenario
     * @summary 删除模型模板并删除模板方案 Delete model template file and delete the template scenario
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigTemplateDeletePost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2ModelConfigTemplateDeletePost(
        requestBody,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取下载模型模板文件的url Get url for downloading the template file
     * @param {string} [templateScenarioId] 模板方案ID template scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigTemplateDownloadGet(
      templateScenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2ModelConfigTemplateDownloadGet(
        templateScenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取模板方案列表 Get all the template scenarios
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigTemplateGetAllGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TemplateOutput>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2ModelConfigTemplateGetAllGet(
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 上传模型模板压缩文件（.zip, .7z），保存到minIO，并创建模板方案 Upload model template compressed file with extension .zip or .7z, upload to minio and create a new template scenario
     * @summary 上传模型模板并创建模板方案 Upload model template file and create a template scenario
     * @param {string} [modelName] 模型名称 model name
     * @param {number} [modelType] 模型类型 model type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigTemplateUploadCreatePost(
      modelName?: string,
      modelType?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TemplateOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ModelConfigTemplateUploadCreatePost(
          modelName,
          modelType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 重新上传模型模板压缩文件（.zip, .7z），保存到minIO，并更新模板方案 Re-upload model template compressed file with extension .zip or .7z, upload to minio and update the existing template scenario
     * @summary 上传模型模板并更新模板方案 Upload model template file and update the template scenario
     * @param {string} [templateScenarioId] 模板方案ID template scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigTemplateUploadUpdatePost(
      templateScenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TemplateOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ModelConfigTemplateUploadUpdatePost(
          templateScenarioId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * TemplateApi - factory interface
 * @export
 */
export const TemplateApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = TemplateApiFp(configuration)
  return {
    /**
     * 删除模型模板压缩文件（.zip, .7z），并删除模板方案 Delete model template compressed file with extension .zip or .7z, and delete the existing template scenario
     * @summary 删除模型模板并删除模板方案 Delete model template file and delete the template scenario
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateDeletePost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV2ModelConfigTemplateDeletePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取下载模型模板文件的url Get url for downloading the template file
     * @param {string} [templateScenarioId] 模板方案ID template scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateDownloadGet(
      templateScenarioId?: string,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV2ModelConfigTemplateDownloadGet(templateScenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取模板方案列表 Get all the template scenarios
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateGetAllGet(options?: any): AxiosPromise<Array<TemplateOutput>> {
      return localVarFp
        .apiV2ModelConfigTemplateGetAllGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 上传模型模板压缩文件（.zip, .7z），保存到minIO，并创建模板方案 Upload model template compressed file with extension .zip or .7z, upload to minio and create a new template scenario
     * @summary 上传模型模板并创建模板方案 Upload model template file and create a template scenario
     * @param {string} [modelName] 模型名称 model name
     * @param {number} [modelType] 模型类型 model type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateUploadCreatePost(
      modelName?: string,
      modelType?: number,
      options?: any,
    ): AxiosPromise<TemplateOutput> {
      return localVarFp
        .apiV2ModelConfigTemplateUploadCreatePost(modelName, modelType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 重新上传模型模板压缩文件（.zip, .7z），保存到minIO，并更新模板方案 Re-upload model template compressed file with extension .zip or .7z, upload to minio and update the existing template scenario
     * @summary 上传模型模板并更新模板方案 Upload model template file and update the template scenario
     * @param {string} [templateScenarioId] 模板方案ID template scenario id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigTemplateUploadUpdatePost(
      templateScenarioId?: string,
      options?: any,
    ): AxiosPromise<TemplateOutput> {
      return localVarFp
        .apiV2ModelConfigTemplateUploadUpdatePost(templateScenarioId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TemplateApi - object-oriented interface
 * @export
 * @class TemplateApi
 * @extends {BaseAPI}
 */
export class TemplateApi extends BaseAPI {
  /**
   * 删除模型模板压缩文件（.zip, .7z），并删除模板方案 Delete model template compressed file with extension .zip or .7z, and delete the existing template scenario
   * @summary 删除模型模板并删除模板方案 Delete model template file and delete the template scenario
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TemplateApi
   */
  public apiV2ModelConfigTemplateDeletePost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return TemplateApiFp(this.configuration)
      .apiV2ModelConfigTemplateDeletePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取下载模型模板文件的url Get url for downloading the template file
   * @param {string} [templateScenarioId] 模板方案ID template scenario id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TemplateApi
   */
  public apiV2ModelConfigTemplateDownloadGet(
    templateScenarioId?: string,
    options?: AxiosRequestConfig,
  ) {
    return TemplateApiFp(this.configuration)
      .apiV2ModelConfigTemplateDownloadGet(templateScenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取模板方案列表 Get all the template scenarios
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TemplateApi
   */
  public apiV2ModelConfigTemplateGetAllGet(options?: AxiosRequestConfig) {
    return TemplateApiFp(this.configuration)
      .apiV2ModelConfigTemplateGetAllGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 上传模型模板压缩文件（.zip, .7z），保存到minIO，并创建模板方案 Upload model template compressed file with extension .zip or .7z, upload to minio and create a new template scenario
   * @summary 上传模型模板并创建模板方案 Upload model template file and create a template scenario
   * @param {string} [modelName] 模型名称 model name
   * @param {number} [modelType] 模型类型 model type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TemplateApi
   */
  public apiV2ModelConfigTemplateUploadCreatePost(
    modelName?: string,
    modelType?: number,
    options?: AxiosRequestConfig,
  ) {
    return TemplateApiFp(this.configuration)
      .apiV2ModelConfigTemplateUploadCreatePost(modelName, modelType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 重新上传模型模板压缩文件（.zip, .7z），保存到minIO，并更新模板方案 Re-upload model template compressed file with extension .zip or .7z, upload to minio and update the existing template scenario
   * @summary 上传模型模板并更新模板方案 Upload model template file and update the template scenario
   * @param {string} [templateScenarioId] 模板方案ID template scenario id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TemplateApi
   */
  public apiV2ModelConfigTemplateUploadUpdatePost(
    templateScenarioId?: string,
    options?: AxiosRequestConfig,
  ) {
    return TemplateApiFp(this.configuration)
      .apiV2ModelConfigTemplateUploadUpdatePost(templateScenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
