/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.8
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
export const CardioExerciseVariantSorting = {
    Id: 'id',
    Variant: 'variant'
} as const;
export type CardioExerciseVariantSorting = typeof CardioExerciseVariantSorting[keyof typeof CardioExerciseVariantSorting];


export function CardioExerciseVariantSortingFromJSON(json: any): CardioExerciseVariantSorting {
    return CardioExerciseVariantSortingFromJSONTyped(json, false);
}

export function CardioExerciseVariantSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseVariantSorting {
    return json as CardioExerciseVariantSorting;
}

export function CardioExerciseVariantSortingToJSON(value?: CardioExerciseVariantSorting | null): any {
    return value as any;
}

