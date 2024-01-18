/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.26
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MSeriesChallengeParticipantData
 */
export interface MSeriesChallengeParticipantData {
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantData
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantData
     */
    mSeriesChallengeId: number;
    /**
     * 
     * @type {Date}
     * @memberof MSeriesChallengeParticipantData
     */
    joinedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantData
     */
    currentValue: number;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeParticipantData
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof MSeriesChallengeParticipantData
     */
    rank?: number;
}

/**
 * Check if a given object implements the MSeriesChallengeParticipantData interface.
 */
export function instanceOfMSeriesChallengeParticipantData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "mSeriesChallengeId" in value;
    isInstance = isInstance && "joinedAt" in value;
    isInstance = isInstance && "currentValue" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function MSeriesChallengeParticipantDataFromJSON(json: any): MSeriesChallengeParticipantData {
    return MSeriesChallengeParticipantDataFromJSONTyped(json, false);
}

export function MSeriesChallengeParticipantDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeParticipantData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'mSeriesChallengeId': json['mSeriesChallengeId'],
        'joinedAt': (new Date(json['joinedAt'])),
        'currentValue': json['currentValue'],
        'name': json['name'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
    };
}

export function MSeriesChallengeParticipantDataToJSON(value?: MSeriesChallengeParticipantData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'mSeriesChallengeId': value.mSeriesChallengeId,
        'joinedAt': (value.joinedAt.toISOString()),
        'currentValue': value.currentValue,
        'name': value.name,
        'rank': value.rank,
    };
}

