/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
export const MSeriesChallengeParticipantSorting = {
    Id: 'id',
    Name: 'name',
    JoinedAt: 'joinedAt'
} as const;
export type MSeriesChallengeParticipantSorting = typeof MSeriesChallengeParticipantSorting[keyof typeof MSeriesChallengeParticipantSorting];


export function MSeriesChallengeParticipantSortingFromJSON(json: any): MSeriesChallengeParticipantSorting {
    return MSeriesChallengeParticipantSortingFromJSONTyped(json, false);
}

export function MSeriesChallengeParticipantSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeParticipantSorting {
    return json as MSeriesChallengeParticipantSorting;
}

export function MSeriesChallengeParticipantSortingToJSON(value?: MSeriesChallengeParticipantSorting | null): any {
    return value as any;
}

