import qs from 'qs'
import axios from 'axios'
import { IdentityServiceApi } from './main'
import type { AxiosInstance } from 'axios'
import type { ConnectApi } from './identity-service'

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

export const initialAxios = (baseURL = '', timeout = 500000) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout,
  })
  return axiosInstance
}

export class ApiHelper {
  protected axiosInstance: AxiosInstance
  connectApi: ConnectApi
  constructor(baseURL = '', timeout = 500000) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
    })
    this.connectApi = new IdentityServiceApi.ConnectApi('identity-service', this.axiosInstance)
  }

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
        clientId,
        grantType,
        clientSecret,
        username,
        password,
      )
      this.changeTenantId(tenantId)
      this.setAuth(rep.data)
    } catch (error) {
      console.error('logIn :>> ', error)
    }
  }

  changeTenantId(tenantId: string) {
    this.axiosInstance.defaults.headers.common.tenantId = tenantId
  }

  setAuth(token: { token_type: string; access_token: string }) {
    const headers: any = this.axiosInstance.defaults.headers
    headers.Authorization = `${token.token_type} ${token.access_token}`
    headers.common.Authorization = `${token.token_type} ${token.access_token}`
  }
}
