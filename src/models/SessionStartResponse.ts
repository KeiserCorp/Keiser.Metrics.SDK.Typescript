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

import { exists, mapValues } from '../runtime';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';

/**
 * 
 * @export
 * @interface SessionStartResponse
 */
export interface SessionStartResponse {
    /**
     * 
     * @type {object}
     * @memberof SessionStartResponse
     */
    echipData: object;
    /**
     * 
     * @type {SessionData}
     * @memberof SessionStartResponse
     */
    session?: SessionData;
    /**
     * 
     * @type {string}
     * @memberof SessionStartResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionStartResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the SessionStartResponse interface.
 */
export function instanceOfSessionStartResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "echipData" in value;

    return isInstance;
}

export function SessionStartResponseFromJSON(json: any): SessionStartResponse {
    return SessionStartResponseFromJSONTyped(json, false);
}

export function SessionStartResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionStartResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'echipData': json['echipData'],
        'session': !exists(json, 'session') ? undefined : SessionDataFromJSON(json['session']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function SessionStartResponseToJSON(value?: SessionStartResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'echipData': value.echipData,
        'session': SessionDataToJSON(value.session),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

