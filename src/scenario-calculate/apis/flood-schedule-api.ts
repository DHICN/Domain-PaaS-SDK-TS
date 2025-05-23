/* eslint-disable */
/**
 * 方案计算服务
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
/**
 * FloodScheduleApi - axios parameter creator
 * @export
 */
export const FloodScheduleApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 关键词：      降雨量、自动预报配置、任务调度                使用场景：      此接口定时执行，根据当前自动预报配置和降雨数据，判断是否要启动滚动预报，或者停止滚动预报。如果当前自动预报处于触发模式，则需要检查累计降雨量是否达到启动预报的阈值，如果达到了则需要将自动预报配置更新为滚动执行的模式，并启动预报；如果当前自动预报处于滚动执行的模式，则需要检查累计降雨量是否达到停止预报的阈值，如果达到了则需要将自动预报配置更新为触发模式，并删除滚动预报的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario）。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 3、检查降雨量，确定是否需要开始滚动执行，是否需要停止滚动
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [tenantId] 租户ID
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleCheckRainfallGet: async (
      jobGroup?: string,
      tenantId?: string,
      rainType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/scenario-compute/flood/schedule/check-rainfall`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (jobGroup !== undefined) {
        localVarQueryParameter['jobGroup'] = jobGroup
      }

      if (tenantId !== undefined) {
        localVarQueryParameter['tenantId'] = tenantId
      }

      if (rainType !== undefined) {
        localVarQueryParameter['rainType'] = rainType
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
     * 关键词：      自动预报、创建自动预报方案、计算        使用场景；      此接口用于创建内涝的自动预报方案，并发送计算请求。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 4、创建新的滚动预报方案并计算
     * @param {string} [tenantId] 租户ID
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleCreateAndRunScenarioGet: async (
      tenantId?: string,
      projectName?: string,
      initialConditionType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/scenario-compute/flood/schedule/create-and-run-scenario`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantId !== undefined) {
        localVarQueryParameter['tenantId'] = tenantId
      }

      if (projectName !== undefined) {
        localVarQueryParameter['projectName'] = projectName
      }

      if (initialConditionType !== undefined) {
        localVarQueryParameter['initialConditionType'] = initialConditionType
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
     * 关键词：      自动预报、任务调度        使用场景：      在项目初始化的过程中，可以通过调用此接口，来添加一个初始的任务调度（也可手动添加此任务调度），该任务调度会定时每5分钟一次调用/api/v1/scenario-compute/flood/schedule/scan-auto-forecast-config接口，用来确认最新的滚动预报配置，并调整部分其他的任务调度。
     * @summary 1、注册调度服务，该任务调度每五分钟执行一次，判断自动预报配置
     * @param {string} [customId] 客户ID
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [jobName] 所创建任务的任务名
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleRegisterGet: async (
      customId?: string,
      jobGroup?: string,
      jobName?: string,
      rainType?: string,
      projectName?: string,
      initialConditionType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/scenario-compute/flood/schedule/register`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (customId !== undefined) {
        localVarQueryParameter['customId'] = customId
      }

      if (jobGroup !== undefined) {
        localVarQueryParameter['jobGroup'] = jobGroup
      }

      if (jobName !== undefined) {
        localVarQueryParameter['jobName'] = jobName
      }

      if (rainType !== undefined) {
        localVarQueryParameter['rainType'] = rainType
      }

      if (projectName !== undefined) {
        localVarQueryParameter['projectName'] = projectName
      }

      if (initialConditionType !== undefined) {
        localVarQueryParameter['initialConditionType'] = initialConditionType
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
     * 关键词：      自动预报、任务调度、自动预报配置        使用场景：      此接口会定时查询项目下的自动预报配置信息，并根据配置做相应的调整。如果自动预报配置采用的是触发式的模式，则需要创建或者更新检查降雨数据的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/check-rainfall），调整执行频率为10分钟，即每10分钟检查一次降雨数据，判断是否达到启动自动预报的阈值；如果自动预报配置处于滚动执行的模式，则需要创建或者更新滚动计算的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario），执行频率由配置决定，并更新检查降雨数据的任务调度的执行频率为30分钟一次，即每30分钟检查一次降雨数据，判断是否达到停止滚动模式的阈值。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 2、扫描自动预报配置，更新任务调度
     * @param {string} [customId] 客户ID
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleScanAutoForecastConfigGet: async (
      customId?: string,
      jobGroup?: string,
      rainType?: string,
      projectName?: string,
      initialConditionType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/scenario-compute/flood/schedule/scan-auto-forecast-config`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (customId !== undefined) {
        localVarQueryParameter['customId'] = customId
      }

      if (jobGroup !== undefined) {
        localVarQueryParameter['jobGroup'] = jobGroup
      }

      if (rainType !== undefined) {
        localVarQueryParameter['rainType'] = rainType
      }

      if (projectName !== undefined) {
        localVarQueryParameter['projectName'] = projectName
      }

      if (initialConditionType !== undefined) {
        localVarQueryParameter['initialConditionType'] = initialConditionType
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
 * FloodScheduleApi - functional programming interface
 * @export
 */
export const FloodScheduleApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = FloodScheduleApiAxiosParamCreator(configuration)
  return {
    /**
     * 关键词：      降雨量、自动预报配置、任务调度                使用场景：      此接口定时执行，根据当前自动预报配置和降雨数据，判断是否要启动滚动预报，或者停止滚动预报。如果当前自动预报处于触发模式，则需要检查累计降雨量是否达到启动预报的阈值，如果达到了则需要将自动预报配置更新为滚动执行的模式，并启动预报；如果当前自动预报处于滚动执行的模式，则需要检查累计降雨量是否达到停止预报的阈值，如果达到了则需要将自动预报配置更新为触发模式，并删除滚动预报的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario）。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 3、检查降雨量，确定是否需要开始滚动执行，是否需要停止滚动
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [tenantId] 租户ID
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ScenarioComputeFloodScheduleCheckRainfallGet(
      jobGroup?: string,
      tenantId?: string,
      rainType?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ScenarioComputeFloodScheduleCheckRainfallGet(
          jobGroup,
          tenantId,
          rainType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 关键词：      自动预报、创建自动预报方案、计算        使用场景；      此接口用于创建内涝的自动预报方案，并发送计算请求。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 4、创建新的滚动预报方案并计算
     * @param {string} [tenantId] 租户ID
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ScenarioComputeFloodScheduleCreateAndRunScenarioGet(
      tenantId?: string,
      projectName?: string,
      initialConditionType?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ScenarioComputeFloodScheduleCreateAndRunScenarioGet(
          tenantId,
          projectName,
          initialConditionType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 关键词：      自动预报、任务调度        使用场景：      在项目初始化的过程中，可以通过调用此接口，来添加一个初始的任务调度（也可手动添加此任务调度），该任务调度会定时每5分钟一次调用/api/v1/scenario-compute/flood/schedule/scan-auto-forecast-config接口，用来确认最新的滚动预报配置，并调整部分其他的任务调度。
     * @summary 1、注册调度服务，该任务调度每五分钟执行一次，判断自动预报配置
     * @param {string} [customId] 客户ID
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [jobName] 所创建任务的任务名
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ScenarioComputeFloodScheduleRegisterGet(
      customId?: string,
      jobGroup?: string,
      jobName?: string,
      rainType?: string,
      projectName?: string,
      initialConditionType?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ScenarioComputeFloodScheduleRegisterGet(
          customId,
          jobGroup,
          jobName,
          rainType,
          projectName,
          initialConditionType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 关键词：      自动预报、任务调度、自动预报配置        使用场景：      此接口会定时查询项目下的自动预报配置信息，并根据配置做相应的调整。如果自动预报配置采用的是触发式的模式，则需要创建或者更新检查降雨数据的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/check-rainfall），调整执行频率为10分钟，即每10分钟检查一次降雨数据，判断是否达到启动自动预报的阈值；如果自动预报配置处于滚动执行的模式，则需要创建或者更新滚动计算的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario），执行频率由配置决定，并更新检查降雨数据的任务调度的执行频率为30分钟一次，即每30分钟检查一次降雨数据，判断是否达到停止滚动模式的阈值。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 2、扫描自动预报配置，更新任务调度
     * @param {string} [customId] 客户ID
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ScenarioComputeFloodScheduleScanAutoForecastConfigGet(
      customId?: string,
      jobGroup?: string,
      rainType?: string,
      projectName?: string,
      initialConditionType?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ScenarioComputeFloodScheduleScanAutoForecastConfigGet(
          customId,
          jobGroup,
          rainType,
          projectName,
          initialConditionType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * FloodScheduleApi - factory interface
 * @export
 */
export const FloodScheduleApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = FloodScheduleApiFp(configuration)
  return {
    /**
     * 关键词：      降雨量、自动预报配置、任务调度                使用场景：      此接口定时执行，根据当前自动预报配置和降雨数据，判断是否要启动滚动预报，或者停止滚动预报。如果当前自动预报处于触发模式，则需要检查累计降雨量是否达到启动预报的阈值，如果达到了则需要将自动预报配置更新为滚动执行的模式，并启动预报；如果当前自动预报处于滚动执行的模式，则需要检查累计降雨量是否达到停止预报的阈值，如果达到了则需要将自动预报配置更新为触发模式，并删除滚动预报的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario）。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 3、检查降雨量，确定是否需要开始滚动执行，是否需要停止滚动
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [tenantId] 租户ID
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleCheckRainfallGet(
      jobGroup?: string,
      tenantId?: string,
      rainType?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ScenarioComputeFloodScheduleCheckRainfallGet(jobGroup, tenantId, rainType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 关键词：      自动预报、创建自动预报方案、计算        使用场景；      此接口用于创建内涝的自动预报方案，并发送计算请求。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 4、创建新的滚动预报方案并计算
     * @param {string} [tenantId] 租户ID
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleCreateAndRunScenarioGet(
      tenantId?: string,
      projectName?: string,
      initialConditionType?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ScenarioComputeFloodScheduleCreateAndRunScenarioGet(
          tenantId,
          projectName,
          initialConditionType,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * 关键词：      自动预报、任务调度        使用场景：      在项目初始化的过程中，可以通过调用此接口，来添加一个初始的任务调度（也可手动添加此任务调度），该任务调度会定时每5分钟一次调用/api/v1/scenario-compute/flood/schedule/scan-auto-forecast-config接口，用来确认最新的滚动预报配置，并调整部分其他的任务调度。
     * @summary 1、注册调度服务，该任务调度每五分钟执行一次，判断自动预报配置
     * @param {string} [customId] 客户ID
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [jobName] 所创建任务的任务名
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleRegisterGet(
      customId?: string,
      jobGroup?: string,
      jobName?: string,
      rainType?: string,
      projectName?: string,
      initialConditionType?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ScenarioComputeFloodScheduleRegisterGet(
          customId,
          jobGroup,
          jobName,
          rainType,
          projectName,
          initialConditionType,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * 关键词：      自动预报、任务调度、自动预报配置        使用场景：      此接口会定时查询项目下的自动预报配置信息，并根据配置做相应的调整。如果自动预报配置采用的是触发式的模式，则需要创建或者更新检查降雨数据的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/check-rainfall），调整执行频率为10分钟，即每10分钟检查一次降雨数据，判断是否达到启动自动预报的阈值；如果自动预报配置处于滚动执行的模式，则需要创建或者更新滚动计算的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario），执行频率由配置决定，并更新检查降雨数据的任务调度的执行频率为30分钟一次，即每30分钟检查一次降雨数据，判断是否达到停止滚动模式的阈值。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
     * @summary 2、扫描自动预报配置，更新任务调度
     * @param {string} [customId] 客户ID
     * @param {string} [jobGroup] 所创建任务的任务组名
     * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
     * @param {string} [projectName] 调用计算时需要的项目名称
     * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ScenarioComputeFloodScheduleScanAutoForecastConfigGet(
      customId?: string,
      jobGroup?: string,
      rainType?: string,
      projectName?: string,
      initialConditionType?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1ScenarioComputeFloodScheduleScanAutoForecastConfigGet(
          customId,
          jobGroup,
          rainType,
          projectName,
          initialConditionType,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FloodScheduleApi - object-oriented interface
 * @export
 * @class FloodScheduleApi
 * @extends {BaseAPI}
 */
export class FloodScheduleApi extends BaseAPI {
  /**
   * 关键词：      降雨量、自动预报配置、任务调度                使用场景：      此接口定时执行，根据当前自动预报配置和降雨数据，判断是否要启动滚动预报，或者停止滚动预报。如果当前自动预报处于触发模式，则需要检查累计降雨量是否达到启动预报的阈值，如果达到了则需要将自动预报配置更新为滚动执行的模式，并启动预报；如果当前自动预报处于滚动执行的模式，则需要检查累计降雨量是否达到停止预报的阈值，如果达到了则需要将自动预报配置更新为触发模式，并删除滚动预报的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario）。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
   * @summary 3、检查降雨量，确定是否需要开始滚动执行，是否需要停止滚动
   * @param {string} [jobGroup] 所创建任务的任务组名
   * @param {string} [tenantId] 租户ID
   * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodScheduleApi
   */
  public apiV1ScenarioComputeFloodScheduleCheckRainfallGet(
    jobGroup?: string,
    tenantId?: string,
    rainType?: string,
    options?: AxiosRequestConfig,
  ) {
    return FloodScheduleApiFp(this.configuration)
      .apiV1ScenarioComputeFloodScheduleCheckRainfallGet(jobGroup, tenantId, rainType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 关键词：      自动预报、创建自动预报方案、计算        使用场景；      此接口用于创建内涝的自动预报方案，并发送计算请求。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
   * @summary 4、创建新的滚动预报方案并计算
   * @param {string} [tenantId] 租户ID
   * @param {string} [projectName] 调用计算时需要的项目名称
   * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodScheduleApi
   */
  public apiV1ScenarioComputeFloodScheduleCreateAndRunScenarioGet(
    tenantId?: string,
    projectName?: string,
    initialConditionType?: string,
    options?: AxiosRequestConfig,
  ) {
    return FloodScheduleApiFp(this.configuration)
      .apiV1ScenarioComputeFloodScheduleCreateAndRunScenarioGet(
        tenantId,
        projectName,
        initialConditionType,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 关键词：      自动预报、任务调度        使用场景：      在项目初始化的过程中，可以通过调用此接口，来添加一个初始的任务调度（也可手动添加此任务调度），该任务调度会定时每5分钟一次调用/api/v1/scenario-compute/flood/schedule/scan-auto-forecast-config接口，用来确认最新的滚动预报配置，并调整部分其他的任务调度。
   * @summary 1、注册调度服务，该任务调度每五分钟执行一次，判断自动预报配置
   * @param {string} [customId] 客户ID
   * @param {string} [jobGroup] 所创建任务的任务组名
   * @param {string} [jobName] 所创建任务的任务名
   * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
   * @param {string} [projectName] 调用计算时需要的项目名称
   * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodScheduleApi
   */
  public apiV1ScenarioComputeFloodScheduleRegisterGet(
    customId?: string,
    jobGroup?: string,
    jobName?: string,
    rainType?: string,
    projectName?: string,
    initialConditionType?: string,
    options?: AxiosRequestConfig,
  ) {
    return FloodScheduleApiFp(this.configuration)
      .apiV1ScenarioComputeFloodScheduleRegisterGet(
        customId,
        jobGroup,
        jobName,
        rainType,
        projectName,
        initialConditionType,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 关键词：      自动预报、任务调度、自动预报配置        使用场景：      此接口会定时查询项目下的自动预报配置信息，并根据配置做相应的调整。如果自动预报配置采用的是触发式的模式，则需要创建或者更新检查降雨数据的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/check-rainfall），调整执行频率为10分钟，即每10分钟检查一次降雨数据，判断是否达到启动自动预报的阈值；如果自动预报配置处于滚动执行的模式，则需要创建或者更新滚动计算的任务调度（对应接口/api/v1/scenario-compute/flood/schedule/create-and-run-scenario），执行频率由配置决定，并更新检查降雨数据的任务调度的执行频率为30分钟一次，即每30分钟检查一次降雨数据，判断是否达到停止滚动模式的阈值。      需要注意的是，该接口在任务调度中使用，不需要用户直接调用。
   * @summary 2、扫描自动预报配置，更新任务调度
   * @param {string} [customId] 客户ID
   * @param {string} [jobGroup] 所创建任务的任务组名
   * @param {string} [rainType] 判断所需的降雨数据类型，Rainfall或者Forecast Rainfall，前者代表实测降雨，后者代表预报降雨
   * @param {string} [projectName] 调用计算时需要的项目名称
   * @param {string} [initialConditionType] 初始条件类型，枚举，目前已存在0-2种定义，包括0：不设置初始场；1：热启动初始场；2：局部值初始场
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FloodScheduleApi
   */
  public apiV1ScenarioComputeFloodScheduleScanAutoForecastConfigGet(
    customId?: string,
    jobGroup?: string,
    rainType?: string,
    projectName?: string,
    initialConditionType?: string,
    options?: AxiosRequestConfig,
  ) {
    return FloodScheduleApiFp(this.configuration)
      .apiV1ScenarioComputeFloodScheduleScanAutoForecastConfigGet(
        customId,
        jobGroup,
        rainType,
        projectName,
        initialConditionType,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
