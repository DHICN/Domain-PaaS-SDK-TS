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
import { FileItemInfo } from '../models'
// @ts-ignore
import { MergeFileInput } from '../models'
// @ts-ignore
import { MergeFileOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UploadFileOutput } from '../models'
/**
 * FileApi - axios parameter creator
 * @export
 */
export const FileApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
     * @summary 获取所有上传的文件列表 Get all the uploaded file list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerGetlistGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/file-manager/getlist`
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
     * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
     * @summary 获取所有上传的文件列表 Get all the uploaded file list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerGetlistGet_1: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/file-manager/getlist`
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
     * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
     * @summary 融合上传的文件块 Merge uploaded files
     * @param {MergeFileInput} [mergeFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerMergeFilePost: async (
      mergeFileInput?: MergeFileInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/file-manager/merge-file`
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
        mergeFileInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
     * @summary 融合上传的文件块 Merge uploaded files
     * @param {MergeFileInput} [mergeFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerMergeFilePost_2: async (
      mergeFileInput?: MergeFileInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/file-manager/merge-file`
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
        mergeFileInput,
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
     * @summary 上传文件或文件块 Upload file or chunk
     * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
     * @param {number} [chunk] 分块序号 chunk number
     * @param {number} [totalChunks] 总的分块个数 total chunk numbers
     * @param {number} [totalSize] 总的文件大小 file size
     * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
     * @param {string} [fileName] 文件名称 file name
     * @param {any} [file] 分块后的文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerUploadFilePost: async (
      chunked?: boolean,
      chunk?: number,
      totalChunks?: number,
      totalSize?: number,
      identifer?: string,
      fileName?: string,
      file?: any,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/file-manager/upload-file`
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

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (chunked !== undefined) {
        localVarFormParams.append('Chunked', chunked as any)
      }

      if (chunk !== undefined) {
        localVarFormParams.append('Chunk', chunk as any)
      }

      if (totalChunks !== undefined) {
        localVarFormParams.append('TotalChunks', totalChunks as any)
      }

      if (totalSize !== undefined) {
        localVarFormParams.append('TotalSize', totalSize as any)
      }

      if (identifer !== undefined) {
        localVarFormParams.append(
          'Identifer',
          new Blob([JSON.stringify(identifer)], { type: 'application/json' }),
        )
      }

      if (fileName !== undefined) {
        localVarFormParams.append('FileName', fileName as any)
      }

      if (file !== undefined) {
        localVarFormParams.append('file', file as any)
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
    /**
     *
     * @summary 上传文件或文件块 Upload file or chunk
     * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
     * @param {number} [chunk] 分块序号 chunk number
     * @param {number} [totalChunks] 总的分块个数 total chunk numbers
     * @param {number} [totalSize] 总的文件大小 file size
     * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
     * @param {string} [fileName] 文件名称 file name
     * @param {any} [file] 分块后的文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerUploadFilePost_3: async (
      chunked?: boolean,
      chunk?: number,
      totalChunks?: number,
      totalSize?: number,
      identifer?: string,
      fileName?: string,
      file?: any,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/file-manager/upload-file`
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

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (chunked !== undefined) {
        localVarFormParams.append('Chunked', chunked as any)
      }

      if (chunk !== undefined) {
        localVarFormParams.append('Chunk', chunk as any)
      }

      if (totalChunks !== undefined) {
        localVarFormParams.append('TotalChunks', totalChunks as any)
      }

      if (totalSize !== undefined) {
        localVarFormParams.append('TotalSize', totalSize as any)
      }

      if (identifer !== undefined) {
        localVarFormParams.append(
          'Identifer',
          new Blob([JSON.stringify(identifer)], { type: 'application/json' }),
        )
      }

      if (fileName !== undefined) {
        localVarFormParams.append('FileName', fileName as any)
      }

      if (file !== undefined) {
        localVarFormParams.append('file', file as any)
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
 * FileApi - functional programming interface
 * @export
 */
export const FileApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = FileApiAxiosParamCreator(configuration)
  return {
    /**
     * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
     * @summary 获取所有上传的文件列表 Get all the uploaded file list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationFileManagerGetlistGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileItemInfo>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationFileManagerGetlistGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
     * @summary 获取所有上传的文件列表 Get all the uploaded file list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationFileManagerGetlistGet_1(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileItemInfo>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationFileManagerGetlistGet_1(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
     * @summary 融合上传的文件块 Merge uploaded files
     * @param {MergeFileInput} [mergeFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationFileManagerMergeFilePost(
      mergeFileInput?: MergeFileInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MergeFileOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationFileManagerMergeFilePost(
          mergeFileInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
     * @summary 融合上传的文件块 Merge uploaded files
     * @param {MergeFileInput} [mergeFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationFileManagerMergeFilePost_2(
      mergeFileInput?: MergeFileInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MergeFileOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationFileManagerMergeFilePost_2(
          mergeFileInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 上传文件或文件块 Upload file or chunk
     * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
     * @param {number} [chunk] 分块序号 chunk number
     * @param {number} [totalChunks] 总的分块个数 total chunk numbers
     * @param {number} [totalSize] 总的文件大小 file size
     * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
     * @param {string} [fileName] 文件名称 file name
     * @param {any} [file] 分块后的文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationFileManagerUploadFilePost(
      chunked?: boolean,
      chunk?: number,
      totalChunks?: number,
      totalSize?: number,
      identifer?: string,
      fileName?: string,
      file?: any,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadFileOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationFileManagerUploadFilePost(
          chunked,
          chunk,
          totalChunks,
          totalSize,
          identifer,
          fileName,
          file,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 上传文件或文件块 Upload file or chunk
     * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
     * @param {number} [chunk] 分块序号 chunk number
     * @param {number} [totalChunks] 总的分块个数 total chunk numbers
     * @param {number} [totalSize] 总的文件大小 file size
     * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
     * @param {string} [fileName] 文件名称 file name
     * @param {any} [file] 分块后的文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationFileManagerUploadFilePost_3(
      chunked?: boolean,
      chunk?: number,
      totalChunks?: number,
      totalSize?: number,
      identifer?: string,
      fileName?: string,
      file?: any,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadFileOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationFileManagerUploadFilePost_3(
          chunked,
          chunk,
          totalChunks,
          totalSize,
          identifer,
          fileName,
          file,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * FileApi - factory interface
 * @export
 */
export const FileApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = FileApiFp(configuration)
  return {
    /**
     * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
     * @summary 获取所有上传的文件列表 Get all the uploaded file list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerGetlistGet(options?: any): AxiosPromise<Array<FileItemInfo>> {
      return localVarFp
        .apiV1ModelConfigurationFileManagerGetlistGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
     * @summary 获取所有上传的文件列表 Get all the uploaded file list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerGetlistGet_1(
      options?: any,
    ): AxiosPromise<Array<FileItemInfo>> {
      return localVarFp
        .apiV1ModelConfigurationFileManagerGetlistGet_1(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
     * @summary 融合上传的文件块 Merge uploaded files
     * @param {MergeFileInput} [mergeFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerMergeFilePost(
      mergeFileInput?: MergeFileInput,
      options?: any,
    ): AxiosPromise<MergeFileOutput> {
      return localVarFp
        .apiV1ModelConfigurationFileManagerMergeFilePost(mergeFileInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
     * @summary 融合上传的文件块 Merge uploaded files
     * @param {MergeFileInput} [mergeFileInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerMergeFilePost_2(
      mergeFileInput?: MergeFileInput,
      options?: any,
    ): AxiosPromise<MergeFileOutput> {
      return localVarFp
        .apiV1ModelConfigurationFileManagerMergeFilePost_2(mergeFileInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 上传文件或文件块 Upload file or chunk
     * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
     * @param {number} [chunk] 分块序号 chunk number
     * @param {number} [totalChunks] 总的分块个数 total chunk numbers
     * @param {number} [totalSize] 总的文件大小 file size
     * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
     * @param {string} [fileName] 文件名称 file name
     * @param {any} [file] 分块后的文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerUploadFilePost(
      chunked?: boolean,
      chunk?: number,
      totalChunks?: number,
      totalSize?: number,
      identifer?: string,
      fileName?: string,
      file?: any,
      options?: any,
    ): AxiosPromise<UploadFileOutput> {
      return localVarFp
        .apiV1ModelConfigurationFileManagerUploadFilePost(
          chunked,
          chunk,
          totalChunks,
          totalSize,
          identifer,
          fileName,
          file,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 上传文件或文件块 Upload file or chunk
     * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
     * @param {number} [chunk] 分块序号 chunk number
     * @param {number} [totalChunks] 总的分块个数 total chunk numbers
     * @param {number} [totalSize] 总的文件大小 file size
     * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
     * @param {string} [fileName] 文件名称 file name
     * @param {any} [file] 分块后的文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationFileManagerUploadFilePost_3(
      chunked?: boolean,
      chunk?: number,
      totalChunks?: number,
      totalSize?: number,
      identifer?: string,
      fileName?: string,
      file?: any,
      options?: any,
    ): AxiosPromise<UploadFileOutput> {
      return localVarFp
        .apiV1ModelConfigurationFileManagerUploadFilePost_3(
          chunked,
          chunk,
          totalChunks,
          totalSize,
          identifer,
          fileName,
          file,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FileApi - object-oriented interface
 * @export
 * @class FileApi
 * @extends {BaseAPI}
 */
export class FileApi extends BaseAPI {
  /**
   * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
   * @summary 获取所有上传的文件列表 Get all the uploaded file list
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public apiV1ModelConfigurationFileManagerGetlistGet(options?: AxiosRequestConfig) {
    return FileApiFp(this.configuration)
      .apiV1ModelConfigurationFileManagerGetlistGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 获取所有上传的文件列表，包括已融合的和未融合的 Get all the uploaded file list, including merged and not merged files
   * @summary 获取所有上传的文件列表 Get all the uploaded file list
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public apiV1ModelConfigurationFileManagerGetlistGet_1(options?: AxiosRequestConfig) {
    return FileApiFp(this.configuration)
      .apiV1ModelConfigurationFileManagerGetlistGet_1(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
   * @summary 融合上传的文件块 Merge uploaded files
   * @param {MergeFileInput} [mergeFileInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public apiV1ModelConfigurationFileManagerMergeFilePost(
    mergeFileInput?: MergeFileInput,
    options?: AxiosRequestConfig,
  ) {
    return FileApiFp(this.configuration)
      .apiV1ModelConfigurationFileManagerMergeFilePost(mergeFileInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 将文件块融合成一个完成的文件，如果文件已经合成，则会返回错误信息 Merge all the chunks into a complete file，if the file has already been merged, a failure will be returned.
   * @summary 融合上传的文件块 Merge uploaded files
   * @param {MergeFileInput} [mergeFileInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public apiV1ModelConfigurationFileManagerMergeFilePost_2(
    mergeFileInput?: MergeFileInput,
    options?: AxiosRequestConfig,
  ) {
    return FileApiFp(this.configuration)
      .apiV1ModelConfigurationFileManagerMergeFilePost_2(mergeFileInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 上传文件或文件块 Upload file or chunk
   * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
   * @param {number} [chunk] 分块序号 chunk number
   * @param {number} [totalChunks] 总的分块个数 total chunk numbers
   * @param {number} [totalSize] 总的文件大小 file size
   * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
   * @param {string} [fileName] 文件名称 file name
   * @param {any} [file] 分块后的文件
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public apiV1ModelConfigurationFileManagerUploadFilePost(
    chunked?: boolean,
    chunk?: number,
    totalChunks?: number,
    totalSize?: number,
    identifer?: string,
    fileName?: string,
    file?: any,
    options?: AxiosRequestConfig,
  ) {
    return FileApiFp(this.configuration)
      .apiV1ModelConfigurationFileManagerUploadFilePost(
        chunked,
        chunk,
        totalChunks,
        totalSize,
        identifer,
        fileName,
        file,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 上传文件或文件块 Upload file or chunk
   * @param {boolean} [chunked] 是否分块，默认分块 whether to chunk
   * @param {number} [chunk] 分块序号 chunk number
   * @param {number} [totalChunks] 总的分块个数 total chunk numbers
   * @param {number} [totalSize] 总的文件大小 file size
   * @param {string} [identifer] 文件ID，同一个文件的所有文件块具有相同的ID file id, all the chunks of one file should have a same identifer
   * @param {string} [fileName] 文件名称 file name
   * @param {any} [file] 分块后的文件
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public apiV1ModelConfigurationFileManagerUploadFilePost_3(
    chunked?: boolean,
    chunk?: number,
    totalChunks?: number,
    totalSize?: number,
    identifer?: string,
    fileName?: string,
    file?: any,
    options?: AxiosRequestConfig,
  ) {
    return FileApiFp(this.configuration)
      .apiV1ModelConfigurationFileManagerUploadFilePost_3(
        chunked,
        chunk,
        totalChunks,
        totalSize,
        identifer,
        fileName,
        file,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
