/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
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
export const FacilityStrengthMachineSorting = {
    Id: 'id',
    Model: 'model'
} as const;
export type FacilityStrengthMachineSorting = typeof FacilityStrengthMachineSorting[keyof typeof FacilityStrengthMachineSorting];


export function FacilityStrengthMachineSortingFromJSON(json: any): FacilityStrengthMachineSorting {
    return FacilityStrengthMachineSortingFromJSONTyped(json, false);
}

export function FacilityStrengthMachineSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineSorting {
    return json as FacilityStrengthMachineSorting;
}

export function FacilityStrengthMachineSortingToJSON(value?: FacilityStrengthMachineSorting | null): any {
    return value as any;
}

