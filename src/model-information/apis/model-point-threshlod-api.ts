/* eslint-disable */
/**
 * 模型编辑服务
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
import { ModelPointThresholdInfo } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * ModelPointThreshlodApi - axios parameter creator
 * @export
 */
export const ModelPointThreshlodApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Get model point threshold
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationThresholdsAllGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/thresholds/all`
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
  }
}

/**
 * ModelPointThreshlodApi - functional programming interface
 * @export
 */
export const ModelPointThreshlodApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ModelPointThreshlodApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary Get model point threshold
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationThresholdsAllGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelPointThresholdInfo>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationThresholdsAllGet(scenarioId, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ModelPointThreshlodApi - factory interface
 * @export
 */
export const ModelPointThreshlodApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ModelPointThreshlodApiFp(configuration)
  return {
    /**
     *
     * @summary Get model point threshold
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationThresholdsAllGet(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<ModelPointThresholdInfo> {
      return localVarFp
        .apiV1ModelInformationThresholdsAllGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ModelPointThreshlodApi - object-oriented interface
 * @export
 * @class ModelPointThreshlodApi
 * @extends {BaseAPI}
 */
export class ModelPointThreshlodApi extends BaseAPI {
  /**
   *
   * @summary Get model point threshold
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ModelPointThreshlodApi
   */
  public apiV1ModelInformationThresholdsAllGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return ModelPointThreshlodApiFp(this.configuration)
      .apiV1ModelInformationThresholdsAllGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
