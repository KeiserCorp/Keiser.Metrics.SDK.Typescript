/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
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
export const DevelopmentAccountSorting = {
    Id: 'id',
    Company: 'company'
} as const;
export type DevelopmentAccountSorting = typeof DevelopmentAccountSorting[keyof typeof DevelopmentAccountSorting];


export function DevelopmentAccountSortingFromJSON(json: any): DevelopmentAccountSorting {
    return DevelopmentAccountSortingFromJSONTyped(json, false);
}

export function DevelopmentAccountSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevelopmentAccountSorting {
    return json as DevelopmentAccountSorting;
}

export function DevelopmentAccountSortingToJSON(value?: DevelopmentAccountSorting | null): any {
    return value as any;
}

