/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.21
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

/**
 * 
 * @export
 * @interface MSeriesChallengeResponse
 */
export interface MSeriesChallengeResponse {
    /**
     * 
     * @type {MSeriesChallengeData}
     * @memberof MSeriesChallengeResponse
     */
    mSeriesChallenge: MSeriesChallengeData;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof MSeriesChallengeResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the MSeriesChallengeResponse interface.
 */
export function instanceOfMSeriesChallengeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mSeriesChallenge" in value;

    return isInstance;
}

export function MSeriesChallengeResponseFromJSON(json: any): MSeriesChallengeResponse {
    return MSeriesChallengeResponseFromJSONTyped(json, false);
}

export function MSeriesChallengeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MSeriesChallengeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mSeriesChallenge': MSeriesChallengeDataFromJSON(json['mSeriesChallenge']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function MSeriesChallengeResponseToJSON(value?: MSeriesChallengeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mSeriesChallenge': MSeriesChallengeDataToJSON(value.mSeriesChallenge),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

