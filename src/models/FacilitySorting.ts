/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.32
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
export const FacilitySorting = {
    Id: 'id',
    Name: 'name'
} as const;
export type FacilitySorting = typeof FacilitySorting[keyof typeof FacilitySorting];


export function FacilitySortingFromJSON(json: any): FacilitySorting {
    return FacilitySortingFromJSONTyped(json, false);
}

export function FacilitySortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilitySorting {
    return json as FacilitySorting;
}

export function FacilitySortingToJSON(value?: FacilitySorting | null): any {
    return value as any;
}

