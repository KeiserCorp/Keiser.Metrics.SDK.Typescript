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
export const MSeriesDataSetSorting = {
    Id: 'id',
    StartedAt: 'startedAt',
    EndedAt: 'endedAt'
} as const;
export type MSeriesDataSetSorting = typeof MSeriesDataSetSorting[keyof typeof MSeriesDataSetSorting];


export function MSeriesDataSetSortingFromJSON(json: any): MSeriesDataSetSorting {
    return MSeriesDataSetSortingFromJSONTyped(json, false);
}

export function MSeriesDataSetSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesDataSetSorting {
    return json as MSeriesDataSetSorting;
}

export function MSeriesDataSetSortingToJSON(value?: MSeriesDataSetSorting | null): any {
    return value as any;
}

