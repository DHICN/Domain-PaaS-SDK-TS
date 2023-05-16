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
 * @interface AddSuperUserInput
 */
export interface AddSuperUserInput {
  /**
   * 超级用户名 super user name
   * @type {string}
   * @memberof AddSuperUserInput
   */
  userName: string
  /**
   * 姓氏 surname
   * @type {string}
   * @memberof AddSuperUserInput
   */
  surname?: string | null
  /**
   * 在哪些租户下允许登录 tenant ids for which the super user can login
   * @type {Array<string>}
   * @memberof AddSuperUserInput
   */
  tenantIds: Array<string>
  /**
   * 0-Normal(normal user) 1-Frozen(frozen user) 2-Cancelled(cancelled user)
   * @type {number}
   * @memberof AddSuperUserInput
   */
  status: AddSuperUserInputStatusEnum
}

export const AddSuperUserInputStatusEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
} as const

export type AddSuperUserInputStatusEnum =
  (typeof AddSuperUserInputStatusEnum)[keyof typeof AddSuperUserInputStatusEnum]
