/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
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
export const StrengthExerciseMovement = {
    Unilateral: 'unilateral',
    Bilateral: 'bilateral'
} as const;
export type StrengthExerciseMovement = typeof StrengthExerciseMovement[keyof typeof StrengthExerciseMovement];


export function StrengthExerciseMovementFromJSON(json: any): StrengthExerciseMovement {
    return StrengthExerciseMovementFromJSONTyped(json, false);
}

export function StrengthExerciseMovementFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseMovement {
    return json as StrengthExerciseMovement;
}

export function StrengthExerciseMovementToJSON(value?: StrengthExerciseMovement | null): any {
    return value as any;
}

