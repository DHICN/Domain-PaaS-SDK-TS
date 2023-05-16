/* eslint-disable */
/**
 * identity-service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { TokenModel } from './token-model'

/**
 *
 * @export
 * @interface AuthResultOutput
 */
export interface AuthResultOutput {
  /**
   *
   * @type {TokenModel}
   * @memberof AuthResultOutput
   */
  tokenInfo?: TokenModel
  /**
   *
   * @type {string}
   * @memberof AuthResultOutput
   */
  tenantId?: string | null
  /**
   *
   * @type {string}
   * @memberof AuthResultOutput
   */
  userId?: string | null
  /**
   * 0-Ready 1-Authorizing 2-Success 3-Error
   * @type {number}
   * @memberof AuthResultOutput
   */
  state?: AuthResultOutputStateEnum
  /**
   *
   * @type {string}
   * @memberof AuthResultOutput
   */
  errMsg?: string | null
}

export const AuthResultOutputStateEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
  3: 3 as number,
} as const

export type AuthResultOutputStateEnum =
  (typeof AuthResultOutputStateEnum)[keyof typeof AuthResultOutputStateEnum]
