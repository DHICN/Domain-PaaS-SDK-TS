/* eslint-disable */
/**
 * model-information-service
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
import { CreateManualScenarioInput } from '../models'
// @ts-ignore
import { CreateSceneScenarioInput } from '../models'
// @ts-ignore
import { CreateScheduleScenarioInput } from '../models'
// @ts-ignore
import { DeleteScenarioInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { SaveBatchScenarioToExperienceInput } from '../models'
// @ts-ignore
import { SaveScenarioToExperienceInput } from '../models'
// @ts-ignore
import { ScenarioInfo } from '../models'
/**
 * ScenarioOperationApi - axios parameter creator
 * @export
 */
export const ScenarioOperationApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary batch save scenarios to experience library
     * @param {SaveBatchScenarioToExperienceInput} [saveBatchScenarioToExperienceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioBatchSaveToExperiencePost: async (
      saveBatchScenarioToExperienceInput?: SaveBatchScenarioToExperienceInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/batch-save-to-experience`
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
        saveBatchScenarioToExperienceInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 根据方案ID删除方案，同时删除所有方案相关的数据 Detele scenario by id, as well as all the scenario related data
     * @summary 根据方案ID删除方案 Detele scenario by id
     * @param {DeleteScenarioInput} [deleteScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioDeleteScenarioPost: async (
      deleteScenarioInput?: DeleteScenarioInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/delete-scenario`
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
        deleteScenarioInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 基于模板方案创建人工预报方案 Create a manual forecast scenario based on template scenario
     * @summary 创建人工预报方案 Create Scenario (Manual Forecast)
     * @param {CreateManualScenarioInput} [createManualScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioManualScenarioCreatePost: async (
      createManualScenarioInput?: CreateManualScenarioInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/manual-scenario/create`
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
        createManualScenarioInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 基于预报方案创建调度方案 Create a scenario of regulation plan based on forecast scenario
     * @summary 创建调度方案 Create Scenario (Regulation Plan)
     * @param {CreateScheduleScenarioInput} [createScheduleScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioRegulationPlanCreatePost: async (
      createScheduleScenarioInput?: CreateScheduleScenarioInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/regulation-plan/create`
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
        createScheduleScenarioInput,
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
     * @summary Save scenario to experience library
     * @param {SaveScenarioToExperienceInput} [saveScenarioToExperienceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioSaveToExperiencePost: async (
      saveScenarioToExperienceInput?: SaveScenarioToExperienceInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/save-to-experience`
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
        saveScenarioToExperienceInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 基于模板方案创建情景模拟方案 Create a scenario of scenario plan based on template scenario
     * @summary 创建情景模拟方案 Create Scenario (Scenario Plan)
     * @param {CreateSceneScenarioInput} [createSceneScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioScenarioPlanCreatePost: async (
      createSceneScenarioInput?: CreateSceneScenarioInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/scenario-plan/create`
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
        createSceneScenarioInput,
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
     * @summary /api/v1/model-information/scenario/StartManualScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioStartManualScenarioComputePost: async (
      body?: object,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/StartManualScenarioCompute`
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
        body,
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
     * @summary /api/v1/model-information/scenario/StartSceneScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioStartSceneScenarioComputePost: async (
      body?: object,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/StartSceneScenarioCompute`
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
        body,
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
     * @summary /api/v1/model-information/scenario/StartScheduleScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioStartScheduleScenarioComputePost: async (
      body?: object,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-information/scenario/StartScheduleScenarioCompute`
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
        body,
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
 * ScenarioOperationApi - functional programming interface
 * @export
 */
export const ScenarioOperationApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ScenarioOperationApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary batch save scenarios to experience library
     * @param {SaveBatchScenarioToExperienceInput} [saveBatchScenarioToExperienceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioBatchSaveToExperiencePost(
      saveBatchScenarioToExperienceInput?: SaveBatchScenarioToExperienceInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ScenarioInfo>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioBatchSaveToExperiencePost(
          saveBatchScenarioToExperienceInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据方案ID删除方案，同时删除所有方案相关的数据 Detele scenario by id, as well as all the scenario related data
     * @summary 根据方案ID删除方案 Detele scenario by id
     * @param {DeleteScenarioInput} [deleteScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioDeleteScenarioPost(
      deleteScenarioInput?: DeleteScenarioInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioDeleteScenarioPost(
          deleteScenarioInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 基于模板方案创建人工预报方案 Create a manual forecast scenario based on template scenario
     * @summary 创建人工预报方案 Create Scenario (Manual Forecast)
     * @param {CreateManualScenarioInput} [createManualScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioManualScenarioCreatePost(
      createManualScenarioInput?: CreateManualScenarioInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScenarioInfo>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioManualScenarioCreatePost(
          createManualScenarioInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 基于预报方案创建调度方案 Create a scenario of regulation plan based on forecast scenario
     * @summary 创建调度方案 Create Scenario (Regulation Plan)
     * @param {CreateScheduleScenarioInput} [createScheduleScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioRegulationPlanCreatePost(
      createScheduleScenarioInput?: CreateScheduleScenarioInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScenarioInfo>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioRegulationPlanCreatePost(
          createScheduleScenarioInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary Save scenario to experience library
     * @param {SaveScenarioToExperienceInput} [saveScenarioToExperienceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioSaveToExperiencePost(
      saveScenarioToExperienceInput?: SaveScenarioToExperienceInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScenarioInfo>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioSaveToExperiencePost(
          saveScenarioToExperienceInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 基于模板方案创建情景模拟方案 Create a scenario of scenario plan based on template scenario
     * @summary 创建情景模拟方案 Create Scenario (Scenario Plan)
     * @param {CreateSceneScenarioInput} [createSceneScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioScenarioPlanCreatePost(
      createSceneScenarioInput?: CreateSceneScenarioInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScenarioInfo>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioScenarioPlanCreatePost(
          createSceneScenarioInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary /api/v1/model-information/scenario/StartManualScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioStartManualScenarioComputePost(
      body?: object,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioStartManualScenarioComputePost(
          body,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary /api/v1/model-information/scenario/StartSceneScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioStartSceneScenarioComputePost(
      body?: object,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioStartSceneScenarioComputePost(
          body,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary /api/v1/model-information/scenario/StartScheduleScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelInformationScenarioStartScheduleScenarioComputePost(
      body?: object,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelInformationScenarioStartScheduleScenarioComputePost(
          body,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ScenarioOperationApi - factory interface
 * @export
 */
export const ScenarioOperationApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ScenarioOperationApiFp(configuration)
  return {
    /**
     *
     * @summary batch save scenarios to experience library
     * @param {SaveBatchScenarioToExperienceInput} [saveBatchScenarioToExperienceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioBatchSaveToExperiencePost(
      saveBatchScenarioToExperienceInput?: SaveBatchScenarioToExperienceInput,
      options?: any,
    ): AxiosPromise<Array<ScenarioInfo>> {
      return localVarFp
        .apiV1ModelInformationScenarioBatchSaveToExperiencePost(
          saveBatchScenarioToExperienceInput,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据方案ID删除方案，同时删除所有方案相关的数据 Detele scenario by id, as well as all the scenario related data
     * @summary 根据方案ID删除方案 Detele scenario by id
     * @param {DeleteScenarioInput} [deleteScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioDeleteScenarioPost(
      deleteScenarioInput?: DeleteScenarioInput,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelInformationScenarioDeleteScenarioPost(deleteScenarioInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 基于模板方案创建人工预报方案 Create a manual forecast scenario based on template scenario
     * @summary 创建人工预报方案 Create Scenario (Manual Forecast)
     * @param {CreateManualScenarioInput} [createManualScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioManualScenarioCreatePost(
      createManualScenarioInput?: CreateManualScenarioInput,
      options?: any,
    ): AxiosPromise<ScenarioInfo> {
      return localVarFp
        .apiV1ModelInformationScenarioManualScenarioCreatePost(createManualScenarioInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 基于预报方案创建调度方案 Create a scenario of regulation plan based on forecast scenario
     * @summary 创建调度方案 Create Scenario (Regulation Plan)
     * @param {CreateScheduleScenarioInput} [createScheduleScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioRegulationPlanCreatePost(
      createScheduleScenarioInput?: CreateScheduleScenarioInput,
      options?: any,
    ): AxiosPromise<ScenarioInfo> {
      return localVarFp
        .apiV1ModelInformationScenarioRegulationPlanCreatePost(createScheduleScenarioInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Save scenario to experience library
     * @param {SaveScenarioToExperienceInput} [saveScenarioToExperienceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioSaveToExperiencePost(
      saveScenarioToExperienceInput?: SaveScenarioToExperienceInput,
      options?: any,
    ): AxiosPromise<ScenarioInfo> {
      return localVarFp
        .apiV1ModelInformationScenarioSaveToExperiencePost(saveScenarioToExperienceInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 基于模板方案创建情景模拟方案 Create a scenario of scenario plan based on template scenario
     * @summary 创建情景模拟方案 Create Scenario (Scenario Plan)
     * @param {CreateSceneScenarioInput} [createSceneScenarioInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioScenarioPlanCreatePost(
      createSceneScenarioInput?: CreateSceneScenarioInput,
      options?: any,
    ): AxiosPromise<ScenarioInfo> {
      return localVarFp
        .apiV1ModelInformationScenarioScenarioPlanCreatePost(createSceneScenarioInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary /api/v1/model-information/scenario/StartManualScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioStartManualScenarioComputePost(
      body?: object,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelInformationScenarioStartManualScenarioComputePost(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary /api/v1/model-information/scenario/StartSceneScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioStartSceneScenarioComputePost(
      body?: object,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelInformationScenarioStartSceneScenarioComputePost(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary /api/v1/model-information/scenario/StartScheduleScenarioCompute
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelInformationScenarioStartScheduleScenarioComputePost(
      body?: object,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelInformationScenarioStartScheduleScenarioComputePost(body, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ScenarioOperationApi - object-oriented interface
 * @export
 * @class ScenarioOperationApi
 * @extends {BaseAPI}
 */
export class ScenarioOperationApi extends BaseAPI {
  /**
   *
   * @summary batch save scenarios to experience library
   * @param {SaveBatchScenarioToExperienceInput} [saveBatchScenarioToExperienceInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioBatchSaveToExperiencePost(
    saveBatchScenarioToExperienceInput?: SaveBatchScenarioToExperienceInput,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioBatchSaveToExperiencePost(
        saveBatchScenarioToExperienceInput,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据方案ID删除方案，同时删除所有方案相关的数据 Detele scenario by id, as well as all the scenario related data
   * @summary 根据方案ID删除方案 Detele scenario by id
   * @param {DeleteScenarioInput} [deleteScenarioInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioDeleteScenarioPost(
    deleteScenarioInput?: DeleteScenarioInput,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioDeleteScenarioPost(deleteScenarioInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 基于模板方案创建人工预报方案 Create a manual forecast scenario based on template scenario
   * @summary 创建人工预报方案 Create Scenario (Manual Forecast)
   * @param {CreateManualScenarioInput} [createManualScenarioInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioManualScenarioCreatePost(
    createManualScenarioInput?: CreateManualScenarioInput,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioManualScenarioCreatePost(createManualScenarioInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 基于预报方案创建调度方案 Create a scenario of regulation plan based on forecast scenario
   * @summary 创建调度方案 Create Scenario (Regulation Plan)
   * @param {CreateScheduleScenarioInput} [createScheduleScenarioInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioRegulationPlanCreatePost(
    createScheduleScenarioInput?: CreateScheduleScenarioInput,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioRegulationPlanCreatePost(createScheduleScenarioInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Save scenario to experience library
   * @param {SaveScenarioToExperienceInput} [saveScenarioToExperienceInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioSaveToExperiencePost(
    saveScenarioToExperienceInput?: SaveScenarioToExperienceInput,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioSaveToExperiencePost(saveScenarioToExperienceInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 基于模板方案创建情景模拟方案 Create a scenario of scenario plan based on template scenario
   * @summary 创建情景模拟方案 Create Scenario (Scenario Plan)
   * @param {CreateSceneScenarioInput} [createSceneScenarioInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioScenarioPlanCreatePost(
    createSceneScenarioInput?: CreateSceneScenarioInput,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioScenarioPlanCreatePost(createSceneScenarioInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary /api/v1/model-information/scenario/StartManualScenarioCompute
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioStartManualScenarioComputePost(
    body?: object,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioStartManualScenarioComputePost(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary /api/v1/model-information/scenario/StartSceneScenarioCompute
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioStartSceneScenarioComputePost(
    body?: object,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioStartSceneScenarioComputePost(body, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary /api/v1/model-information/scenario/StartScheduleScenarioCompute
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioOperationApi
   */
  public apiV1ModelInformationScenarioStartScheduleScenarioComputePost(
    body?: object,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioOperationApiFp(this.configuration)
      .apiV1ModelInformationScenarioStartScheduleScenarioComputePost(body, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
