/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
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
export const OAuthServiceSorting = {
    Id: 'id',
    Service: 'service'
} as const;
export type OAuthServiceSorting = typeof OAuthServiceSorting[keyof typeof OAuthServiceSorting];


export function OAuthServiceSortingFromJSON(json: any): OAuthServiceSorting {
    return OAuthServiceSortingFromJSONTyped(json, false);
}

export function OAuthServiceSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthServiceSorting {
    return json as OAuthServiceSorting;
}

export function OAuthServiceSortingToJSON(value?: OAuthServiceSorting | null): any {
    return value as any;
}

