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
import type { SessionListResponseMeta } from './SessionListResponseMeta';
import {
    SessionListResponseMetaFromJSON,
    SessionListResponseMetaFromJSONTyped,
    SessionListResponseMetaToJSON,
} from './SessionListResponseMeta';

/**
 * 
 * @export
 * @interface SessionListResponse
 */
export interface SessionListResponse {
    /**
     * 
     * @type {Array<SessionData>}
     * @memberof SessionListResponse
     */
    sessions: Array<SessionData>;
    /**
     * 
     * @type {SessionListResponseMeta}
     * @memberof SessionListResponse
     */
    sessionsMeta: SessionListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof SessionListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the SessionListResponse interface.
 */
export function instanceOfSessionListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessions" in value;
    isInstance = isInstance && "sessionsMeta" in value;

    return isInstance;
}

export function SessionListResponseFromJSON(json: any): SessionListResponse {
    return SessionListResponseFromJSONTyped(json, false);
}

export function SessionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessions': ((json['sessions'] as Array<any>).map(SessionDataFromJSON)),
        'sessionsMeta': SessionListResponseMetaFromJSON(json['sessionsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function SessionListResponseToJSON(value?: SessionListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sessions': ((value.sessions as Array<any>).map(SessionDataToJSON)),
        'sessionsMeta': SessionListResponseMetaToJSON(value.sessionsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

