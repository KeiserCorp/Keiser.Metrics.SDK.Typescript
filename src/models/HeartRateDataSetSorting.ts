/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
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
export const HeartRateDataSetSorting = {
    Id: 'id',
    StartedAt: 'startedAt',
    EndedAt: 'endedAt',
    Source: 'source',
    MaxHeartRate: 'maxHeartRate',
    AverageHeartRate: 'averageHeartRate'
} as const;
export type HeartRateDataSetSorting = typeof HeartRateDataSetSorting[keyof typeof HeartRateDataSetSorting];


export function HeartRateDataSetSortingFromJSON(json: any): HeartRateDataSetSorting {
    return HeartRateDataSetSortingFromJSONTyped(json, false);
}

export function HeartRateDataSetSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartRateDataSetSorting {
    return json as HeartRateDataSetSorting;
}

export function HeartRateDataSetSortingToJSON(value?: HeartRateDataSetSorting | null): any {
    return value as any;
}

