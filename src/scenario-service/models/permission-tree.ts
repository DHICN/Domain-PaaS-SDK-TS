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
 * @interface PermissionTree
 */
export interface PermissionTree {
  /**
   * 菜单Id menu id
   * @type {string}
   * @memberof PermissionTree
   */
  id?: string
  /**
   * 菜单名称 menu label
   * @type {string}
   * @memberof PermissionTree
   */
  label?: string | null
  /**
   * 是否选中状态 if it is checked
   * @type {boolean}
   * @memberof PermissionTree
   */
  isCheck?: boolean
  /**
   * 路由
   * @type {string}
   * @memberof PermissionTree
   */
  menuRouter?: string | null
  /**
   * 正则
   * @type {string}
   * @memberof PermissionTree
   */
  regular?: string | null
  /**
   * 0-menu(menu)  1-button(button)
   * @type {number}
   * @memberof PermissionTree
   */
  menuType?: PermissionTreeMenuTypeEnum
  /**
   * 子菜单 sub menus
   * @type {Array<PermissionTree>}
   * @memberof PermissionTree
   */
  children?: Array<PermissionTree> | null
}

export const PermissionTreeMenuTypeEnum = {
  0: 0 as number,
  1: 1 as number,
} as const

export type PermissionTreeMenuTypeEnum =
  (typeof PermissionTreeMenuTypeEnum)[keyof typeof PermissionTreeMenuTypeEnum]
