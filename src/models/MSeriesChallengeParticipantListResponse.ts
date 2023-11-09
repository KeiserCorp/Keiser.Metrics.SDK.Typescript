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
import type { MSeriesChallengeParticipantListResponseMeta } from './MSeriesChallengeParticipantListResponseMeta';
import {
    MSeriesChallengeParticipantListResponseMetaFromJSON,
    MSeriesChallengeParticipantListResponseMetaFromJSONTyped,
    MSeriesChallengeParticipantListResponseMetaToJSON,
} from './MSeriesChallengeParticipantListResponseMeta';

/**
 * 
 * @export
 * @interface MSeriesChallengeParticipantListResponse
 */
export interface MSeriesChallengeParticipantListResponse {
    /**
     * 
     * @type {Array<MSeriesChallengeParticipantData>}
     * @memberof MSeriesChallengeParticipantListResponse
     */
    mSeriesChallengeParticipants: Array<MSeriesChallengeParticipantData>;
    /**
     * 
     * @type {MSeriesChallengeParticipantListResponseMeta}
     * @memberof MSeriesChallengeParticipantListResponse
     */
    mSeriesChallengeParticipantsMeta: MSeriesChallengeParticipantListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeParticipantListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeParticipantListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesChallengeParticipantListResponse interface.
 */
export function instanceOfMSeriesChallengeParticipantListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesChallengeParticipants" in value;
    isInstance = isInstance && "mSeriesChallengeParticipantsMeta" in value;

    return isInstance;
}

export function MSeriesChallengeParticipantListResponseFromJSON(json: any): MSeriesChallengeParticipantListResponse {
    return MSeriesChallengeParticipantListResponseFromJSONTyped(json, false);
}

export function MSeriesChallengeParticipantListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeParticipantListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesChallengeParticipants': ((json['mSeriesChallengeParticipants'] as Array<any>).map(MSeriesChallengeParticipantDataFromJSON)),
        'mSeriesChallengeParticipantsMeta': MSeriesChallengeParticipantListResponseMetaFromJSON(json['mSeriesChallengeParticipantsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesChallengeParticipantListResponseToJSON(value?: MSeriesChallengeParticipantListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesChallengeParticipants': ((value.mSeriesChallengeParticipants as Array<any>).map(MSeriesChallengeParticipantDataToJSON)),
        'mSeriesChallengeParticipantsMeta': MSeriesChallengeParticipantListResponseMetaToJSON(value.mSeriesChallengeParticipantsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

