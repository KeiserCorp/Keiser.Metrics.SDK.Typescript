/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.10
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
export const MSeriesChallengeSorting = {
    Id: 'id',
    StartAt: 'startAt',
    EndAt: 'endAt',
    CreatedAt: 'createdAt'
} as const;
export type MSeriesChallengeSorting = typeof MSeriesChallengeSorting[keyof typeof MSeriesChallengeSorting];


export function MSeriesChallengeSortingFromJSON(json: any): MSeriesChallengeSorting {
    return MSeriesChallengeSortingFromJSONTyped(json, false);
}

export function MSeriesChallengeSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeSorting {
    return json as MSeriesChallengeSorting;
}

export function MSeriesChallengeSortingToJSON(value?: MSeriesChallengeSorting | null): any {
    return value as any;
}

