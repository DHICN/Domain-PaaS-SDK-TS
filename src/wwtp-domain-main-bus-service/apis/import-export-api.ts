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
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { StringListResult } from '../models'
/**
 * ImportExportApi - axios parameter creator
 * @export
 */
export const ImportExportApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 导出配置文件Excel / Export config Excel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ConfigExportConfigExcelGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/config/export-config-excel`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      }
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
     * @summary 导入业务服务配置文件Excel / Import config Excel
     * @param {any} [excelFile]
     * @param {string} [sheets] 更新的sheet页的编码，如（1,2,3表示更新sheet1，2，3中的配置），以表示需要更新哪个页的配置，其余页面不更新；如该参数为空，则表示全部更新
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ConfigImportConfigExcelPost: async (
      excelFile?: any,
      sheets?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/config/import-config-excel`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any
      const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)()

      if (excelFile !== undefined) {
        localVarFormParams.append('ExcelFile', excelFile as any)
      }

      if (sheets !== undefined) {
        localVarFormParams.append('Sheets', sheets as any)
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
 * ImportExportApi - functional programming interface
 * @export
 */
export const ImportExportApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ImportExportApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 导出配置文件Excel / Export config Excel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ConfigExportConfigExcelGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV2ConfigExportConfigExcelGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 导入业务服务配置文件Excel / Import config Excel
     * @param {any} [excelFile]
     * @param {string} [sheets] 更新的sheet页的编码，如（1,2,3表示更新sheet1，2，3中的配置），以表示需要更新哪个页的配置，其余页面不更新；如该参数为空，则表示全部更新
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2ConfigImportConfigExcelPost(
      excelFile?: any,
      sheets?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringListResult>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV2ConfigImportConfigExcelPost(
        excelFile,
        sheets,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ImportExportApi - factory interface
 * @export
 */
export const ImportExportApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ImportExportApiFp(configuration)
  return {
    /**
     *
     * @summary 导出配置文件Excel / Export config Excel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ConfigExportConfigExcelGet(options?: any): AxiosPromise<void> {
      return localVarFp
        .apiV2ConfigExportConfigExcelGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 导入业务服务配置文件Excel / Import config Excel
     * @param {any} [excelFile]
     * @param {string} [sheets] 更新的sheet页的编码，如（1,2,3表示更新sheet1，2，3中的配置），以表示需要更新哪个页的配置，其余页面不更新；如该参数为空，则表示全部更新
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2ConfigImportConfigExcelPost(
      excelFile?: any,
      sheets?: string,
      options?: any,
    ): AxiosPromise<StringListResult> {
      return localVarFp
        .apiV2ConfigImportConfigExcelPost(excelFile, sheets, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ImportExportApi - object-oriented interface
 * @export
 * @class ImportExportApi
 * @extends {BaseAPI}
 */
export class ImportExportApi extends BaseAPI {
  /**
   *
   * @summary 导出配置文件Excel / Export config Excel
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportExportApi
   */
  public apiV2ConfigExportConfigExcelGet(options?: AxiosRequestConfig) {
    return ImportExportApiFp(this.configuration)
      .apiV2ConfigExportConfigExcelGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 导入业务服务配置文件Excel / Import config Excel
   * @param {any} [excelFile]
   * @param {string} [sheets] 更新的sheet页的编码，如（1,2,3表示更新sheet1，2，3中的配置），以表示需要更新哪个页的配置，其余页面不更新；如该参数为空，则表示全部更新
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ImportExportApi
   */
  public apiV2ConfigImportConfigExcelPost(
    excelFile?: any,
    sheets?: string,
    options?: AxiosRequestConfig,
  ) {
    return ImportExportApiFp(this.configuration)
      .apiV2ConfigImportConfigExcelPost(excelFile, sheets, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
