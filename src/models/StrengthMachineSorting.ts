/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
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
export const StrengthMachineSorting = {
    Id: 'id',
    Name: 'name',
    Line: 'line'
} as const;
export type StrengthMachineSorting = typeof StrengthMachineSorting[keyof typeof StrengthMachineSorting];


export function StrengthMachineSortingFromJSON(json: any): StrengthMachineSorting {
    return StrengthMachineSortingFromJSONTyped(json, false);
}

export function StrengthMachineSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineSorting {
    return json as StrengthMachineSorting;
}

export function StrengthMachineSortingToJSON(value?: StrengthMachineSorting | null): any {
    return value as any;
}

