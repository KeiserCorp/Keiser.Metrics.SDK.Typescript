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
export const StrengthMachineDataSetSorting = {
    Id: 'id',
    CompletedAt: 'completedAt'
} as const;
export type StrengthMachineDataSetSorting = typeof StrengthMachineDataSetSorting[keyof typeof StrengthMachineDataSetSorting];


export function StrengthMachineDataSetSortingFromJSON(json: any): StrengthMachineDataSetSorting {
    return StrengthMachineDataSetSortingFromJSONTyped(json, false);
}

export function StrengthMachineDataSetSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineDataSetSorting {
    return json as StrengthMachineDataSetSorting;
}

export function StrengthMachineDataSetSortingToJSON(value?: StrengthMachineDataSetSorting | null): any {
    return value as any;
}

