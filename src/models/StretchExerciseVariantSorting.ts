/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.2
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
export const StretchExerciseVariantSorting = {
    Id: 'id',
    Variant: 'variant'
} as const;
export type StretchExerciseVariantSorting = typeof StretchExerciseVariantSorting[keyof typeof StretchExerciseVariantSorting];


export function StretchExerciseVariantSortingFromJSON(json: any): StretchExerciseVariantSorting {
    return StretchExerciseVariantSortingFromJSONTyped(json, false);
}

export function StretchExerciseVariantSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StretchExerciseVariantSorting {
    return json as StretchExerciseVariantSorting;
}

export function StretchExerciseVariantSortingToJSON(value?: StretchExerciseVariantSorting | null): any {
    return value as any;
}

