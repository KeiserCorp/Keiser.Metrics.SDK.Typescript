/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
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
export const ExerciseOrdinalSetSorting = {
    Id: 'id',
    Name: 'name',
    Code: 'code'
} as const;
export type ExerciseOrdinalSetSorting = typeof ExerciseOrdinalSetSorting[keyof typeof ExerciseOrdinalSetSorting];


export function ExerciseOrdinalSetSortingFromJSON(json: any): ExerciseOrdinalSetSorting {
    return ExerciseOrdinalSetSortingFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetSorting {
    return json as ExerciseOrdinalSetSorting;
}

export function ExerciseOrdinalSetSortingToJSON(value?: ExerciseOrdinalSetSorting | null): any {
    return value as any;
}

