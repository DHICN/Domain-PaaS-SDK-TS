import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'

export type AxiosInstanceType = AxiosInstance
export type AxiosErrorType = AxiosError
export type AxiosResponseType = AxiosResponse

export const initialAxios = (baseURL = '', timeout = 500000) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout,
  })
  return axiosInstance
}
