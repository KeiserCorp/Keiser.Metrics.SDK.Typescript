/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.14
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
export const StrengthExerciseMovementDEP = {
    Isolation: 'isolation',
    Compound: 'compound'
} as const;
export type StrengthExerciseMovementDEP = typeof StrengthExerciseMovementDEP[keyof typeof StrengthExerciseMovementDEP];


export function StrengthExerciseMovementDEPFromJSON(json: any): StrengthExerciseMovementDEP {
    return StrengthExerciseMovementDEPFromJSONTyped(json, false);
}

export function StrengthExerciseMovementDEPFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseMovementDEP {
    return json as StrengthExerciseMovementDEP;
}

export function StrengthExerciseMovementDEPToJSON(value?: StrengthExerciseMovementDEP | null): any {
    return value as any;
}

