/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
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
export const MuscleSorting = {
    Id: 'id',
    Muscle: 'muscle',
    TargetLevel: 'targetLevel'
} as const;
export type MuscleSorting = typeof MuscleSorting[keyof typeof MuscleSorting];


export function MuscleSortingFromJSON(json: any): MuscleSorting {
    return MuscleSortingFromJSONTyped(json, false);
}

export function MuscleSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuscleSorting {
    return json as MuscleSorting;
}

export function MuscleSortingToJSON(value?: MuscleSorting | null): any {
    return value as any;
}

