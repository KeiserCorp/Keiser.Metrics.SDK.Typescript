/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
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
export const SessionSorting = {
    Id: 'id',
    StartedAt: 'startedAt',
    EndedAt: 'endedAt'
} as const;
export type SessionSorting = typeof SessionSorting[keyof typeof SessionSorting];


export function SessionSortingFromJSON(json: any): SessionSorting {
    return SessionSortingFromJSONTyped(json, false);
}

export function SessionSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionSorting {
    return json as SessionSorting;
}

export function SessionSortingToJSON(value?: SessionSorting | null): any {
    return value as any;
}

