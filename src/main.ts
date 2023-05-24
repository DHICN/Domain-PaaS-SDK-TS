import { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'

export type AxiosInstanceType = AxiosInstance
export type AxiosErrorType = AxiosError
export type AxiosResponseType = AxiosResponse

export * as IdentityServiceApi from './identity-service/index'
export * as ScenarioServiceApi from './scenario-service/index'
export * as ModelConfigurationApi from './model-configuration/index'
export * as ResultServiceApi from './result-service/index'
export * as IoTServiceApi from './iot-service/index'
export * as WDDomainApi from './wd-domain-service/index'
export * as WWTPDomainApi from './wwtp-domain-main-bus-service/index'
export * as WWTPInfrastructureApi from './wwtp-domain-infrastructure-service/index'
export * as Helper from './sdk-helper'
