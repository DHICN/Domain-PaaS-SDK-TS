import qs from 'qs'
import axios from 'axios'
import type {
  AxiosPromise as iAxiosPromise,
  AxiosInstance as iAxiosInstance,
  AxiosRequestConfig as iAxiosRequestConfig,
} from 'axios'
import { ConnectApi } from './identity-service'

export type AxiosPromise<T> = iAxiosPromise<T>
export type AxiosInstance = iAxiosInstance
export type AxiosRequestConfig = iAxiosRequestConfig
export const globalAxios: AxiosInstance = axios
export * from './scenario-service/base'
export * from './scenario-service/configuration'
export * from './scenario-service/common'

export class URL {
  public hash: string
  public host: string
  public hostname: string

  public href: string

  public origin: string

  public password: string
  public pathname: string

  public port: string

  public protocol: string

  public search: string
  public searchParams: Record<string, string>

  public username: string
  constructor(path: string, host: string) {
    this.hash = ''
    this.origin = host
    this.pathname = path
    this.href = host + path
    this.searchParams = {}
    this.search = ''
    this.username = ''
    this.password = ''
    const hostArr = host.split('//')
    if (hostArr.length === 2) {
      this.host = hostArr[1]
      this.hostname = hostArr[1]
      this.protocol = host[0]
      const urlArr = hostArr[1].split(':')
      if (urlArr.length === 2) {
        this.port = urlArr[1]
      } else {
        this.port = ''
      }
    } else {
      this.host = ''
      this.hostname = ''
      this.port = ''
      this.protocol = ''
    }
  }
}

export class FormData {
  private readonly parameters: Record<string, string | number>
  constructor() {
    this.parameters = {}
  }

  public append(key: string, value: string | number) {
    this.parameters[key] = value
  }

  public toForm() {
    return qs.stringify(this.parameters)
  }
}

/**
 * 微服务路由字段Map
 */
export const DomainServiceUrlMap = {
  identity: 'identity-service',
  scenario: 'global-scenario-manager-service',
  message: 'global-message-service',
  document: 'global-file-service',
  scenarioCompute: 'global-scenario-compute-service',
  modelDriver: 'global-model-driver-service',
  resultAnalysis: 'global-result-service',
  modelInformation: 'global-model-information-service',
  modelConfiguration: 'global-model-configuration-service',
  textSearch: 'global-full-text-search-service',
  deviceManagement: 'global-accident-manager-service',
  accident: 'accident-management-service',
  digitalTwin: 'digital-twin-service',
  iot: 'iot-service',
  wwtp: {
    mainBus: 'wwtp-paas-main-bus-service',
    infrastructure: 'wwtp-paas-main-bus-service',
  },
  wd: {
    domain: 'wd-domain-service',
  },
  dataCenter: 'global-data-center-service',
  plugin: 'global-plugin-service',
  fileServer: 'global-file-service',
}

/**
 * Api Request Helper
 */
export class ApiHelper {
  protected axiosInstance: AxiosInstance
  protected token: { token_type: string; access_token: string; refresh_token: string }
  connectApi: ConnectApi
  constructor(baseURL = '', timeout = 500000) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
    })
    this.connectApi = new ConnectApi(DomainServiceUrlMap.identity, this.axiosInstance)
    this.token = {
      token_type: '',
      access_token: '',
      refresh_token: '',
    }
  }

  get apiToken() {
    return this.token
  }

  async refreshToken(
    tenantid: string,
    clientId: string,
    clientSecret: string,
    grantType: string,
    refreshToken: string,
    scope?: string,
    redirectUri?: string,
    code?: string,
    codeVerifier?: string,
    username?: string,
    password?: string,
    acrValues?: string,
    deviceCode?: string,
  ) {
    try {
      const rep = await this.connectApi.connectTokenPost(
        tenantid,
        clientId,
        clientSecret,
        grantType,
        scope,
        redirectUri,
        code,
        codeVerifier,
        username,
        password,
        acrValues,
        refreshToken,
        deviceCode,
      )
      this.token = rep.data as { token_type: string; access_token: string; refresh_token: string }
      this.setAuth(this.token)
      return this.token
    } catch (error) {
      console.error('refreshToken :>> ', error)
      return Promise.reject(error)
    }
  }

  /**
   * 登录,需要认证信息
   */
  async logIn(
    tenantId: string,
    clientId?: string,
    grantType?: string,
    clientSecret?: string,
    username?: string,
    password?: string,
  ) {
    try {
      const rep = await this.connectApi.connectTokenPost(
        tenantId,
        clientId ?? '',
        clientSecret ?? '',
        grantType ?? '',
        undefined,
        undefined,
        undefined,
        undefined,
        username,
        password,
      )
      this.changeTenantId(tenantId)
      this.token = rep.data as { token_type: string; access_token: string; refresh_token: string }
      this.setAuth(this.token)
      return this.token
    } catch (error) {
      console.error('logIn :>> ', error)
      return Promise.reject(error)
    }
  }

  /**
   * 更改租户Id
   * @param tenantId 租户Id
   */
  changeTenantId(tenantId: string) {
    this.axiosInstance.defaults.headers.common.tenantId = tenantId
  }

  /**
   * 设置请求Token
   * @param token 认证信息
   */
  setAuth(token: { token_type: string; access_token: string }) {
    const headers: any = this.axiosInstance.defaults.headers
    headers.Authorization = `${token.token_type} ${token.access_token}`
    headers.common.Authorization = `${token.token_type} ${token.access_token}`
  }
}
