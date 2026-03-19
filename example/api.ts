import { WDScenarioApi } from '@dhicn/domain-paas-sdk-ts/compute-service'
import * as ScenarioApi from '@dhicn/domain-paas-sdk-ts/scenario-service'
import * as ModelDriverApi from '@dhicn/domain-paas-sdk-ts/model-driver-service'
import { HistoricalDataSearchApi, TelemetryApi } from '@dhicn/domain-paas-sdk-ts/iot-service'
import { isBoolean, isString } from 'lodash'
import { UseMessage } from 'dhi-dss-mf-layout'
import { useUserStore } from '../store/User'
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { UrbanWdResultAnalysisApi } from '@dhicn/domain-paas-sdk-ts/result-service'
import {
  AccidentApi,
  AlarmLogApi,
  OnlineApi,
  PipeRiskApi,
  AccuracyConfigApi,
  IndicatorConfigApi,
  AlarmConfigApi,
  ScheduleApi,
} from '@dhicn/domain-paas-sdk-ts/wd-domain'
import { LegendApi } from '@dhicn/domain-paas-sdk-ts/model-configuration'
import { GisQueryApi, PathPlanningApi } from '@dhicn/domain-paas-sdk-ts/gis-service'
import { ModelPointApi } from '@dhicn/domain-paas-sdk-ts/digital-twin-service'
import { FileServerApi } from '@dhicn/domain-paas-sdk-ts/file-service'

const { useErrorMessage } = UseMessage

export const API = 'API'

export const baseUrl = '/ningbo-wd'
export const organizationUrl = `${baseUrl}/user-manager`
export const connectBaseUrl = `${baseUrl}/user-manager/connect/userinfo` // 获得用户信息
export const iotBaseUrl = `${baseUrl}/iot-service`
export const computeUrl = `${baseUrl}/global-scenario-compute-service`
export const scenarioBaseUrl = `${baseUrl}/global-scenario-manager-service`
export const modelDriverBaseUrl = `${baseUrl}/global-model-driver-service`
export const globalResultServiceBaseUrl = `${baseUrl}/global-result-service`
export const domainWDBaseUrl = `${baseUrl}/wd-domain-service`
export const globalModelConfigurationServiceBaseUrl = `${baseUrl}/global-model-configuration-service`
export const gisServiceUrl = `${baseUrl}/gis-service`
export const digitalTwinUrl = `${baseUrl}/digital-twin-service`
export const fileUrl = `${baseUrl}/global-file-service`

export class ApiHelperExtend extends ApiHelper {
  scenario: {
    manager: ScenarioApi.ScenarioManagerApi
    library: ScenarioApi.LibraryApi
  }
  modelDriver: {
    modelRunApi: ModelDriverApi.ModelRunApi
  }
  global_result_service: {
    urban_wd: UrbanWdResultAnalysisApi
  }
  global_model_configuration_service: {
    legend: LegendApi
  }

  gis: GisQueryApi
  path: PathPlanningApi
  online: OnlineApi
  alarmLog: AlarmLogApi
  accident: AccidentApi
  pipeRisk: PipeRiskApi
  modelPoint: ModelPointApi
  dataSearch: HistoricalDataSearchApi
  wdScenarioCompute: WDScenarioApi
  fileService: FileServerApi
  ts: TelemetryApi
  accuracyConfig: AccuracyConfigApi
  indicatorConfig: IndicatorConfigApi
  alarmConfigApi: AlarmConfigApi
  scheduling: ScheduleApi
  constructor() {
    super()
    this.axiosInstance.defaults.headers.common.showErrMsg = true // 默认每个请求出错的时候都有错误提示信息，如果不需要错误提示信息，可以在相关的请求中自行设置showErrMsg为false
    // this.axiosInstance.defaults.headers.common['Accept-Language'] = getHttpLang() // 接口请求语言
    this.axiosInstance.interceptors.response.use(
      async (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        const { status, data, message } = response.data
        if (isBoolean(status)) {
          if (status) {
            if (data === undefined) {
              response.data = status
            } else {
              response.data = data
            }
            return response
          } else {
            const { headers } = response.config
            const { showErrMsg } = headers ?? {}
            console.log('showErrMsg:', showErrMsg)
            if (showErrMsg as boolean) {
              useErrorMessage(message)
            } else {
              console.error('需要自行处理错误信息 Request Error :>> ', response, message)
            }
            return await Promise.reject(response.data)
          }
        } else {
          return response
        }
      },
      (error) => {
        console.error('RequestError :>> ', error)
        const { code } = error.response?.data
        if (error.response?.status === 403 || code === 'gateway_forbidden_authorization') {
          console.log('403 error :>> ', error.response)
          const userStore = useUserStore()
          userStore.forbiddenAuthLogout().catch((e) => {
            console.error('403 log out error :>> ', e)
          })
        } else {
          if (error.response !== undefined) {
            const { message } = error.response.data as any
            if (isString(message)) {
              useErrorMessage(message)
            } else {
              useErrorMessage(error.message)
            }
          } else {
            useErrorMessage(error.message)
          }
        }
      },
    )
    this.scenario = {
      manager: new ScenarioApi.ScenarioManagerApi(scenarioBaseUrl, this.axiosInstance),
      library: new ScenarioApi.LibraryApi(scenarioBaseUrl, this.axiosInstance),
    }
    this.modelDriver = {
      modelRunApi: new ModelDriverApi.ModelRunApi(modelDriverBaseUrl, this.axiosInstance),
    }
    this.global_result_service = {
      urban_wd: new UrbanWdResultAnalysisApi(globalResultServiceBaseUrl, this.axiosInstance),
    }
    this.global_model_configuration_service = {
      legend: new LegendApi(globalModelConfigurationServiceBaseUrl, this.axiosInstance),
    }
    this.gis = new GisQueryApi(gisServiceUrl, this.axiosInstance)
    this.path = new PathPlanningApi(gisServiceUrl, this.axiosInstance)

    this.online = new OnlineApi(domainWDBaseUrl, this.axiosInstance)
    this.alarmLog = new AlarmLogApi(domainWDBaseUrl, this.axiosInstance)
    this.accident = new AccidentApi(domainWDBaseUrl, this.axiosInstance)
    this.pipeRisk = new PipeRiskApi(domainWDBaseUrl, this.axiosInstance)
    this.accuracyConfig = new AccuracyConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.indicatorConfig = new IndicatorConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.alarmConfigApi = new AlarmConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.scheduling = new ScheduleApi(domainWDBaseUrl, this.axiosInstance)

    this.modelPoint = new ModelPointApi(digitalTwinUrl, this.axiosInstance)
    this.dataSearch = new HistoricalDataSearchApi(iotBaseUrl, this.axiosInstance)
    this.ts = new TelemetryApi(iotBaseUrl, this.axiosInstance)
    this.wdScenarioCompute = new WDScenarioApi(computeUrl, this.axiosInstance)
    this.fileService = new FileServerApi(fileUrl, this.axiosInstance)
  }
}
