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
export const FacilityAccessControlIPRangeSorting = {
    Id: 'id',
    Name: 'name'
} as const;
export type FacilityAccessControlIPRangeSorting = typeof FacilityAccessControlIPRangeSorting[keyof typeof FacilityAccessControlIPRangeSorting];


export function FacilityAccessControlIPRangeSortingFromJSON(json: any): FacilityAccessControlIPRangeSorting {
    return FacilityAccessControlIPRangeSortingFromJSONTyped(json, false);
}

export function FacilityAccessControlIPRangeSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityAccessControlIPRangeSorting {
    return json as FacilityAccessControlIPRangeSorting;
}

export function FacilityAccessControlIPRangeSortingToJSON(value?: FacilityAccessControlIPRangeSorting | null): any {
    return value as any;
}

