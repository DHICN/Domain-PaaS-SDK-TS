/* eslint-disable */
/**
 * model-configuration-service
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
import { CreateTemplateFileInputV2 } from '../models'
// @ts-ignore
import { DownloadFileInput } from '../models'
// @ts-ignore
import { QueryTemplateListOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * ModelTemplateApi - axios parameter creator
 * @export
 */
export const ModelTemplateApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 把上传的模板模型文件标记为可作为模板方案的模型 Mark a template file as model file that can be used to create a template scenario
     * @summary 标记模板模型文件 Mark a template file
     * @param {CreateTemplateFileInputV2} [createTemplateFileInputV2]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateCreateModelTemplatePost: async (
      createTemplateFileInputV2?: CreateTemplateFileInputV2,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-configuration/template/create-model-template`
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
        createTemplateFileInputV2,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 根据文件ID删除若干个模板模型文件 Delete template files with template file ids
     * @summary 删除模板模型文件 Delete template files
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateDeletePost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-configuration/template/delete`
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
     * 根据文件名下载模板模型文件 Download model template files with fileName
     * @summary 下载模板模型文件 Download template files
     * @param {DownloadFileInput} [downloadFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateDownloadModelTempaltePost: async (
      downloadFileInput?: DownloadFileInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-configuration/template/download-model-tempalte`
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
        downloadFileInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 获取所有的模板模型文件列表 Get all the model template files list
     * @summary 获取模板模型文件列表 Get template files list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateModelTempalteListGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-configuration/template/model-tempalte-list`
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
     * 上传模型模板文件，支持以.zip或者.7z格式来压缩一个完整的模型，同时会后台异步检查模型文件，如果模型文件符合要求，将被标记为可用于创建模板方案 Upload a template file, which can be a .zip or .7z file containing a complete model. Meanwhile the model files will be checked asynchronously, and marked as model file that can be used to create a template scenario if it meet the necessary requirements.
     * @summary 上传模型模板文件，同时检查模型文件 Upload a template file, meanwhile check the file
     * @param {string} [muppName] 模型文件名称 model file name without path
     * @param {string} [systemId] 系统ID system id
     * @param {string} [libraryType] 库类型 library type
     * @param {string} [businessType] 业务类型 business type
     * @param {string} [modelType] 模型类型 model type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateUploadModelTemplatePost: async (
      muppName?: string,
      systemId?: string,
      libraryType?: string,
      businessType?: string,
      modelType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/model-configuration/template/upload-model-template`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (muppName !== undefined) {
        localVarQueryParameter['muppName'] = muppName
      }

      if (systemId !== undefined) {
        localVarQueryParameter['systemId'] = systemId
      }

      if (libraryType !== undefined) {
        localVarQueryParameter['libraryType'] = libraryType
      }

      if (businessType !== undefined) {
        localVarQueryParameter['businessType'] = businessType
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
  }
}

/**
 * ModelTemplateApi - functional programming interface
 * @export
 */
export const ModelTemplateApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ModelTemplateApiAxiosParamCreator(configuration)
  return {
    /**
     * 把上传的模板模型文件标记为可作为模板方案的模型 Mark a template file as model file that can be used to create a template scenario
     * @summary 标记模板模型文件 Mark a template file
     * @param {CreateTemplateFileInputV2} [createTemplateFileInputV2]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigurationTemplateCreateModelTemplatePost(
      createTemplateFileInputV2?: CreateTemplateFileInputV2,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ModelConfigurationTemplateCreateModelTemplatePost(
          createTemplateFileInputV2,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据文件ID删除若干个模板模型文件 Delete template files with template file ids
     * @summary 删除模板模型文件 Delete template files
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigurationTemplateDeletePost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ModelConfigurationTemplateDeletePost(
          requestBody,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据文件名下载模板模型文件 Download model template files with fileName
     * @summary 下载模板模型文件 Download template files
     * @param {DownloadFileInput} [downloadFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigurationTemplateDownloadModelTempaltePost(
      downloadFileInput?: DownloadFileInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ModelConfigurationTemplateDownloadModelTempaltePost(
          downloadFileInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 获取所有的模板模型文件列表 Get all the model template files list
     * @summary 获取模板模型文件列表 Get template files list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigurationTemplateModelTempalteListGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<QueryTemplateListOutput>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ModelConfigurationTemplateModelTempalteListGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 上传模型模板文件，支持以.zip或者.7z格式来压缩一个完整的模型，同时会后台异步检查模型文件，如果模型文件符合要求，将被标记为可用于创建模板方案 Upload a template file, which can be a .zip or .7z file containing a complete model. Meanwhile the model files will be checked asynchronously, and marked as model file that can be used to create a template scenario if it meet the necessary requirements.
     * @summary 上传模型模板文件，同时检查模型文件 Upload a template file, meanwhile check the file
     * @param {string} [muppName] 模型文件名称 model file name without path
     * @param {string} [systemId] 系统ID system id
     * @param {string} [libraryType] 库类型 library type
     * @param {string} [businessType] 业务类型 business type
     * @param {string} [modelType] 模型类型 model type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ModelConfigurationTemplateUploadModelTemplatePost(
      muppName?: string,
      systemId?: string,
      libraryType?: string,
      businessType?: string,
      modelType?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ModelConfigurationTemplateUploadModelTemplatePost(
          muppName,
          systemId,
          libraryType,
          businessType,
          modelType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ModelTemplateApi - factory interface
 * @export
 */
export const ModelTemplateApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ModelTemplateApiFp(configuration)
  return {
    /**
     * 把上传的模板模型文件标记为可作为模板方案的模型 Mark a template file as model file that can be used to create a template scenario
     * @summary 标记模板模型文件 Mark a template file
     * @param {CreateTemplateFileInputV2} [createTemplateFileInputV2]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateCreateModelTemplatePost(
      createTemplateFileInputV2?: CreateTemplateFileInputV2,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV2ModelConfigurationTemplateCreateModelTemplatePost(createTemplateFileInputV2, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据文件ID删除若干个模板模型文件 Delete template files with template file ids
     * @summary 删除模板模型文件 Delete template files
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateDeletePost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV2ModelConfigurationTemplateDeletePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据文件名下载模板模型文件 Download model template files with fileName
     * @summary 下载模板模型文件 Download template files
     * @param {DownloadFileInput} [downloadFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateDownloadModelTempaltePost(
      downloadFileInput?: DownloadFileInput,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV2ModelConfigurationTemplateDownloadModelTempaltePost(downloadFileInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 获取所有的模板模型文件列表 Get all the model template files list
     * @summary 获取模板模型文件列表 Get template files list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateModelTempalteListGet(
      options?: any,
    ): AxiosPromise<Array<QueryTemplateListOutput>> {
      return localVarFp
        .apiV2ModelConfigurationTemplateModelTempalteListGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 上传模型模板文件，支持以.zip或者.7z格式来压缩一个完整的模型，同时会后台异步检查模型文件，如果模型文件符合要求，将被标记为可用于创建模板方案 Upload a template file, which can be a .zip or .7z file containing a complete model. Meanwhile the model files will be checked asynchronously, and marked as model file that can be used to create a template scenario if it meet the necessary requirements.
     * @summary 上传模型模板文件，同时检查模型文件 Upload a template file, meanwhile check the file
     * @param {string} [muppName] 模型文件名称 model file name without path
     * @param {string} [systemId] 系统ID system id
     * @param {string} [libraryType] 库类型 library type
     * @param {string} [businessType] 业务类型 business type
     * @param {string} [modelType] 模型类型 model type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ModelConfigurationTemplateUploadModelTemplatePost(
      muppName?: string,
      systemId?: string,
      libraryType?: string,
      businessType?: string,
      modelType?: string,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV2ModelConfigurationTemplateUploadModelTemplatePost(
          muppName,
          systemId,
          libraryType,
          businessType,
          modelType,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ModelTemplateApi - object-oriented interface
 * @export
 * @class ModelTemplateApi
 * @extends {BaseAPI}
 */
export class ModelTemplateApi extends BaseAPI {
  /**
   * 把上传的模板模型文件标记为可作为模板方案的模型 Mark a template file as model file that can be used to create a template scenario
   * @summary 标记模板模型文件 Mark a template file
   * @param {CreateTemplateFileInputV2} [createTemplateFileInputV2]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelTemplateApi
   */
  public apiV2ModelConfigurationTemplateCreateModelTemplatePost(
    createTemplateFileInputV2?: CreateTemplateFileInputV2,
    options?: AxiosRequestConfig,
  ) {
    return ModelTemplateApiFp(this.configuration)
      .apiV2ModelConfigurationTemplateCreateModelTemplatePost(createTemplateFileInputV2, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据文件ID删除若干个模板模型文件 Delete template files with template file ids
   * @summary 删除模板模型文件 Delete template files
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelTemplateApi
   */
  public apiV2ModelConfigurationTemplateDeletePost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return ModelTemplateApiFp(this.configuration)
      .apiV2ModelConfigurationTemplateDeletePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据文件名下载模板模型文件 Download model template files with fileName
   * @summary 下载模板模型文件 Download template files
   * @param {DownloadFileInput} [downloadFileInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelTemplateApi
   */
  public apiV2ModelConfigurationTemplateDownloadModelTempaltePost(
    downloadFileInput?: DownloadFileInput,
    options?: AxiosRequestConfig,
  ) {
    return ModelTemplateApiFp(this.configuration)
      .apiV2ModelConfigurationTemplateDownloadModelTempaltePost(downloadFileInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 获取所有的模板模型文件列表 Get all the model template files list
   * @summary 获取模板模型文件列表 Get template files list
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelTemplateApi
   */
  public apiV2ModelConfigurationTemplateModelTempalteListGet(options?: AxiosRequestConfig) {
    return ModelTemplateApiFp(this.configuration)
      .apiV2ModelConfigurationTemplateModelTempalteListGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 上传模型模板文件，支持以.zip或者.7z格式来压缩一个完整的模型，同时会后台异步检查模型文件，如果模型文件符合要求，将被标记为可用于创建模板方案 Upload a template file, which can be a .zip or .7z file containing a complete model. Meanwhile the model files will be checked asynchronously, and marked as model file that can be used to create a template scenario if it meet the necessary requirements.
   * @summary 上传模型模板文件，同时检查模型文件 Upload a template file, meanwhile check the file
   * @param {string} [muppName] 模型文件名称 model file name without path
   * @param {string} [systemId] 系统ID system id
   * @param {string} [libraryType] 库类型 library type
   * @param {string} [businessType] 业务类型 business type
   * @param {string} [modelType] 模型类型 model type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelTemplateApi
   */
  public apiV2ModelConfigurationTemplateUploadModelTemplatePost(
    muppName?: string,
    systemId?: string,
    libraryType?: string,
    businessType?: string,
    modelType?: string,
    options?: AxiosRequestConfig,
  ) {
    return ModelTemplateApiFp(this.configuration)
      .apiV2ModelConfigurationTemplateUploadModelTemplatePost(
        muppName,
        systemId,
        libraryType,
        businessType,
        modelType,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
