/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
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
export const StrengthExerciseSorting = {
    Id: 'id',
    DefaultAlias: 'defaultAlias',
    Category: 'category',
    Movement: 'movement',
    Plane: 'plane'
} as const;
export type StrengthExerciseSorting = typeof StrengthExerciseSorting[keyof typeof StrengthExerciseSorting];


export function StrengthExerciseSortingFromJSON(json: any): StrengthExerciseSorting {
    return StrengthExerciseSortingFromJSONTyped(json, false);
}

export function StrengthExerciseSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseSorting {
    return json as StrengthExerciseSorting;
}

export function StrengthExerciseSortingToJSON(value?: StrengthExerciseSorting | null): any {
    return value as any;
}

