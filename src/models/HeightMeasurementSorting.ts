/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
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
export const HeightMeasurementSorting = {
    Id: 'id',
    Source: 'source',
    TakenAt: 'takenAt'
} as const;
export type HeightMeasurementSorting = typeof HeightMeasurementSorting[keyof typeof HeightMeasurementSorting];


export function HeightMeasurementSortingFromJSON(json: any): HeightMeasurementSorting {
    return HeightMeasurementSortingFromJSONTyped(json, false);
}

export function HeightMeasurementSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeightMeasurementSorting {
    return json as HeightMeasurementSorting;
}

export function HeightMeasurementSortingToJSON(value?: HeightMeasurementSorting | null): any {
    return value as any;
}

