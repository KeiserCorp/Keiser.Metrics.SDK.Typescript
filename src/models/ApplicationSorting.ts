/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.24
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
export const ApplicationSorting = {
    Id: 'id',
    ApplicationName: 'applicationName'
} as const;
export type ApplicationSorting = typeof ApplicationSorting[keyof typeof ApplicationSorting];


export function ApplicationSortingFromJSON(json: any): ApplicationSorting {
    return ApplicationSortingFromJSONTyped(json, false);
}

export function ApplicationSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationSorting {
    return json as ApplicationSorting;
}

export function ApplicationSortingToJSON(value?: ApplicationSorting | null): any {
    return value as any;
}

