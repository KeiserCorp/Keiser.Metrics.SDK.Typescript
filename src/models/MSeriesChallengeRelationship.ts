/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
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
export const MSeriesChallengeRelationship = {
    Owned: 'owned',
    Joined: 'joined'
} as const;
export type MSeriesChallengeRelationship = typeof MSeriesChallengeRelationship[keyof typeof MSeriesChallengeRelationship];


export function MSeriesChallengeRelationshipFromJSON(json: any): MSeriesChallengeRelationship {
    return MSeriesChallengeRelationshipFromJSONTyped(json, false);
}

export function MSeriesChallengeRelationshipFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeRelationship {
    return json as MSeriesChallengeRelationship;
}

export function MSeriesChallengeRelationshipToJSON(value?: MSeriesChallengeRelationship | null): any {
    return value as any;
}

