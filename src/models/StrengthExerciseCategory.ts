/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const StrengthExerciseCategory = {
    LowerBody: 'lowerBody',
    UpperBody: 'upperBody',
    Core: 'core',
    Explosive: 'explosive',
    Complex: 'complex'
} as const;
export type StrengthExerciseCategory = typeof StrengthExerciseCategory[keyof typeof StrengthExerciseCategory];


export function StrengthExerciseCategoryFromJSON(json: any): StrengthExerciseCategory {
    return StrengthExerciseCategoryFromJSONTyped(json, false);
}

export function StrengthExerciseCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseCategory {
    return json as StrengthExerciseCategory;
}

export function StrengthExerciseCategoryToJSON(value?: StrengthExerciseCategory | null): any {
    return value as any;
}

