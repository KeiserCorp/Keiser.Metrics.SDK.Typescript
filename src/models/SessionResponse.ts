/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.29
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
 * @interface SessionResponse
 */
export interface SessionResponse {
    /**
     * 
     * @type {SessionData}
     * @memberof SessionResponse
     */
    session: SessionData;
    /**
     * 
     * @type {string}
     * @memberof SessionResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the SessionResponse interface.
 */
export function instanceOfSessionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "session" in value;

    return isInstance;
}

export function SessionResponseFromJSON(json: any): SessionResponse {
    return SessionResponseFromJSONTyped(json, false);
}

export function SessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'session': SessionDataFromJSON(json['session']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function SessionResponseToJSON(value?: SessionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'session': SessionDataToJSON(value.session),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

