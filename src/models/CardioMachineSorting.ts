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
export const CardioMachineSorting = {
    Id: 'id',
    Name: 'name'
} as const;
export type CardioMachineSorting = typeof CardioMachineSorting[keyof typeof CardioMachineSorting];


export function CardioMachineSortingFromJSON(json: any): CardioMachineSorting {
    return CardioMachineSortingFromJSONTyped(json, false);
}

export function CardioMachineSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioMachineSorting {
    return json as CardioMachineSorting;
}

export function CardioMachineSortingToJSON(value?: CardioMachineSorting | null): any {
    return value as any;
}

