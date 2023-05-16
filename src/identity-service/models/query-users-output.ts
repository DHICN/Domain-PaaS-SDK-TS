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
import { GuidStringKeyValue } from './guid-string-key-value'

/**
 *
 * @export
 * @interface QueryUsersOutput
 */
export interface QueryUsersOutput {
  /**
   * 用户ID user id
   * @type {string}
   * @memberof QueryUsersOutput
   */
  id?: string
  /**
   * 0-Normal(normal user) 1-Frozen(frozen user) 2-Cancelled(cancelled user)
   * @type {number}
   * @memberof QueryUsersOutput
   */
  status?: QueryUsersOutputStatusEnum
  /**
   * 用户名 user name
   * @type {string}
   * @memberof QueryUsersOutput
   */
  userName?: string | null
  /**
   * 姓氏 surname
   * @type {string}
   * @memberof QueryUsersOutput
   */
  surname?: string | null
  /**
   * 邮箱 email address
   * @type {string}
   * @memberof QueryUsersOutput
   */
  email?: string | null
  /**
   * 所属单位 working department
   * @type {string}
   * @memberof QueryUsersOutput
   */
  department?: string | null
  /**
   * 额外属性 extra properties
   * @type {string}
   * @memberof QueryUsersOutput
   */
  extraProperties?: string | null
  /**
   * 创建时间 create time
   * @type {string}
   * @memberof QueryUsersOutput
   */
  creationTime?: string
  /**
   * 租户ID tenant id
   * @type {string}
   * @memberof QueryUsersOutput
   */
  tenantId?: string | null
  /**
   * 用户角色 user roles
   * @type {Array<GuidStringKeyValue>}
   * @memberof QueryUsersOutput
   */
  userRoles?: Array<GuidStringKeyValue> | null
  /**
   * 是否试用用户 if it is a trial user
   * @type {boolean}
   * @memberof QueryUsersOutput
   */
  isTrialUser?: boolean
  /**
   * 试用截止日期 trial deadline
   * @type {string}
   * @memberof QueryUsersOutput
   */
  trialDeadline?: string | null
  /**
   * 电话号码 phonenumber
   * @type {string}
   * @memberof QueryUsersOutput
   */
  phoneNumber?: string | null
}

export const QueryUsersOutputStatusEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
} as const

export type QueryUsersOutputStatusEnum =
  (typeof QueryUsersOutputStatusEnum)[keyof typeof QueryUsersOutputStatusEnum]
