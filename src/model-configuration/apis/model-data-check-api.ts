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
import { CheckFileListOutput } from '../models'
// @ts-ignore
import { DownloadFileInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * ModelDataCheckApi - axios parameter creator
 * @export
 */
export const ModelDataCheckApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get all the check file information.
     * @summary Check filelist
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationModelingCheckFilelistGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/modeling/check-filelist`
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
     * Download modeling file from server
     * @summary Download modeling file
     * @param {DownloadFileInput} [downloadFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationModelingDownloadFilePost: async (
      downloadFileInput?: DownloadFileInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/modeling/download-file`
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
     * Upload modeling file
     * @summary Upload file
     * @param {string} [dataType]
     * @param {string} [item] File item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationModelingUploadFilePost: async (
      dataType?: string,
      item?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/modeling/upload-file`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any
      const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)()

      if (dataType !== undefined) {
        localVarFormParams.append('DataType', dataType as any)
      }

      if (item !== undefined) {
        localVarFormParams.append('Item', item as any)
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = localVarFormParams

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * ModelDataCheckApi - functional programming interface
 * @export
 */
export const ModelDataCheckApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ModelDataCheckApiAxiosParamCreator(configuration)
  return {
    /**
     * Get all the check file information.
     * @summary Check filelist
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationModelingCheckFilelistGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CheckFileListOutput>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationModelingCheckFilelistGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Download modeling file from server
     * @summary Download modeling file
     * @param {DownloadFileInput} [downloadFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationModelingDownloadFilePost(
      downloadFileInput?: DownloadFileInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationModelingDownloadFilePost(
          downloadFileInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Upload modeling file
     * @summary Upload file
     * @param {string} [dataType]
     * @param {string} [item] File item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationModelingUploadFilePost(
      dataType?: string,
      item?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CheckFileListOutput>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationModelingUploadFilePost(
          dataType,
          item,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ModelDataCheckApi - factory interface
 * @export
 */
export const ModelDataCheckApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ModelDataCheckApiFp(configuration)
  return {
    /**
     * Get all the check file information.
     * @summary Check filelist
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationModelingCheckFilelistGet(
      options?: any,
    ): AxiosPromise<Array<CheckFileListOutput>> {
      return localVarFp
        .apiV1ModelConfigurationModelingCheckFilelistGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Download modeling file from server
     * @summary Download modeling file
     * @param {DownloadFileInput} [downloadFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationModelingDownloadFilePost(
      downloadFileInput?: DownloadFileInput,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV1ModelConfigurationModelingDownloadFilePost(downloadFileInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Upload modeling file
     * @summary Upload file
     * @param {string} [dataType]
     * @param {string} [item] File item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationModelingUploadFilePost(
      dataType?: string,
      item?: string,
      options?: any,
    ): AxiosPromise<Array<CheckFileListOutput>> {
      return localVarFp
        .apiV1ModelConfigurationModelingUploadFilePost(dataType, item, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ModelDataCheckApi - object-oriented interface
 * @export
 * @class ModelDataCheckApi
 * @extends {BaseAPI}
 */
export class ModelDataCheckApi extends BaseAPI {
  /**
   * Get all the check file information.
   * @summary Check filelist
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelDataCheckApi
   */
  public apiV1ModelConfigurationModelingCheckFilelistGet(options?: AxiosRequestConfig) {
    return ModelDataCheckApiFp(this.configuration)
      .apiV1ModelConfigurationModelingCheckFilelistGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Download modeling file from server
   * @summary Download modeling file
   * @param {DownloadFileInput} [downloadFileInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelDataCheckApi
   */
  public apiV1ModelConfigurationModelingDownloadFilePost(
    downloadFileInput?: DownloadFileInput,
    options?: AxiosRequestConfig,
  ) {
    return ModelDataCheckApiFp(this.configuration)
      .apiV1ModelConfigurationModelingDownloadFilePost(downloadFileInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Upload modeling file
   * @summary Upload file
   * @param {string} [dataType]
   * @param {string} [item] File item
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelDataCheckApi
   */
  public apiV1ModelConfigurationModelingUploadFilePost(
    dataType?: string,
    item?: string,
    options?: AxiosRequestConfig,
  ) {
    return ModelDataCheckApiFp(this.configuration)
      .apiV1ModelConfigurationModelingUploadFilePost(dataType, item, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
