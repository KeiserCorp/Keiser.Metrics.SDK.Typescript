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

import { exists, mapValues } from '../runtime';
import type { MSeriesChallengeData } from './MSeriesChallengeData';
import {
    MSeriesChallengeDataFromJSON,
    MSeriesChallengeDataFromJSONTyped,
    MSeriesChallengeDataToJSON,
} from './MSeriesChallengeData';
import type { MSeriesChallengeListResponseMeta } from './MSeriesChallengeListResponseMeta';
import {
    MSeriesChallengeListResponseMetaFromJSON,
    MSeriesChallengeListResponseMetaFromJSONTyped,
    MSeriesChallengeListResponseMetaToJSON,
} from './MSeriesChallengeListResponseMeta';

/**
 * 
 * @export
 * @interface MSeriesChallengeListResponse
 */
export interface MSeriesChallengeListResponse {
    /**
     * 
     * @type {Array<MSeriesChallengeData>}
     * @memberof MSeriesChallengeListResponse
     */
    mSeriesChallenges: Array<MSeriesChallengeData>;
    /**
     * 
     * @type {MSeriesChallengeListResponseMeta}
     * @memberof MSeriesChallengeListResponse
     */
    mSeriesChallengesMeta: MSeriesChallengeListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesChallengeListResponse interface.
 */
export function instanceOfMSeriesChallengeListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesChallenges" in value;
    isInstance = isInstance && "mSeriesChallengesMeta" in value;

    return isInstance;
}

export function MSeriesChallengeListResponseFromJSON(json: any): MSeriesChallengeListResponse {
    return MSeriesChallengeListResponseFromJSONTyped(json, false);
}

export function MSeriesChallengeListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesChallenges': ((json['mSeriesChallenges'] as Array<any>).map(MSeriesChallengeDataFromJSON)),
        'mSeriesChallengesMeta': MSeriesChallengeListResponseMetaFromJSON(json['mSeriesChallengesMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesChallengeListResponseToJSON(value?: MSeriesChallengeListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesChallenges': ((value.mSeriesChallenges as Array<any>).map(MSeriesChallengeDataToJSON)),
        'mSeriesChallengesMeta': MSeriesChallengeListResponseMetaToJSON(value.mSeriesChallengesMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

