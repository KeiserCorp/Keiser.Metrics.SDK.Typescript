/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.25
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
export const CardioExerciseSorting = {
    Id: 'id',
    DefaultAlias: 'defaultAlias'
} as const;
export type CardioExerciseSorting = typeof CardioExerciseSorting[keyof typeof CardioExerciseSorting];


export function CardioExerciseSortingFromJSON(json: any): CardioExerciseSorting {
    return CardioExerciseSortingFromJSONTyped(json, false);
}

export function CardioExerciseSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseSorting {
    return json as CardioExerciseSorting;
}

export function CardioExerciseSortingToJSON(value?: CardioExerciseSorting | null): any {
    return value as any;
}

