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
export const WeightMeasurementSorting = {
    Id: 'id',
    Source: 'source',
    TakenAt: 'takenAt'
} as const;
export type WeightMeasurementSorting = typeof WeightMeasurementSorting[keyof typeof WeightMeasurementSorting];


export function WeightMeasurementSortingFromJSON(json: any): WeightMeasurementSorting {
    return WeightMeasurementSortingFromJSONTyped(json, false);
}

export function WeightMeasurementSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeightMeasurementSorting {
    return json as WeightMeasurementSorting;
}

export function WeightMeasurementSortingToJSON(value?: WeightMeasurementSorting | null): any {
    return value as any;
}

