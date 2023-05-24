/* eslint-disable */
/**
 * digital-twin-service
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
 * @interface AttributeConditionInput
 */
export interface AttributeConditionInput {
  /**
   * 模型中的ID列表，可为空 model muid list, can be empty
   * @type {string}
   * @memberof AttributeConditionInput
   */
  attributeKey: string
  /**
   * 属性值
   * @type {string}
   * @memberof AttributeConditionInput
   */
  attributeValue: string
  /**
   * 0-StrValue 1-BoolValue 2-LongValue 3-DblValue 4-JsonValue 5-DateTimeValue
   * @type {number}
   * @memberof AttributeConditionInput
   */
  dataType: AttributeConditionInputDataTypeEnum
}

export const AttributeConditionInputDataTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
  '5': 5 as number,
} as const

export type AttributeConditionInputDataTypeEnum =
  (typeof AttributeConditionInputDataTypeEnum)[keyof typeof AttributeConditionInputDataTypeEnum]
