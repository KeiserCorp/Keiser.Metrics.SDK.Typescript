/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.19
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
export const ExerciseOrdinalSetAssignmentSorting = {
    Id: 'id',
    OrdinalIdentifier: 'ordinalIdentifier'
} as const;
export type ExerciseOrdinalSetAssignmentSorting = typeof ExerciseOrdinalSetAssignmentSorting[keyof typeof ExerciseOrdinalSetAssignmentSorting];


export function ExerciseOrdinalSetAssignmentSortingFromJSON(json: any): ExerciseOrdinalSetAssignmentSorting {
    return ExerciseOrdinalSetAssignmentSortingFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetAssignmentSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetAssignmentSorting {
    return json as ExerciseOrdinalSetAssignmentSorting;
}

export function ExerciseOrdinalSetAssignmentSortingToJSON(value?: ExerciseOrdinalSetAssignmentSorting | null): any {
    return value as any;
}

