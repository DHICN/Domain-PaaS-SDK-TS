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

/**
 *
 * @export
 * @interface AddUserInput
 */
export interface AddUserInput {
  /**
   * 用户名 user name
   * @type {string}
   * @memberof AddUserInput
   */
  userName: string
  /**
   * 姓氏 surname
   * @type {string}
   * @memberof AddUserInput
   */
  surname?: string | null
  /**
   * 角色ID列表 role ids
   * @type {Array<string>}
   * @memberof AddUserInput
   */
  roles?: Array<string> | null
  /**
   * 手机号码 phone number
   * @type {string}
   * @memberof AddUserInput
   */
  phoneNumber?: string | null
  /**
   * 所属部门 working department
   * @type {string}
   * @memberof AddUserInput
   */
  department?: string | null
  /**
   * 0-Normal(normal user) 1-Frozen(frozen user) 2-Cancelled(cancelled user)
   * @type {number}
   * @memberof AddUserInput
   */
  status: AddUserInputStatusEnum
  /**
   * 是否试用用户 if it is a trial user
   * @type {boolean}
   * @memberof AddUserInput
   */
  isTrialUser?: boolean
  /**
   * 试用多少天 trial days
   * @type {number}
   * @memberof AddUserInput
   */
  trialDays?: number
  /**
   * 邮件 email address
   * @type {string}
   * @memberof AddUserInput
   */
  email?: string | null
}

export const AddUserInputStatusEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
} as const

export type AddUserInputStatusEnum =
  (typeof AddUserInputStatusEnum)[keyof typeof AddUserInputStatusEnum]