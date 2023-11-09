/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MSeriesChallengeParticipantData } from './MSeriesChallengeParticipantData';
import {
    MSeriesChallengeParticipantDataFromJSON,
    MSeriesChallengeParticipantDataFromJSONTyped,
    MSeriesChallengeParticipantDataToJSON,
} from './MSeriesChallengeParticipantData';

/**
 * 
 * @export
 * @interface MSeriesChallengeParticipantResponse
 */
export interface MSeriesChallengeParticipantResponse {
    /**
     * 
     * @type {MSeriesChallengeParticipantData}
     * @memberof MSeriesChallengeParticipantResponse
     */
    mSeriesChallengeParticipant: MSeriesChallengeParticipantData;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeParticipantResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeParticipantResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesChallengeParticipantResponse interface.
 */
export function instanceOfMSeriesChallengeParticipantResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesChallengeParticipant" in value;

    return isInstance;
}

export function MSeriesChallengeParticipantResponseFromJSON(json: any): MSeriesChallengeParticipantResponse {
    return MSeriesChallengeParticipantResponseFromJSONTyped(json, false);
}

export function MSeriesChallengeParticipantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeParticipantResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesChallengeParticipant': MSeriesChallengeParticipantDataFromJSON(json['mSeriesChallengeParticipant']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesChallengeParticipantResponseToJSON(value?: MSeriesChallengeParticipantResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesChallengeParticipant': MSeriesChallengeParticipantDataToJSON(value.mSeriesChallengeParticipant),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

