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
export const StretchExerciseSorting = {
    Id: 'id',
    DefaultAlias: 'defaultAlias'
} as const;
export type StretchExerciseSorting = typeof StretchExerciseSorting[keyof typeof StretchExerciseSorting];


export function StretchExerciseSortingFromJSON(json: any): StretchExerciseSorting {
    return StretchExerciseSortingFromJSONTyped(json, false);
}

export function StretchExerciseSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseSorting {
    return json as StretchExerciseSorting;
}

export function StretchExerciseSortingToJSON(value?: StretchExerciseSorting | null): any {
    return value as any;
}

