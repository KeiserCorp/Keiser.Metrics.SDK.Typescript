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
export const ExerciseAliasSorting = {
    Id: 'id',
    Alias: 'alias'
} as const;
export type ExerciseAliasSorting = typeof ExerciseAliasSorting[keyof typeof ExerciseAliasSorting];


export function ExerciseAliasSortingFromJSON(json: any): ExerciseAliasSorting {
    return ExerciseAliasSortingFromJSONTyped(json, false);
}

export function ExerciseAliasSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseAliasSorting {
    return json as ExerciseAliasSorting;
}

export function ExerciseAliasSortingToJSON(value?: ExerciseAliasSorting | null): any {
    return value as any;
}

