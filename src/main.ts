import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'

export type AxiosInstanceType = AxiosInstance
export type AxiosErrorType = AxiosError
export type AxiosResponseType = AxiosResponse

export * as IdentityServiceApi from './identity-service/index'
export * as ScenarioServiceApi from './scenario-service/index'

export const initialAxios = (baseURL = '', timeout = 500000) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout,
  })
  return axiosInstance
}
