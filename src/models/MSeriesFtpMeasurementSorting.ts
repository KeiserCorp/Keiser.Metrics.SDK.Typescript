/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.15
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
export const MSeriesFtpMeasurementSorting = {
    Id: 'id',
    TakenAt: 'takenAt',
    Source: 'source'
} as const;
export type MSeriesFtpMeasurementSorting = typeof MSeriesFtpMeasurementSorting[keyof typeof MSeriesFtpMeasurementSorting];


export function MSeriesFtpMeasurementSortingFromJSON(json: any): MSeriesFtpMeasurementSorting {
    return MSeriesFtpMeasurementSortingFromJSONTyped(json, false);
}

export function MSeriesFtpMeasurementSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesFtpMeasurementSorting {
    return json as MSeriesFtpMeasurementSorting;
}

export function MSeriesFtpMeasurementSortingToJSON(value?: MSeriesFtpMeasurementSorting | null): any {
    return value as any;
}

